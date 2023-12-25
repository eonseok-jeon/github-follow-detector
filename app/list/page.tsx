/** @jsxImportSource @emotion/react */

'use client';

import Image from 'next/image';
import Button from '@/_components/common/Button';
import Container from '@/_components/common/Container';

const ListPage = () => {
  return (
    <>
      <Container>
        <Image src="/egg_princess.png" alt="user-profile-img" width={100} height={100} />
        <div>
          <p>simeunseo</p>
          <p>what rly matters</p>
          <div>
            <span>팔로워: 51</span>
            <span>팔로잉: 60</span>
          </div>
        </div>
      </Container>
      <Button>맞팔 아닌 사람</Button>
      <Button>맞팔 확인하기</Button>
      <Container>
        <div>
          <input id="check-all" type="radio" name="select-check-option" />
          <label htmlFor="check-all">모두 선택</label>
          <input id="uncheck-all" type="radio" name="select-check-option" />
          <label htmlFor="uncheck-all">모두 해지</label>
        </div>
        <ul>
          <li>
            <Image src="/egg_princess.png" alt="user-profile-img" width={50} height={50} />
            <label htmlFor="github-id">easlaw80</label>
            <input id="github-id" type="checkbox" />
          </li>
        </ul>
      </Container>
    </>
  );
};

export default ListPage;
