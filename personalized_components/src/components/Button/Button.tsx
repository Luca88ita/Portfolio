import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import { ButtonStyles } from "../../utils/types";

interface Props extends ComponentPropsWithoutRef<"button"> {
  buttonStyle?: ButtonStyles;
  disabledStyle?: ButtonStyles;
}

const Button = ({
  buttonStyle = ButtonStyles.DEFAULT,
  disabledStyle = ButtonStyles.DISABLED,
  className,
  disabled = false,
  ...rest
}: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[buttonStyle]} ${
        className ? className : ""
      } ${disabled ? styles[disabledStyle] : ""}`}
      disabled={disabled}
      {...rest}
    >
      {rest.children}
    </button>
  );
};

export default Button;
