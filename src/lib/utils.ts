import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"



//cn is a utility function short name like class and names for tailwind 
//it is use to combine tailwind classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
