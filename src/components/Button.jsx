import React from "react";

function Button({
  children,
  className = "",
  bgColor = "bg-gray-300",
  textColor = "text-black",
  type = "button",
  ...props
}) {
  return (
    <button
      className={`${className} ${bgColor} ${textColor} py-2 px-4 rounded-lg`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
