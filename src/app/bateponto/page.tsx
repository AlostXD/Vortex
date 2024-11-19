import ClockButton from "@/components/clock-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import UserAvatar from "@/components/userProfile";
import React from "react";
import { SessionProvider } from "next-auth/react";

export default function Bateponto() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="border-r-2 max-w-fit p-4 font-extrabold">
          <UserAvatar />
          <SessionProvider>
            <ClockButton />
          </SessionProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}
