import { type ReactNode } from "react";

type SimpleInputProps = {
  children: ReactNode,
};

const SimpleInput = ({
  children,
}: SimpleInputProps) => {
  return (
    <>
      <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        First name
      </label>
      <div className="mt-2">
        <input
          id="first-name"
          name="first-name"
          type="text"
          autoComplete="given-name"
          className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 sm:text-sm/6"
        />
      </div>
    </>
  );
};

export default SimpleInput;
