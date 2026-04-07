import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  icon,
  className,
  ...props
}) {
  const baseStyle = `
    inline-flex items-center gap-2
    px-6 py-3 rounded-full
    font-semibold text-sm tracking-wide
    transition-all duration-200
    focus:outline-none focus:ring-2 cursor-pointer focus:ring-green-400 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-green-700 text-white
      hover:bg-green-800 active:bg-green-900
      shadow-sm hover:shadow-md
    `,
    outline: `
      border-2 border-green-700 text-green-700
      hover:bg-green-50 active:bg-green-100
    `,
  };

  const Comp = as === "a" ? "a" : "button";

  return (
    <Comp
      href={as === "a" ? href : undefined}
      className={clsx(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
      {icon && icon}
    </Comp>
  );
}
