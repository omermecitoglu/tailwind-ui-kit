"use client";
import { Form } from "@base-ui/react/form";
import { type ComponentProps, useActionState, useRef } from "react";
import { getDirtyFormData } from "../../utils/dirty-form";
import JustDiv from "../elements/JustDiv";
import { FormContext } from "./FormContext";

type BaseFormProps = Omit<ComponentProps<"form">, "action"> & {
  action: (initialState: unknown, formData: FormData) => Promise<Record<string, string>>,
  messages?: Partial<Record<string, string>>,
  renderMessages?: ComponentProps<typeof JustDiv>["render"],
  onlyDirty?: boolean,
};

const BaseForm = ({
  action,
  messages: messageTranslations = {},
  renderMessages,
  onlyDirty = false,
  className,
  children,
}: BaseFormProps) => {
  const [state, formAction, _loading] = useActionState(action, {});
  const fieldsRef = useRef<Set<string>>(new Set());
  const formRef = useRef<HTMLFormElement>(null);

  const getFieldMessage = (fieldName: string) => {
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

  const { formMessages, fieldMessages } = Object.keys(state).reduce((bundle, key) => {
    if (fieldsRef.current.has(key)) {
      return { ...bundle, fieldMessages: { ...bundle.fieldMessages, [key]: state[key] } };
    }
    return { ...bundle, formMessages: { ...bundle.formMessages, [key]: state[key] } };
  }, {
    formMessages: {} as Record<string, string>,
    fieldMessages: {} as Record<string, string>,
  });

  const alteredAction = async (fd: FormData) => {
    if (!onlyDirty) return formAction(fd);
    const form = formRef.current;
    if (!form) return formAction(fd);
    return formAction(getDirtyFormData(form));
  };

  return (
    <Form ref={formRef} action={alteredAction} className={className} errors={fieldMessages}>
      {Object.entries(formMessages).map(([messageKey, message]) => (
        <JustDiv
          key={messageKey}
          data-message-type={messageKey.startsWith("[") ? messageKey.replace(/^\[|\]$/g, "") : "default"}
          render={renderMessages}
        >
          {messageTranslations[message] || message}
        </JustDiv>
      ))}
      <FormContext value={{ getFieldMessage, messageTranslations, registerField, unregisterField }}>
        {children}
      </FormContext>
    </Form>
  );
};

export default BaseForm;
