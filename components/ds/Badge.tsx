import { clsx } from "clsx";
import { ComponentProps } from "react";

type BadgeProps = ComponentProps<"span"> & {
  color?: "slate" | "green" | "red" | "yellow";
};

export default function Badge({
  children,
  color = "slate",
  className,
  ...rest
}: BadgeProps) {
  const map = {
    slate: "bg-gray-300/40 text-gray-800 dark:text-gray-100",
    green: "bg-green-500/20 text-green-700 dark:text-green-200",
    red: "bg-red-500/20 text-red-700 dark:text-red-200",
    yellow: "bg-yellow-500/20 text-yellow-800 dark:text-yellow-200",
  };

  return (
    <span
      {...rest}
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium transition-colors",
        map[color],
        className
      )}
    >
      {children}
    </span>
  );
}
