/** @jsxImportSource @emotion/react */

'use client';

import * as S from './style';

import { Dispatch, SetStateAction, useState } from 'react';
import { flexCenter, flexColumn, flexStart } from '@/_styles/reusableStyle';

import Button from '@/_components/common/Button';
import FollowerList from './FollowerList';
import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

/** 내 정보 부분 */
const UserInfo = () => {
  return (
    <S.MyInfoContainer>
      <Image css={userImage} src="/egg_princess.png" alt="user-profile-img" width={100} height={100} priority />
      <div css={userInfo}>
        <p>simeunseo</p>
        <p>what rly matters</p>
        <div css={followerCounts}>
          <span>팔로워: 51</span>
          <span>팔로잉: 60</span>
        </div>
      </div>
    </S.MyInfoContainer>
  );
};

type ListType = 'coFollowList' | 'nonFollowList';
interface ListTypeInterfaces {
  setListType: Dispatch<SetStateAction<ListType>>;
}
/** 맞팔 아닌 사람 / 맞팔 확인하기 / 뒤로 가기 버튼 부분 */
const ListButtons = ({ setListType }: ListTypeInterfaces) => {
  return (
    <div css={followerButton}>
      <Button onClick={() => setListType('nonFollowList')}>맞팔 아닌 사람</Button>
      <Button onClick={() => setListType('coFollowList')}>맞팔 확인하기</Button>
      <Button>
        <Link href="/">뒤로 가기</Link>
      </Button>
    </div>
  );
};

/** list page */
const ListPage = () => {
  const [listType, setListType] = useState<ListType>('coFollowList');
  return (
    <>
      <UserInfo />
      <ListButtons setListType={setListType}></ListButtons>
      <FollowerList listType={listType}></FollowerList>
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
