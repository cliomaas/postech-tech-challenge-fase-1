import { ComponentProps } from "react";
import { clsx } from "clsx";

type Props = ComponentProps<"select"> & { label?: string };

export default function Select({ label, id, children, className, ...props }: Props) {
  const select = (
    <select
      id={id}
      className={clsx(
        "w-full rounded-xl2 border px-3 py-2 text-sm transition-colors appearance-none",
        // ☀️ Light
        "bg-white border-gray-300 text-gray-900 focus:ring-brand-500 focus:border-brand-500",
        // 🌙 Dark
        "dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );

  if (!label) return select;

  return (
    <label htmlFor={id} className="block text-sm space-y-1">
      <span className="text-gray-700 dark:text-white/80">{label}</span>
      {select}
    </label>
  );
}
