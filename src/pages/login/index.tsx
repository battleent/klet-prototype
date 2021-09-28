import Link from "next/link";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: { id: string, password: string }) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>로그인 페이지</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input placeholder="아아디" style={{ width: '150px' }} {...register("id")} />
                <input type="password" placeholder="비밀번호" style={{ width: '150px' }} {...register("password")} />
            </div>
            <button type="submit">로그인</button>
            <Link href="/signup" passHref><button>회원가입</button></Link>
        </form>
    )
}

export default Login;