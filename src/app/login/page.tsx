import SignInButton from "@/components/signin-button";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('./img/background-login.png')] bg-cover bg-center filter blur-sm -z-10"></div>
      <div className="flex items-center justify-center h-screen">
        <SignInButton />
      </div>
    </>
  );
}
