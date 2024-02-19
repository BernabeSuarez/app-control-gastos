"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Main = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Main Section</h2>
    </main>
  );
};

export default Main;
