import { FC } from 'react';
import css from './Input.module.scss';

interface Props {
  placeholder: string;
  value?: string;
  onChange: (e) => void;
}

const Input: FC<Props> = ({ placeholder, value, onChange }) => {
  return <input className={css.input} placeholder={placeholder} value={value} onChange={onChange} type='text' />;
};

export default Input;
