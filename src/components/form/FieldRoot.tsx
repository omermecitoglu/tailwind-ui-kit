"use client";
import { Field } from "@base-ui/react/field";
import { type ReactNode, use, useEffect } from "react";
import { FormContext } from "./FormContext";

type FieldRootProps = {
  name: string,
  className?: string,
  children: ReactNode,
};

const FieldRoot = ({
  name,
  className,
  children,
}: FieldRootProps) => {
  const { registerField, unregisterField } = use(FormContext);

  useEffect(() => {
    registerField(name);
    return () => {
      unregisterField(name);
    };
  }, [name]);

  return (
    <Field.Root name={name} className={className}>
      {children}
    </Field.Root>
  );
};

export default FieldRoot;
