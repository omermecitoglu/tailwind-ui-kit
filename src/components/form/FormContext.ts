import { createContext } from "react";

interface FormContextInterface {
  getError: (fieldName: string) => string | null,
  registerField: (fieldName: string) => void,
  unregisterField: (fieldName: string) => void,
}

export const FormContext = createContext<FormContextInterface>({
  getError: () => null,
  registerField: () => null,
  unregisterField: () => null,
});
