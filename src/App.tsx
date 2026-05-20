import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ComponentProps } from "react";
import BaseButton from "./components/button/BaseButton";
import { cn } from "./utils";

const App = () => {
  const handleClick = () => setTimeout(() => alert("You clicked a button half a second ago!"), 600);

  const Link = ({ children, ...otherProps }: ComponentProps<"a">) => (<a {...otherProps}>{children}</a>);

  const buttonStyles = cn([
    "bg-neutral-200",
    "text-neutral-900",
    "border",
    "border-neutral-300",
    "hover:bg-neutral-300",
    "focus-visible:outline-neutral-500",
    "disabled:bg-neutral-100",
    "disabled:text-neutral-400",
    "disabled:border-neutral-200",
  ]);

  const toggleTheme = () => {
    const currentTheme = document.body.dataset.theme;
    document.body.dataset.theme = currentTheme === "dark" ? "light" : "dark";
  };

  return (
    <div className="container mx-auto px-3 py-3">
      <BaseButton onClick={toggleTheme} className={buttonStyles}>
        <div className="hidden dark:block">
          <FontAwesomeIcon icon={faSun} size="lg" />
        </div>
        <div className="block dark:hidden">
          <FontAwesomeIcon icon={faMoon} size="lg" />
        </div>
        Switch Theme
      </BaseButton>
      <hr className="my-4 border-slate-900 dark:border-slate-100" />
      <hr className="my-4 border-slate-900 dark:border-slate-100" />
      <h1 className="text-4xl my-3 font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Buttons
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <BaseButton size="lg" className={buttonStyles}>Large</BaseButton>
          <BaseButton size="lg" pending className={buttonStyles}>Pending</BaseButton>
          <BaseButton size="lg" disabled className={buttonStyles}>Disabled</BaseButton>
          <BaseButton size="lg" disabled focusableWhenDisabled className={buttonStyles}>Focusable When Disabled</BaseButton>
          <BaseButton size="lg" className={buttonStyles}>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          </BaseButton>
          <div className="grid w-60">
            <BaseButton size="lg" className={buttonStyles}>Wide</BaseButton>
          </div>
          <div className="grid w-60">
            <BaseButton size="lg" className={buttonStyles}>
              <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              Wide with an Icon
            </BaseButton>
          </div>
        </div>
        <div className="flex gap-4">
          <BaseButton className={buttonStyles}>Default</BaseButton>
          <BaseButton pending className={buttonStyles}>Pending</BaseButton>
          <BaseButton disabled className={buttonStyles}>Disabled</BaseButton>
          <BaseButton disabled focusableWhenDisabled className={buttonStyles}>Focusable When Disabled</BaseButton>
          <BaseButton className={buttonStyles}>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          </BaseButton>
          <div className="grid w-60">
            <BaseButton className={buttonStyles}>Wide</BaseButton>
          </div>
          <div className="grid w-60">
            <BaseButton className={buttonStyles}>
              <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              Wide with an Icon
            </BaseButton>
          </div>
        </div>
        <div className="flex gap-4">
          <BaseButton size="sm" className={buttonStyles}>Small</BaseButton>
          <BaseButton size="sm" pending className={buttonStyles}>Pending</BaseButton>
          <BaseButton size="sm" disabled className={buttonStyles}>Disabled</BaseButton>
          <BaseButton size="sm" disabled focusableWhenDisabled className={buttonStyles}>Focusable When Disabled</BaseButton>
          <BaseButton size="sm" className={buttonStyles}>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          </BaseButton>
          <div className="grid w-60">
            <BaseButton size="sm" className={buttonStyles}>Wide</BaseButton>
          </div>
          <div className="grid w-60">
            <BaseButton size="sm" className={buttonStyles}>
              <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              Wide with an Icon
            </BaseButton>
          </div>
        </div>
        <div className="flex gap-4">
          <BaseButton size="xs" className={buttonStyles}>Tiny</BaseButton>
          <BaseButton size="xs" pending className={buttonStyles}>Pending</BaseButton>
          <BaseButton size="xs" disabled className={buttonStyles}>Disabled</BaseButton>
          <BaseButton size="xs" disabled focusableWhenDisabled className={buttonStyles}>Focusable When Disabled</BaseButton>
          <BaseButton size="xs" className={buttonStyles}>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          </BaseButton>
          <div className="grid w-60">
            <BaseButton size="xs" className={buttonStyles}>Wide</BaseButton>
          </div>
          <div className="grid w-60">
            <BaseButton size="xs" className={buttonStyles}>
              <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              Wide with an Icon
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
