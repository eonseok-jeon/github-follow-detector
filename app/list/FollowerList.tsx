/** @jsxImportSource @emotion/react */

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { flexColumn, flexStart } from '@/_styles/reusableStyle';
import * as S from './style';

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

interface ISelectedRadioTypesProps {
  selectedUser: number[];
  /**
   * _allSelected 앞에 __를 붙인 이유:
   * allSelected 라고 했더니
   * allSelected is defined but never used
   * 라는 에러가 떠서
   * eslint.json에
   * "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }] 추가한 뒤
   * _allSelected로 변경함
   */
  selectAllUsersHandler: (_allSelected: boolean) => void;
}

/** 모두 선택 / 모두 해지 선택하는 radio 부분 */
const SelectRadio = ({ selectedUser, selectAllUsersHandler }: ISelectedRadioTypesProps) => {
  const allSelected = selectedUser.length === DUMMY_DATA.length;

  return (
    <S.SelectAllButton
      type="button"
      onClick={() => {
        selectAllUsersHandler(allSelected);
      }}
    >
      {allSelected ? '모두 해제' : '모두 선택'}
    </S.SelectAllButton>
  );
};

interface IFollowerDataTypesProps {
  selectedUser: number[];
  selectUsersHandler: (_userId: number, _action: string) => void;
}

/** follower 목록 보여주는 부분 */
const FollowerData = ({ selectedUser, selectUsersHandler }: IFollowerDataTypesProps) => {
  const selectUserHandler = (e: FormEvent<HTMLInputElement>) => {
    const userId = Number((e.target as HTMLInputElement).value);

    // 개별 follower checkbox 선택
    if (!selectedUser.includes(userId)) {
      return selectUsersHandler(userId, 'ADD');
    }
    if (selectedUser.includes(userId)) {
      return selectUsersHandler(userId, 'DELETE');
    }
  };

  return (
    <ul css={followerList}>
      {DUMMY_DATA.map(({ id, imgSrc, userName }) => (
        <S.FollowerItem key={`${id}-${imgSrc}-${userName}`}>
          <label css={followerInfo} htmlFor={`${id}-${userName}`}>
            <Image css={userImage} src={imgSrc} alt="user-profile-img" width={50} height={50} />
            <span>{userName}</span>
            <S.InputCheckBox
              id={`${id}-${userName}`}
              type="checkbox"
              value={id}
              checked={selectedUser.includes(id)}
              onChange={selectUserHandler}
            />
          </label>
        </S.FollowerItem>
      ))}
    </ul>
  );
};

const FollowerList = () => {
  const [selectedUser, setSelectedUsers] = useState<number[]>([]);

  /** 전체 선택 / 전체 해제 */
  const selectAllUsersHandler = (allSelected: boolean) => {
    allSelected ? setSelectedUsers([]) : setSelectedUsers(DUMMY_DATA.map(({ id }) => id));
  };

  const selectUserHandler = (userId: number, action: string) => {
    action === 'ADD'
      ? setSelectedUsers((prev) => [...prev, userId])
      : setSelectedUsers(selectedUser.filter((selectedUserId) => selectedUserId !== userId));
  };

  return (
    <S.ListContainer>
      <SelectRadio selectedUser={selectedUser} selectAllUsersHandler={selectAllUsersHandler} />
      <FollowerData selectedUser={selectedUser} selectUsersHandler={selectUserHandler} />
    </S.ListContainer>
  );
};

export default FollowerList;

const followerList = css`
  ${flexColumn}

  gap: 3rem;
`;

const followerInfo = css`
  ${flexStart}

  gap: 2rem;
  padding: 2rem;
`;

const userImage = css`
  border-radius: 50%;
`;
