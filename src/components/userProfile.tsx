import { auth } from "../auth";
import Image from "next/image";
import { SignOutButton } from "./signout-button";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <>
      <div className="flex flex-col max-w-fit justify-center items-center gap-4">
        <Image
          src={session.user.image || "/default-avatar.png"}
          alt="User Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h2 className="font-extrabold text-lg">{session.user.name}</h2>
        <h4 className="font-extrabold italic">{session.user.email}</h4>
        <SignOutButton />
      </div>
    </>
  );
}
