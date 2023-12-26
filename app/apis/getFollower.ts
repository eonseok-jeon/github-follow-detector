import client from './client';

export const getFollower = async (pat: string, username: string) => {
  const { data } = await client.get(`/users/${username}/followers`, {
    headers: {
      Authorization: `Bearer ${pat}`,
    },
  });
  return data;
};
