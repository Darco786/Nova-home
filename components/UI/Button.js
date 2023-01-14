import React from "react";

const variants = {
  normal: {
    className: "text-white bg-blue-3 hover:bg-dark-cornflower-blue",
  },
  outline: {
    className:
      "text-blue-3 border-2 border-blue-3 bg-transparent hover:bg-blue-3 hover:text-white",
  },
};

function Button({ children, className, variant = "normal" }) {
  return (
    <button
      className={`${className} ${variants[variant].className} py-1 px-4 rounded-full transition-all duration-200 text-xs sm:text-sm lg:text-base`}
    >
      {children}
    </button>
  );
}

export default Button;
