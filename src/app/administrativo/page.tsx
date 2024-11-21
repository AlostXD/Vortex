import Controle from "@/components/controle";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import UserAvatar from "@/components/userProfile";
import React from "react";

export default function Administrativo() {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-800 flex flex-col md:flex-row items-center justify-center gap-4">
        <UserAvatar />
        <div className="w-full h-1 md:h-screen md:w-1 bg-black dark:bg-white"></div>
        <div className="flex items-center justify-center max-w-full w-full">
          <Controle />
        </div>
      </div>
      <Footer />
    </>
  );
}
