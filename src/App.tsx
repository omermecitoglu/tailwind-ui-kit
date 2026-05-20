import { faAmazon } from "@fortawesome/free-brands-svg-icons/faAmazon";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faWindows } from "@fortawesome/free-brands-svg-icons/faWindows";
import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ComponentProps } from "react";
import BaseButton from "./components/button/BaseButton";
import Button from "./components/legacy/Button";
import LinkButton from "./components/legacy/LinkButton";
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
      <h1 className="text-4xl py-3 font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Buttons
      </h1>
      <div className="flex gap-3">
        <Button color="primary" text="Primary" onClick={handleClick} />
        <Button color="secondary" text="Secondary" onClick={handleClick} />
        <Button color="success" text="Success" onClick={handleClick} />
        <Button color="warning" text="Warning" onClick={handleClick} />
        <Button color="danger" text="Danger" onClick={handleClick} />
      </div>
      <h2 className="text-3xl py-2 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        With Icons
      </h2>
      <div className="flex gap-3 flex-col sm:flex-row">
        <Button color="primary" icon={faThumbsUp} text="Primary" onClick={handleClick} />
        <Button color="secondary" icon={faThumbsDown} text="Secondary" onClick={handleClick} />
        <Button color="success" icon={faBullseye} text="Success" onClick={handleClick} />
        <Button color="warning" icon={faCircleExclamation} text="Warning" onClick={handleClick} />
        <Button color="danger" icon={faTriangleExclamation} text="Danger" onClick={handleClick} />
      </div>
      <h2 className="text-3xl py-3 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        With Only Icons
      </h2>
      <div className="flex gap-3">
        <Button color="primary" icon={faThumbsUp} onClick={handleClick} />
        <Button color="secondary" icon={faThumbsDown} onClick={handleClick} />
        <Button color="success" icon={faBullseye} onClick={handleClick} />
        <Button color="warning" icon={faCircleExclamation} onClick={handleClick} />
        <Button color="danger" icon={faTriangleExclamation} onClick={handleClick} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl py-3 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Wide Buttons
          </h2>
          <div className="grid gap-3">
            <Button color="primary" text="Primary" stretched onClick={handleClick} />
            <Button color="secondary" text="Secondary" stretched onClick={handleClick} />
            <Button color="success" text="Success" stretched onClick={handleClick} />
            <Button color="warning" text="Warning" stretched onClick={handleClick} />
            <Button color="danger" text="Danger" stretched onClick={handleClick} />
          </div>
        </div>
        <div>
          <h2 className="text-3xl py-3 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            With Icons
          </h2>
          <div className="grid gap-3">
            <Button color="primary" icon={faThumbsUp} text="Primary" stretched onClick={handleClick} />
            <Button color="secondary" icon={faThumbsDown} text="Secondary" stretched onClick={handleClick} />
            <Button color="success" icon={faBullseye} text="Success" stretched onClick={handleClick} />
            <Button color="warning" icon={faCircleExclamation} text="Warning" stretched onClick={handleClick} />
            <Button color="danger" icon={faTriangleExclamation} text="Danger" stretched onClick={handleClick} />
          </div>
        </div>
        <div>
          <h2 className="text-3xl py-3 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Link Buttons
          </h2>
          <div className="grid gap-3">
            <LinkButton
              as={Link}
              href="https://facebook.com"
              icon={faFacebook}
              text="Go to Facebook"
              className="text-white bg-[#1877F2] hover:bg-[#165EDC] focus-visible:outline-[#1877F2] dark:bg-[#4267B2] dark:hover:bg-[#385899]"
              stretched
            />
            <LinkButton
              as={Link}
              href="https://apple.com"
              icon={faApple}
              text="Go to Apple"
              className="text-white bg-black hover:bg-neutral-800 focus-visible:outline-black dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300"
              stretched
            />
            <LinkButton
              as={Link}
              href="https://amazon.com"
              icon={faAmazon}
              text="Go to Amazon"
              className="text-white bg-[#FF9900] hover:bg-[#E68A00] focus-visible:outline-[#FF9900] dark:bg-[#232F3E] dark:hover:bg-[#1E293B]"
              stretched
            />
            <LinkButton
              as={Link}
              href="https://microsoft.com"
              icon={faWindows}
              text="Go to Microsoft"
              className="text-white bg-[#00A4EF] hover:bg-[#008AD1] focus-visible:outline-[#00A4EF] dark:bg-[#7FBA00] dark:hover:bg-[#6AA100]"
              stretched
            />
            <LinkButton
              as={Link}
              href="https://google.com"
              icon={faGoogle}
              text="Go to Google"
              className="text-white bg-[#4285F4] hover:bg-[#357AE8] focus-visible:outline-[#4285F4] dark:bg-[#EA4335] dark:hover:bg-[#C53A2F]"
              stretched
            />
          </div>
        </div>
      </div>
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
