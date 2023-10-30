import { ArrowIcon } from "@/assets/Icons";
import Link from "next/link";
import React, { CSSProperties, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  variant: "colored" | "outline";
  type?: "button" | "submit" | "reset";
  href?: string;
  externalLink?: boolean;
  className?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => void;
  style?: CSSProperties;
  borderSize?: number;
  blank?: boolean;
};

export const Button = ({
  children,
  href,
  style,
  onClick,
  variant = "colored",
  type = "button",
  externalLink = false,
  className = "",
  borderSize,
  blank = false,
}: Props) => {
  const classNames = {
    default: "px-4 py-2 inline-block rounded-xl",
    colored: "",
    outline: "",
  };
  const props = {
    type,
    href: href || "",
    className: `${
      variant !== "outline"
        ? classNames.default + " " + classNames[variant]
        : ""
    } ${className}`,
    onClick,
    style,
    target: blank ? "_blank" : undefined,
  };

  switch (variant) {
    case "colored":
      const colored = (component: React.ReactNode) => (
        <div
          className="inline-flex gap-2 justify-center items-center text-sm font-normal rounded-md"
          style={{
            background: "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
            padding: `${borderSize ? borderSize : 2}px`,
          }}
        >
          {component}
          <ArrowIcon className="w-4" />
        </div>
      );

      if (href) {
        if (externalLink) return colored(<a {...props}>{children}</a>);
        else return colored(<Link {...props}>{children}</Link>);
      }

      return colored(<button {...props}>{children}</button>);
      break;
    case "colored":
    case "outline":
      if (href) {
        if (externalLink) return <a {...props}>{children}</a>;
        else return <Link {...props}>{children}</Link>;
      }

      return <button {...props}>{children}</button>;
      break;
    default:
      break;
  }

  return <button {...props}>{children}</button>;
};

export default Button;
