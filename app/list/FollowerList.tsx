/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import { css } from '@emotion/react';
import { flexColumn, flexEnd, flexStart } from '@/_styles/reusableStyle';
import * as S from './style';
import { FormEvent, useState } from 'react';

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

/** 모두 선택 / 모두 해지 선택하는 radio 부분 */
const SelectRadio = () => {
  return (
    <div css={selectRadio}>
      <S.InputRadio data-after="모두 선택" id="check-all" type="radio" defaultChecked name="select-check-option" />
      <S.InputRadio data-after="모두 해지" id="uncheck-all" type="radio" name="select-check-option" />
    </div>
  );
};

interface IFollowerDataTypesProps {
  selectedUser: number[];
  selectUsersHandler: (userId: number, action: string) => void;
}

/** follower 목록 보여주는 부분 */
const FollowerData = ({ selectedUser, selectUsersHandler }: IFollowerDataTypesProps) => {
  const selectUserHandler = (e: FormEvent<HTMLInputElement>) => {
    const userId = Number(e.target.value);

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

  const selectUserHandler = (userId: number, action: string) => {
    if (action === 'ADD') {
      return setSelectedUsers((prev) => [...prev, userId]);
    }
    if (action === 'DELETE') {
      return setSelectedUsers(selectedUser.filter((selectedUserId) => selectedUserId !== userId));
    }
  };

  return (
    <S.ListContainer>
      <SelectRadio />
      <FollowerData selectedUser={selectedUser} selectUsersHandler={selectUserHandler} />
    </S.ListContainer>
  );
};

export default FollowerList;

const selectRadio = css`
  ${flexEnd}

  gap: 1rem;
  margin-bottom: 2rem;
`;

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
