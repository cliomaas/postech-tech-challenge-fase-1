import { ComponentProps } from "react";
import { clsx } from "clsx";

type Props = ComponentProps<"input"> & { label?: string; hint?: string };

export default function Input({ label, hint, className, id, ...props }: Props) {
  const input = (
    <input
      id={id}
      className={clsx(
        "w-full rounded-xl2 border px-3 py-2 text-sm transition-colors",
        "bg-white/5 border-gray-300 text-gray-900 placeholder-gray-400",
        "dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-white/50",
        "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500",
        className
      )}
      {...props}
    />
  );

  if (!label)
    return input;

  return (
    <label htmlFor={id} className="block text-sm space-y-1">
      <span className="text-gray-700 dark:text-white/80">{label}</span>
      {input}
      {hint && <span className="text-xs text-gray-500 dark:text-gray-400">{hint}</span>}
    </label>
  );
}
