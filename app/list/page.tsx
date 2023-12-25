/** @jsxImportSource @emotion/react */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@/_components/common/Button';
import { CommonContainer } from '@/_components/common/Container/style';
import { flexCenter, flexColumn, flexEnd, flexStart } from '@/_styles/reusableStyle';

const DUMMY_DATA = [
  {
    id: 1,
    imgSrc: '/egg_princess.png',
    userName: 'easlaw80',
  },
  {
    id: 2,
    imgSrc: '/egg_princess.png',
    userName: 'easlaw80',
  },
  {
    id: 3,
    imgSrc: '/egg_princess.png',
    userName: 'easlaw80',
  },
  {
    id: 4,
    imgSrc: '/egg_princess.png',
    userName: 'easlaw80',
  },
  {
    id: 5,
    imgSrc: '/egg_princess.png',
    userName: 'easlaw80',
  },
  {
    id: 6,
    imgSrc: '/egg_princess.png',
    userName: 'easlaw80',
  },
  {
    id: 7,
    imgSrc: '/egg_princess.png',
    userName: 'easlaw80',
  },
];

const ListPage = () => {
  return (
    <>
      <MyInfoContainer>
        <Image css={userImage} src="/egg_princess.png" alt="user-profile-img" width={100} height={100} />
        <div css={userInfo}>
          <p>simeunseo</p>
          <p>what rly matters</p>
          <div css={followerCounts}>
            <span>팔로워: 51</span>
            <span>팔로잉: 60</span>
          </div>
        </div>
      </MyInfoContainer>
      <div css={followerButton}>
        <Button>맞팔 아닌 사람</Button>
        <Button>맞팔 확인하기</Button>
        <Button>
          <Link href="/">뒤로 가기</Link>
        </Button>
      </div>
      <ListContainer>
        <div css={selectRadio}>
          <InputRadio data-after="모두 선택" id="check-all" type="radio" defaultChecked name="select-check-option" />
          <InputRadio data-after="모두 해지" id="uncheck-all" type="radio" name="select-check-option" />
        </div>
        <ul css={followerList}>
          {DUMMY_DATA.map(({ id, imgSrc, userName }) => (
            <FollowerItem key={`${id}-${imgSrc}-${userName}`}>
              <label css={followerInfo} htmlFor={`${id}-${userName}`}>
                <Image css={userImage} src={imgSrc} alt="user-profile-img" width={50} height={50} />
                <span>{userName}</span>
                <InputCheckBox id={`${id}-${userName}`} type="checkbox" />
              </label>
            </FollowerItem>
          ))}
        </ul>
      </ListContainer>
    </>
  );
};

export default ListPage;

const followerList = css`
  ${flexColumn}

  gap: 3rem;
`;

const FollowerItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

const followerInfo = css`
  ${flexStart}

  gap: 2rem;
  padding: 2rem;
`;

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

const selectRadio = css`
  ${flexEnd}

  gap: 1rem;
  margin-bottom: 2rem;
`;

const MyInfoContainer = styled(CommonContainer)`
  ${flexStart}

  gap: 3rem;
  margin-top: 3rem;
`;

const InputRadio = styled.input`
  position: relative;
  width: 7.5rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    content: attr(data-after);
    font-size: 1.5rem;
  }
`;

const InputCheckBox = styled.input`
  position: relative;
  width: 2rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    content: attr(data-after);
    font-size: 1.5rem;
  }
`;

const ListContainer = styled(CommonContainer)`
  max-height: calc(100vh - 17.6rem - 7.7rem - 3rem); // 전체 높이 - my-info - 3개 버튼 높이 - margin-bottom
  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
