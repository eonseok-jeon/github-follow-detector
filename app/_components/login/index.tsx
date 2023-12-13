/** @jsxImportSource @emotion/react */

'use client';

import Container from '../common/Container';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Button from '../common/Button';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  font-size: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const warningStyle = css`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const Login = () => {
  return (
    <Container>
      <Button>
        <a href="https://github.com/settings/tokens" target="_blank">
          GitHub Token 만들러 가기
        </a>
      </Button>
      <p css={warningStyle}>!토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!</p>
      <LoginForm>
        <FormInput type="text" placeholder="GitHub Token을 입력해주세요" />
        <Button type="submit">나의 맞팔 확인하기</Button>
      </LoginForm>
    </Container>
  );
};

export default Login;
