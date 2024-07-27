import React, {FC} from "react";

interface IButtonProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

const Button: FC<IButtonProps> = ({children, onClick, className, type = "button"}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;