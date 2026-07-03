import { createContext } from "react";

interface FormContextInterface {
  getError: (fieldName: string) => string | null,
  errorMessages: Partial<Record<string, string>>,
  registerField: (fieldName: string) => void,
  unregisterField: (fieldName: string) => void,
}

export const FormContext = createContext<FormContextInterface>({
  getError: () => null,
  errorMessages: {},
  registerField: () => null,
  unregisterField: () => null,
});
