import { ComponentProps } from "react";


type ButtonProps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button className="text-blue-500" { ...props }>Click me</button>
  )
}

export default Button