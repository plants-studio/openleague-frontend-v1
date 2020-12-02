import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <div>존재하지 않는 페이지입니다!</div>
      <button
        onClick={() => {
          router.back();
        }}
      >
        뒤로가기
      </button>
    </>
  );
}
