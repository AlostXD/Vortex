import { signIn } from "@/auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
      className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black font-extrabold transition-all hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
    >
      <button type="submit">Entrar com o Github</button>
    </form>
  );
}