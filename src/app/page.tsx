"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col text-center">
        <h1>Mantene tus gastos ordenados</h1>
        <h3>
          La manera más fácil de realizar un seguimiento, administrar y
          registrar sus finanzas personales.
        </h3>
        <p>registre sus transacciones financieras personales.</p>
        <p>Realice un seguimiento de sus gastos</p>
      </div>
      <Link href="/main">Entrar</Link>
    </main>
  );
}
