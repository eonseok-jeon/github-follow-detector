import * as S from './style';

import React, { PropsWithChildren } from 'react';

interface ButtonPropsTypes {
  isActive?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

const Button = ({ children, isActive, onClick, type = 'button' }: PropsWithChildren<ButtonPropsTypes>) => {
  return (
    <S.CommonButton $isActive={isActive} type={type} onClick={onClick}>
      {children}
    </S.CommonButton>
  );
};

export default Button;
