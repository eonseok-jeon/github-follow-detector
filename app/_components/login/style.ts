import styled from '@emotion/styled';

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

export { LoginForm, FormInput, CheckWithLoginWrapper };
