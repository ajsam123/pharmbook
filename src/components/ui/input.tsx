import * as React from "react";

import { cn } from "#lib/utils";
import { AlertCircleIcon } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

function Input({
  className,
  type,
  leftIcon,
  rightIcon,
  label,
  error,
  ...props
}: InputProps) {
  return (
    <section className="flex flex-col gap-2">
      <span className="font-semibold">{label}</span>
      <div className="flex gap-2 w-full border rounded-sm px-2 items-center">
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
      </div>
      {error && (
        <div className="flex items-center gap-1">
          <figure>
            <AlertCircleIcon className="text-destructive" />
          </figure>
          <span className="text-destructive">{error}</span>
        </div>
      )}
    </section>
  );
}

// focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50

export { Input };
