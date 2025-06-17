import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-custom-gray-700/50 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-[37px] w-full min-w-0 rounded border border-custom-gray-200 bg-custom-white px-5 py-1 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-custom-gray-700 font-medium font-rethink",
        "focus-visible:border-custom-gray-200 focus-visible:ring-ring/50 focus-visible:ring-0",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive py-0 text-base",
        className
      )}
      {...props}
    />
  );
}

export { Input };
