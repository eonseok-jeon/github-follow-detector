import React, { PropsWithChildren } from 'react';
import * as S from './style';

interface ButtonPropsTypes {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

const Button = ({ children, onClick, type = 'button' }: PropsWithChildren<ButtonPropsTypes>) => {
  return (
    <S.CommonButton type={type} onClick={onClick}>
      {children}
    </S.CommonButton>
  );
};

export default Button;
