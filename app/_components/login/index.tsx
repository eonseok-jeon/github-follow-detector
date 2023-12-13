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
  margin-bottom: 1rem;
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

const CheckWithLoginWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: end;
`;

const textStyle = css`
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;

const Login = () => {
  return (
    <Container>
      <Button>
        <a href="https://github.com/settings/tokens" target="_blank">
          GitHub Token 만들러 가기
        </a>
      </Button>
      <p css={textStyle}>!토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!</p>
      <LoginForm>
        <FormInput type="text" placeholder="GitHub Token을 입력해주세요" />
        <Button type="submit">나의 맞팔 확인하기</Button>
      </LoginForm>
      <CheckWithLoginWrapper>
        <span css={textStyle}>깃허브 로그인으로 간단하게 확인하기 &rarr;</span>
        <Button>깃허브 로그인</Button>
      </CheckWithLoginWrapper>
    </Container>
  );
};

export default Login;
