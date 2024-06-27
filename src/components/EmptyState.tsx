// Assets
import { twMerge } from "tailwind-merge";
import { ReactComponent as EmptyStateIcon } from "../assets/icons/empty-state.svg";

const EmptyState = ({
  description,
  className,
}: {
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col h-full flex-1 items-center justify-center",
        className
      )}
    >
      <EmptyStateIcon />
      <p className="text-grey-200 mt-6">{description}</p>
    </div>
  );
};

export default EmptyState;
