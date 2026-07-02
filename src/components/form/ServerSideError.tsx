"use client";
import { Field } from "@base-ui/react/field";
import { type ComponentProps, use } from "react";
import { FormContext } from "./FormContext";

type ServerSideErrorProps = {
  name: string,
  render?: ComponentProps<typeof Field.Error>["render"],
};

const ServerSideError = ({
  name,
  render,
}: ServerSideErrorProps) => {
  const { getError } = use(FormContext);
  const error = getError(name);
  return (
    <Field.Error match={error !== null} render={render}>
      {error}
    </Field.Error>
  );
};

export default ServerSideError;
