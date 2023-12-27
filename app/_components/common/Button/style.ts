import styled from '@emotion/styled';

const CommonButton = styled.button`
  display: inline-block;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: all 0.3s ease;
  font-size: 1.4rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export { CommonButton };
