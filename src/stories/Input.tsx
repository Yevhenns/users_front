import { FC } from "react";
import css from './Input.module.scss'

interface Props {
  placeholder: string;
  value?: string;
}

const Input: FC<Props> = ({ placeholder, value }) => {
  return <input className={css.input} placeholder={placeholder} value={value} />;
};

export default Input;
