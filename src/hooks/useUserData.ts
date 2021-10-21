import User from '@/entities/User';

const user = {
  email: 'lck@battleent.com',
  nickName: 'LCK',
  language: '한글',
  nation: '한국',
  klaytnAddress: '0xe3d92072d8b9a59a0427485a1b5f459271df',
};

function useUserData(): User {
  return user;
}

export default useUserData;
