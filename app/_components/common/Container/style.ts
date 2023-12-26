import styled from '@emotion/styled';

const CommonContainer = styled.div`
  width: calc(100% - 4rem); /* 100% - 양 옆 margin */
  padding: 1rem;
  margin: 50vh 2rem 0;
  border: 3px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
  font-size: 2rem;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export { CommonContainer };
