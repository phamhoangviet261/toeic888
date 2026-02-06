import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type AnchorButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = {
  href?: undefined;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default function Button({ className = "", children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2";

  if ("href" in props) {
    const { href, ...rest } = props;
    return (
      <a href={href} className={`${baseStyles} ${className}`} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
