import { createContext } from "react";

interface FormContextInterface {
  getFieldMessage: (fieldName: string) => string | null,
  messageTranslations: Partial<Record<string, string>>,
  registerField: (fieldName: string) => void,
  unregisterField: (fieldName: string) => void,
}

export const FormContext = createContext<FormContextInterface>({
  getFieldMessage: () => null,
  messageTranslations: {},
  registerField: () => null,
  unregisterField: () => null,
});
