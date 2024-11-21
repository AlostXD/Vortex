import { signOut } from "@/auth";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black font-extrabold transition-all hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
    >
      <button type="submit">Trocar de conta / sair</button>
    </form>
  );
}
