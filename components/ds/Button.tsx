import { clsx } from "clsx";
import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "ghost" | "danger" | "disabled";
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-xl2 px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: clsx(
      // ☀️ light
      "bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-400",
      // 🌙 dark
      "dark:bg-brand-500 dark:hover:bg-brand-600 dark:text-white dark:focus:ring-brand-400"
    ),
    ghost: clsx(
      // ☀️ light → leve cinza
      "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300",
      // 🌙 dark → translúcido
      "dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:focus:ring-white/30"
    ),
    danger: clsx(
      "bg-danger text-white hover:bg-danger/90 focus:ring-danger/60"
    ),
  };

  const disabledVariant = clsx(
    variants.ghost,
    "opacity-50 cursor-not-allowed hover:bg-gray-100 dark:hover:bg-white/10 focus:ring-0"
  );

  return (
    <button
      className={clsx(
        base,
        variant === "disabled" ? disabledVariant : variants[variant],
        className
      )}
      disabled={variant === "disabled"}
      {...props}
    />
  );
}
