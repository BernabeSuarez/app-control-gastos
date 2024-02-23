"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DetailCard from "./components/DetailCard";
import { useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <main className="flex min-h-screen flex-col items-center justify-between px-2 sm:px-32 bg-[#121212]">
        <div
          className="flex flex-col text-center h-screen w-full p-8 text-white
      "
        >
          <div className="flex justify-center sm:justify-start mt-4 ">
            <h2 className="font-bold text-3xl">$ 100000</h2>
          </div>
          <div className="btn-container flex justify-center sm:justify-start gap-10 mt-5">
            <Button
              onClick={() => {
                setShowModal(true);
              }}
              className="text-white bg-green-600 hover:bg-green-400"
            >
              + Ingresos
            </Button>
            <Button className="text-white bg-red-600 hover:bg-red-400">
              + Gastos
            </Button>
          </div>
          <Separator className="mt-8  mb-8" />

          <div className="detalles">
            <DetailCard />
            <DetailCard />
            <DetailCard />
          </div>
        </div>
      </main>
    </>
  );
}
