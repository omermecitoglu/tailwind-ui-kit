import { Field } from "@base-ui/react/field";
import { getErrorMessagePayload, getFieldConstraints } from "@omer-x/zod-to-form-constraints";
import FieldRoot from "./FieldRoot";
import ServerSideError from "./ServerSideError";
import type { ComponentProps, ReactNode } from "react";
import type { ZodType } from "zod";

type BaseFormFieldProps = {
  schema: ZodType,
  name: string,
  label?: string,
  messages?: Partial<Record<string, string>>,
  renderInput: (props: ReturnType<typeof getFieldConstraints>) => ReactNode,
  renderLabel?: ComponentProps<typeof Field.Label>["render"],
  renderErrors?: ComponentProps<typeof Field.Error>["render"],
  clientSideErrors?: Partial<Record<keyof ValidityState, string | ((payload: string | number | null) => string)>>,
};

const BaseFormField = ({
  schema,
  name,
  label,
  messages,
  renderInput,
  renderLabel,
  renderErrors,
  clientSideErrors = {},
}: BaseFormFieldProps) => (
  <FieldRoot name={name} className="flex w-full flex-col items-start gap-1">
    {typeof label !== "undefined" && (
      <Field.Label render={renderLabel}>
        {label}
      </Field.Label>
    )}
    {renderInput(getFieldConstraints(schema))}
    {Object.entries(clientSideErrors).map(([stateName, message]) => (
      <Field.Error key={stateName} match={stateName as keyof ValidityState} render={renderErrors}>
        {typeof message === "string" ? message : message(getErrorMessagePayload(schema, stateName as keyof ValidityState))}
      </Field.Error>
    ))}
    <ServerSideError name={name} messages={messages} render={renderErrors} />
  </FieldRoot>
);

export default BaseFormField;
