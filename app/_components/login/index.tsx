'use client';

import Container from '../common/Container';
import styled from '@emotion/styled';

const GitHubLink = styled.a`
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: black;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

const Login = () => {
  return (
    <Container>
      <GitHubLink href="https://github.com/settings/tokens" target="_blank">
        GitHub Token 만들러 가기
      </GitHubLink>
    </Container>
  );
};

export default Login;
