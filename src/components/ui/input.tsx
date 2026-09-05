import * as React from "react";

import { cn } from "#lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function Input({ className, type, leftIcon, rightIcon, ...props }: InputProps) {
  return (
    <section className="flex gap-2 w-full border rounded-xl px-2 items-center">
      {/* Left Icon */}
      {leftIcon}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-8 w-full min-w-0 rounded-lg bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className,
        )}
        {...props}
      />
      {rightIcon}
    </section>
  );
}

// focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50

export { Input };
