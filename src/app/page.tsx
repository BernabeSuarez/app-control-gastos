import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DetailCard from "./components/DetailCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 sm:px-32 bg-[#121212]">
      <div
        className="flex flex-col text-center h-screen w-full p-8 text-white
      "
      >
        <Header img="/images/home.png" />
        <div className="flex flex-row justify-between items-center">
          <h2>Control</h2>
        </div>

        <div className="flex justify-center sm:justify-start ">
          <h2 className="font-bold text-3xl">$ 100000</h2>
        </div>
        <div className="btn-container flex justify-center sm:justify-start gap-10 mt-5">
          <Button className="text-black bg-green-600 hover:bg-green-400">
            Ingresos
          </Button>
          <Button className="text-black bg-red-600 hover:bg-red-400">
            Gastos
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
  );
}
