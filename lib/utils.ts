import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// for spotlines ui
// for dot background
// for text generate effect 
// for floating Navbar
// for Background Gradient Animation
// for Globe 
// for 3D pin
// for Infinite Moving Cards
// MovingBorders 