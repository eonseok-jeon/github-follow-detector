/** @jsxImportSource @emotion/react */

'use client';

import Container from '../common/Container';
import { css } from '@emotion/react';
import Button from '../common/Button';
import * as S from './style';

const Login = () => {
  return (
    <Container>
      <Button>
        <a href="https://github.com/settings/tokens" target="_blank">
          GitHub Token 만들러 가기
        </a>
      </Button>
      <p css={textStyle}>!토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!</p>
      <S.LoginForm>
        <S.FormInput type="text" placeholder="GitHub Token을 입력해주세요" />
        <Button type="submit">나의 맞팔 확인하기</Button>
      </S.LoginForm>
      <S.CheckWithLoginWrapper>
        <span css={textStyle}>깃허브 로그인으로 간단하게 확인하기 &rarr;</span>
        <Button>깃허브 로그인</Button>
      </S.CheckWithLoginWrapper>
    </Container>
  );
};

export default Login;

const textStyle = css`
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;
