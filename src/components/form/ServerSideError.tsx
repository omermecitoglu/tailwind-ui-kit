"use client";
import { Field } from "@base-ui/react/field";
import { type ComponentProps, use } from "react";
import { FormContext } from "./FormContext";

type ServerSideErrorProps = {
  name: string,
  messages?: Partial<Record<string, string>>,
  render?: ComponentProps<typeof Field.Error>["render"],
};

const ServerSideError = ({
  name,
  messages: fieldMessages = {},
  render,
}: ServerSideErrorProps) => {
  const { getFieldMessage, messageTranslations: formMessages } = use(FormContext);
  const message = getFieldMessage(name);
  if (!message) return null;
  return (
    <Field.Error match render={render}>
      {fieldMessages[message] || formMessages[message] || message}
    </Field.Error>
  );
};

export default ServerSideError;
