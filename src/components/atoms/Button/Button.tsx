import { ComponentProps, forwardRef } from "react";
import {cva, VariantProps} from "class-variance-authority";
import { cn } from "@/utils";


const buttonStyles = cva([
  "w-full", "rounded-md", "font-semibold", "focus:outline-none", "disabled:cursor-not-allowed"
],{
  variants: {
    variant: {
      solid: "",
      outline: "border-2",
      ghost: "transition-colors duration-300"
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    },
    colorScheme: {
      primary: "text-white"
    }
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "primary",
      className: "bg-primary-500 hover:bg-primary-600",
    },
    {
      variant: "outline",
      colorScheme: "primary",
      className: "text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white",
    },
    {
      variant: "ghost",
      colorScheme: "primary",
      className: "text-primary-500 hover:bg-primary-100",
  }
],
defaultVariants: {
  variant: "solid",
  size: "md",
  colorScheme: "primary"
},
}
)

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, colorScheme, className, ...props }, ref)  => {
  return (
    <button 
    ref={ref} 
    className={cn(buttonStyles({variant, size, colorScheme, className}))} { ...props }>Click me</button>
  )
}
)

export default Button