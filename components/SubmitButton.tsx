import Image from "next/image";

import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

/*
  The `SubmitButton` component is a customizable button designed for form submissions.
  It displays a loading spinner when the `isLoading` prop is true, indicating that
  a process is ongoing. Otherwise, it shows the button's child elements, such as text or icons.
*/
const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading} // A boolean flag that determines if the button should display a loading spinner
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children // The content to display inside the button when it's not loading
      )}
    </Button>
  );
};

export default SubmitButton;
