/** @jsxImportSource @emotion/react */

import * as S from './style';

import { FormEvent, useState } from 'react';
import { flexColumn, flexStart } from '@/_styles/reusableStyle';

import Image from 'next/image';
import { css } from '@emotion/react';
import { getFollower } from 'apis/getFollower';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

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

interface UserInfo {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
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
  selectUsersHandler: (_isAdded: boolean, _userId: number) => void;
}

/** follower 목록 보여주는 부분 */
const FollowerData = ({ selectedUser, selectUsersHandler }: IFollowerDataTypesProps) => {
  // const key: string = sessionStorage.getItem('token') ?? '';
  // const username: string = sessionStorage.getItem('username') ?? '';
  const searchParams = useSearchParams();

  const key = searchParams.get('token') ?? '';
  const username = searchParams.get('username') ?? '';

  const query = useQuery({
    queryKey: ['followList'],
    queryFn: () => getFollower(key, username),
  });

  const selectUserHandler = (e: FormEvent<HTMLInputElement>) => {
    const userId = Number((e.target as HTMLInputElement).value);

    return selectUsersHandler(selectedUser.includes(userId), userId);
  };

  return (
    <ul css={followerList}>
      {query?.data?.map((user: UserInfo, index: number) => (
        <S.FollowerItem key={index}>
          <label css={followerInfo} htmlFor={`${user.id}`}>
            <Image css={userImage} src={user.avatar_url} alt="user-profile-img" width={50} height={50} priority />
            <span>{user.login}</span>
            <S.InputCheckBox
              id={`${user.id}`}
              type="checkbox"
              value={`${user.id}`}
              checked={selectedUser.includes(user.id)}
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

  const selectUserHandler = (isAdded: boolean, userId: number) => {
    isAdded
      ? setSelectedUsers(selectedUser.filter((selectedUserId) => selectedUserId !== userId))
      : setSelectedUsers((prev) => [...prev, userId]);
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
