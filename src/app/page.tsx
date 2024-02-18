"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>App Gastos usuario Logueado</h1>
    </main>
  );
}
