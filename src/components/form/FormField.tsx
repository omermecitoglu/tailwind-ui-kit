import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { getFieldConstraints } from "@omer-x/zod-to-form-constraints";
import { type ZodType } from "zod";

interface FormFieldProps extends useRender.ComponentProps<"input"> {
  schema: ZodType,
}

const FormField = ({
  schema,
  render,
  ...otherProps
}: FormFieldProps) => {
  return useRender({
    defaultTagName: "input",
    render,
    props: mergeProps<"input">(getFieldConstraints(schema), otherProps),
  });
};

export default FormField;
