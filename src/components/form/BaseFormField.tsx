import { Field } from "@base-ui/react/field";
import { getErrorMessagePayload, getFieldConstraints } from "@omer-x/zod-to-form-constraints";
import JustInput from "../elements/JustInput";
import FieldRoot from "./FieldRoot";
import ServerSideError from "./ServerSideError";
import type { ComponentProps } from "react";
import type { ZodType } from "zod";

type BaseFormFieldProps = {
  schema: ZodType,
  name: string,
  label?: string,
  messages?: Partial<Record<string, string>>,
  control?: ComponentProps<typeof JustInput>["render"],
  renderLabel?: ComponentProps<typeof Field.Label>["render"],
  renderErrors?: ComponentProps<typeof Field.Error>["render"],
  clientSideErrors?: Partial<Record<keyof ValidityState, string | ((payload: string | number | null) => string)>>,
};

const BaseFormField = ({
  schema,
  name,
  label,
  messages,
  control,
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
    <JustInput name={name} render={control} {...getFieldConstraints(schema)} />
    {Object.entries(clientSideErrors).map(([stateName, message]) => (
      <Field.Error key={stateName} match={stateName as keyof ValidityState} render={renderErrors}>
        {typeof message === "string" ? message : message(getErrorMessagePayload(schema, stateName as keyof ValidityState))}
      </Field.Error>
    ))}
    <ServerSideError name={name} messages={messages} render={renderErrors} />
  </FieldRoot>
);

export default BaseFormField;
