/** @jsxImportSource @emotion/react */

'use client';

import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@/_components/common/Button';
import Container from '@/_components/common/Container';
import { CommonContainer } from '@/_components/common/Container/style';
import { flexCenter, flexColumn, flexStart } from '@/_styles/reusableStyle';
import Link from 'next/link';

const ListPage = () => {
  return (
    <>
      <ListContainer>
        <Image css={userImage} src="/egg_princess.png" alt="user-profile-img" width={100} height={100} />
        <div css={userInfo}>
          <p>simeunseo</p>
          <p>what rly matters</p>
          <div css={followerCounts}>
            <span>팔로워: 51</span>
            <span>팔로잉: 60</span>
          </div>
        </div>
      </ListContainer>
      <div css={followerButton}>
        <Button>맞팔 아닌 사람</Button>
        <Button>맞팔 확인하기</Button>
        <Button>
          <Link href="/">뒤로 가기</Link>
        </Button>
      </div>
      <Container>
        <div>
          <input id="check-all" type="radio" name="select-check-option" />
          <label htmlFor="check-all">모두 선택</label>
          <input id="uncheck-all" type="radio" name="select-check-option" />
          <label htmlFor="uncheck-all">모두 해지</label>
        </div>
        <ul>
          <li>
            <Image css={userImage} src="/egg_princess.png" alt="user-profile-img" width={50} height={50} />
            <label htmlFor="github-id">easlaw80</label>
            <input id="github-id" type="checkbox" />
          </li>
        </ul>
      </Container>
    </>
  );
};

export default ListPage;

const userImage = css`
  border-radius: 50%;
`;

const userInfo = css`
  ${flexColumn}

  gap: 0.5rem;
`;

const followerCounts = css`
  ${flexStart}

  gap: 3rem;
`;

const followerButton = css`
  ${flexCenter}

  gap: 3rem;
  margin: 2rem 0;
  font-size: 2rem;
`;

const ListContainer = styled(CommonContainer)`
  ${flexStart}

  gap: 3rem;
`;
