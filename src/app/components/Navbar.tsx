"use client";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

const logout = () => {
  signOut(auth);
};

const Navbar = () => {
  return (
    <section
      id="bottom-navigation"
      className="flex fixed inset-x-0 bottom-0 z-10 h-16 items-center bg-slate-800 shadow"
    >
      <div id="tabs" className="flex justify-between w-full">
        <Link
          href="/main"
          className="w-full flex justify-center text-center pt-2 pb-1"
        >
          <Image
            src="/images/home.png"
            width={35}
            height={35}
            alt="home"
            className="tab tab-home block text-xs"
          />
        </Link>
        <Link
          href="entradas"
          className="w-full flex justify-center text-center pt-2 pb-1"
        >
          <Image
            src="/images/import.png"
            width={35}
            height={35}
            alt="entradas"
            className="tab tab-home block text-xs"
          />
        </Link>
        <Link
          href="add"
          className="w-full flex justify-center text-center pt-2 pb-1"
        >
          <Image
            src="/images/add.png"
            width={35}
            height={35}
            alt="add transaction"
            className="tab tab-home block text-xs"
          />
        </Link>
        <Link
          href="salidas"
          className="w-full flex justify-center text-center pt-2 pb-1"
        >
          <Image
            src="/images/export.png"
            width={35}
            height={35}
            alt="Salidas"
            className="tab tab-home block text-xs"
          />
        </Link>
        <div className="w-full flex justify-center text-center pt-2 pb-1">
          <Image
            onClick={logout}
            src="/images/logout.png"
            width={35}
            height={35}
            alt="logout button"
            className="tab tab-home block text-xs hover:cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
