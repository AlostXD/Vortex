import { auth } from "../auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <>
      <div className="flex flex-col max-w-fit justify-center items-center">
        <Image
          src={session.user.image || "/default-avatar.png"}
          alt="User Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
      </div>
    </>
  );
}
