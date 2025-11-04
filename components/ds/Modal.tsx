"use client";
import { ReactNode, useEffect } from "react";
import { clsx } from "clsx";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className={clsx(
          "w-full max-w-lg rounded-2xl border shadow-lg transition-colors",
          // ☀️ Light
          "bg-white border-gray-200 text-gray-900",
          // 🌙 Dark
          "dark:bg-surface-100/80 dark:border-white/10 dark:text-white",
          "p-4"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
