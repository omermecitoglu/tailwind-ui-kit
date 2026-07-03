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
  const { getError, errorMessages: formMessages } = use(FormContext);
  const error = getError(name);
  if (!error) return null;
  return (
    <Field.Error match render={render}>
      {fieldMessages[error] || formMessages[error] || error}
    </Field.Error>
  );
};

export default ServerSideError;
