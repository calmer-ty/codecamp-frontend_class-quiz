import { useEffect } from "react";
import { useRouter } from "next/router";

export const withAuth = (WithAuth: any) => (props: any) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다. 다시 로그인을 해주세요.");
      void router.push("/section26/02-quiz/withAuth/login");
    }
  });

  return <WithAuth {...props} />;
};
