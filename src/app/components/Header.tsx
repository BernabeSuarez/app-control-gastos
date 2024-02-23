import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const fecha = new Date();
const Header = ({ img }: { img: string }) => {
  return (
    <section>
      <div className="flex justify-between mb-4 items-center">
        <h2>{fecha.toLocaleDateString()}</h2>
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={img}
            alt="profile pic"
            width={30}
            height={30}
            className="rounded-full"
          />
          <h3>Debora</h3>
          <Button className="text-white bg-red-600 hover:bg-red-400">
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
