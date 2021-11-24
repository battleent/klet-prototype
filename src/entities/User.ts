import Timestamp from '@/entities/Timestamp';

export default interface User {
  userNumber?: number;
  userType?: 'USER' | 'STAFF' | 'ADMIN';
  userStatus?: 'ACTIVE' | 'WARNING' | 'STOP' | 'WITHDRAWAL';
  nickName?: string;
  email: string;
  emailVerified?: boolean;
  emailVerifiedTime?: Timestamp;
  password?: string;
  profile?: string;
  nation?: string;
  phoneNumber?: number;
  isVerifiedSMS?: boolean;
  timeVerifiedSMS?: Timestamp;
  language: string;
  klaytnAddress: string;
  klaytnPrivateKey?: string;
  createdAt?: number;
  withdrewAt?: number;
  signUpServiceId?: string;
}
