import Image from "next/image";
import SignInButton from "@/components/signin-button";
import { SignOutButton } from "@/components/signout-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user) return redirect("/login");

  return (
    <>
      <div>
        <Image
          src={session.user.image || "/default-avatar.png"}
          alt="User Avatar"
          width={100}
          height={100}
        />
      </div>
      <SignOutButton />
    </>
  );
}
