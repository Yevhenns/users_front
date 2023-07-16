import { FC, PropsWithChildren } from "react";
import css from "./Button.module.scss";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  bg?: "add" | 'del';
}

const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button type="button" className={(css.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
