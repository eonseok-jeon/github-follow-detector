import styled from '@emotion/styled';

interface ICommonButtonTypesProps {
  $isActive?: boolean;
}

const CommonButton = styled.button<ICommonButtonTypesProps>`
  display: inline-block;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.darkGrey : theme.colors.lightGrey)};
  transition: all 0.3s ease;
  font-size: 1.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export { CommonButton };
