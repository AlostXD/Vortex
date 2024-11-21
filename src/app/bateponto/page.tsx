import ClockButton from "@/components/clock-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import UserAvatar from "@/components/userProfile";
import React from "react";
import { SessionProvider } from "next-auth/react";
import DisplayPontos from "@/components/display-pontos";

export default function Bateponto() {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-neutral-800 flex flex-col md:flex-row md:h-screen items-center justify-center gap-4">
        <div className="max-w-fit p-4 flex flex-col gap-12 items-center justify-center">
          <UserAvatar />
          <SessionProvider>
            <ClockButton />
          </SessionProvider>
        </div>
        <div className="w-full h-1 md:h-full md:w-1 bg-black dark:bg-white"></div>
        <div className="flex items-center justify-center max-w-full w-full">
          <DisplayPontos />
        </div>
      </div>
      <Footer />
    </>
  );
}
