import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = ({ to }: { to: string }) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [to, router]);

  return null;
};

export default Redirect;
