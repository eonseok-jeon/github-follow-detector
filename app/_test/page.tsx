'use client';

import styled from '@emotion/styled';

const page = () => {
  return (
    <StyledDiv>
      <StyledHeading>Emotion Styled Component</StyledHeading>
      <p>This is a simple component styled with Emotion in a Next.js app.</p>
      <StyledButton onClick={() => alert('Button Clicked')}>Click me</StyledButton>
    </StyledDiv>
  );
};

export default page;
const StyledDiv = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledHeading = styled.h2`
  color: #333;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
