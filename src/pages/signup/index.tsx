import { useForm } from 'react-hook-form';

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: { id: string; password: string }) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>회원가입</div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginTop: '3px' }}>이름</div>
          <div style={{ marginTop: '3px' }}>생년월일</div>
          <div style={{ marginTop: '3px' }}>아아디</div>
          <div style={{ marginTop: '3px' }}>비밀번호</div>
          <div style={{ marginTop: '3px' }}>이메일</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="이름"
            style={{ width: '150px' }}
            {...register('name')}
          />
          <input
            type="date"
            placeholder="생년월일"
            style={{ width: '150px' }}
            {...register('date')}
          />
          <input
            placeholder="아이디"
            style={{ width: '150px' }}
            {...register('id')}
          />
          <input
            type="password"
            placeholder="비밀번호"
            style={{ width: '150px' }}
            {...register('password')}
          />
          <input
            type="email"
            placeholder="이메일"
            style={{ width: '150px' }}
            {...register('email')}
          />
        </div>
      </div>

      <button type="submit">가입하기</button>
    </form>
  );
};

export default Signup;
