import client from './client';

const PER_PAGE: number = 50;
export const getFollower = async (pat: string, username: string) => {
  const { data } = await client.get(`/users/${username}/followers?per_page=${PER_PAGE}`, {
    headers: {
      Authorization: `Bearer ${pat}`,
    },
  });
  return data;
};
