import Image from "next/image";
import React from "react";
import logo from "@/app/favicon.ico";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="border-b-2 borber-b-black dark:border-b-white w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
        <nav className="flex flex-col items-center gap-3 max-w-screen-lg m-auto p-2 md:flex-row md:justify-between">
          <Link className="flex items-center justify-center gap-4" href="./">
            <Image src={logo} alt="Vortex" width={50} height={50} />
            <h1 className="italic font-extrabold text-xl">Vortex</h1>
          </Link>
          <ul className="flex flex-col items-center gap-12 font-bold sm:flex-row sm:justify-between">
            <Link
              className="transition ease-in-out hover:scale-x-105 hover:text-gray-700"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition ease-in-out hover:scale-x-105 hover:text-gray-700"
              href="/bateponto"
            >
              Bate-Ponto
            </Link>
            <Link
              className="transition ease-in-out hover:scale-x-105 hover:text-gray-700"
              href="/administrativo"
            >
              Administrativo
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
