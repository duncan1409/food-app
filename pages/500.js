import { useRouter } from "next/router";
export default function Custom500() {
    const router = useRouter();
    setTimeout(() => {
        // 500를 확인하면 5초 뒤 메인 화면으로 이동
        router.push("/");
    }, 5000);
    return (
        <>
            <h1>500: 서버 에러</h1>
            <h2>5초 후 메인 페이지로 돌아갑니다.</h2>
        </>
    );
}
