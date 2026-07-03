"use client";
import { Form as BaseForm } from "@base-ui/react/form";
import { type ComponentProps, useActionState, useRef } from "react";
import JustDiv from "../elements/JustDiv";
import { FormContext } from "./FormContext";

type FormProps = Omit<ComponentProps<"form">, "action"> & {
  action: (initialState: unknown, formData: FormData) => Promise<Record<string, string>>,
  messages?: Partial<Record<string, string>>,
  renderMessages?: ComponentProps<typeof JustDiv>["render"],
};

const Form = ({
  action,
  messages = {},
  renderMessages,
  className,
  children,
}: FormProps) => {
  const [state, formAction, _loading] = useActionState(action, {});
  const fieldsRef = useRef<Set<string>>(new Set());

  const getError = (fieldName: string) => {
    if (fieldName in state) {
      return state[fieldName];
    }
    return null;
  };

  const registerField = (fieldName: string) => {
    fieldsRef.current.add(fieldName);
  };

  const unregisterField = (fieldName: string) => {
    fieldsRef.current.delete(fieldName);
  };

  const globalErrors = Object.fromEntries(Object.entries(state).filter(([key]) => {
    if (!fieldsRef.current.has(key)) return true;
    return key.startsWith("[") && key.endsWith("]");
  }));

  return (
    <BaseForm action={formAction} className={className} errors={state}>
      {Object.entries(globalErrors).map(([errorKey, error]) => (
        <JustDiv
          key={errorKey}
          data-message-type={errorKey.startsWith("[") ? errorKey.replace(/^\[|\]$/g, "") : "default"}
          render={renderMessages}
        >
          {messages[error] || error}
        </JustDiv>
      ))}
      <FormContext value={{ getError, errorMessages: messages, registerField, unregisterField }}>
        {children}
      </FormContext>
    </BaseForm>
  );
};

export default Form;
