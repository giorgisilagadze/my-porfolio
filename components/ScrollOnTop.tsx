import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ScrollOnTop() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [router.asPath]);

  return null;
}
