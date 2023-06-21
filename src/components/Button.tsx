import className from "classnames";
export function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,

  ...rest
}: Partial<IButtonInput>) {
  const classes = className(
    rest.className,
    "flex gap-2 items-center px-3 py-1.5 border",
    {
      "border-orange-700 bg-orange-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white text-black": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }: IButtonInput) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

interface IButtonInput {
  primary: boolean;
  secondary: boolean;
  success: boolean;
  warning: boolean;
  danger: boolean;
  outline: boolean;
  rounded: boolean;
  children: any;
  [key: string]: any;
}
