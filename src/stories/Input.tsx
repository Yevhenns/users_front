import { FC, forwardRef, PropsWithRef } from 'react';
import css from './Input.module.scss';

interface Props extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
  value?: string;
}

const Input: FC<PropsWithRef<Props>> = forwardRef(({ placeholder, value, ...props }, ref) => {
  return <input className={css.input} placeholder={placeholder} value={value} type='text' {...props} ref={ref} />;
});

export default Input;
