import { css } from '@emotion/react';

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const flexAround = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export { flexColumn, flexCenter, flexBetween, flexAround };
