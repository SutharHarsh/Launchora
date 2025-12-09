import React from "react";
import clsx from "clsx";

/*
Variants:
- default
- outline
- icon  (OAuth)
- img   (OAuth with image)
- quiet (link)
*/

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "icon" | "img" | "quiet" | "submit";
  icon?: React.ReactNode;
  imgSrc?: string;
  square?: boolean;
}

export default function Button({
  variant = "default",
  icon,
  imgSrc,
  children,
  square = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    default:
      "bg-primary text-primary-foreground rounded-lg px-6 py-2 text-sm border border-transparent hover:bg-primary/90 active:bg-primary/80",

    outline:
      "bg-card text-card-foreground border border-border rounded-lg px-4 py-2 hover:bg-muted hover:text-foreground",

    icon:
      "bg-card text-card-foreground border border-border rounded-none hover:bg-primary hover:text-primary-foreground active:bg-primary/90",

    img:
      "bg-card text-card-foreground border border-border rounded-none hover:bg-primary hover:text-primary-foreground active:bg-primary/90",

    quiet:
      "bg-transparent text-primary-accent hover:underline px-2 py-1",

    submit:
      "bg-white text-black border border-transparent rounded-none px-6 py-2.5 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors",
  };

  const size = square ? "h-10 sm:h-11 w-full" : "h-10 sm:h-11";

  return (
    <button className={clsx(base, variants[variant], size, className)} {...props}>
      {variant === "img" && imgSrc && (
        <img src={imgSrc} alt="" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
      )}

      {icon && (
        <span className={clsx("inline-flex items-center", children ? "mr-2" : "")}>
          {icon}
        </span>
      )}

      {children && <span className="text-xs sm:text-sm">{children}</span>}
    </button>
  );
}
