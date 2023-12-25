/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';
import Button from '../common/Button';
import * as S from './style';

/** 시작 화면 - Token 입력창 */
const Login = () => {
  return (
    <S.LoginContainer>
      <MakeGitHubToken />
      <p css={textStyle}>!토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!</p>
      <LoginForm />
      <CheckWithLogin />
    </S.LoginContainer>
  );
};

export default Login;

const textStyle = css`
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;

/** GitHub Token 만들러 가기 버튼 */
const MakeGitHubToken = () => {
  return (
    <Button>
      <a href="https://github.com/settings/tokens" target="_blank">
        GitHub Token 만들러 가기
      </a>
    </Button>
  );
};

/** 나의 맞팔 확인하기 Form */
const LoginForm = () => {
  return (
    <S.LoginFormWrapper>
      <S.FormInput type="text" placeholder="GitHub Token을 입력해주세요" />
      <Button type="submit">나의 맞팔 확인하기</Button>
    </S.LoginFormWrapper>
  );
};

/** GitHub Login 버튼 */
const CheckWithLogin = () => {
  return (
    <S.CheckWithLoginWrapper>
      <span css={textStyle}>GitHub 로그인으로 간단하게 확인하기 &rarr;</span>
      <Button>GitHub 로그인</Button>
    </S.CheckWithLoginWrapper>
  );
};
