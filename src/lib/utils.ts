import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitFullName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const nameParts = fullName.trim().split(" ");

  if (nameParts.length === 1) {
    return { firstName: nameParts[0], lastName: "" };
  }

  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return { firstName, lastName };
}

export function combineNames(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}
