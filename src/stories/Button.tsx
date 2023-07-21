import { FC, PropsWithChildren } from 'react';
import css from './Button.module.scss';

interface Props extends PropsWithChildren {
  onClick?: () => void;
  bg?: 'add' | 'del';
  type?: 'button' | 'submit';
}

const Button: FC<Props> = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
