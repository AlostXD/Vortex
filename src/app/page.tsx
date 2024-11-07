import { redirect } from "next/navigation"
import { signIn, auth, providerMap } from "@/auth"
import { AuthError } from "next-auth"

export default async function SignInPage(props: {
    searchParams: { callbackUrl: string | undefined }
}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <form
                    action={async (formData) => {
                        "use server"
                        try {
                            await signIn("credentials", formData)
                        } catch (error) {
                            if (error instanceof AuthError) {
                                return redirect(`{SIGNIN_ERROR_URL}?error=${error.type}`)
                            }
                            throw error
                        }
                    }}
                    className="flex flex-col gap-4 justify-center"
                >
                    <label htmlFor="email" className="flex flex-col">
                        Email
                        <input name="email" id="email" type="email" placeholder="Email"className="bg-gray-300 rounded-lg p-2"/>
                    </label>
                    <label htmlFor="password" className="flex flex-col">
                        Password
                        <input name="password" id="password" type="password" placeholder="Senha"className="bg-gray-300 rounded-lg p-2"/>
                    </label>
                    <input type="submit" value="Sign In" />
                </form>
                {Object.values(providerMap).map((provider) => (
                    <form
                        action={async () => {
                            "use server"
                            try {
                                const searchParams = await props.searchParams;
                                await signIn("github", {
                                    redirectTo: props.searchParams?.callbackUrl ?? "/homepage",
                                })
                            } catch (error) {
                                // Signin can fail for a number of reasons, such as the user
                                // not existing, or the user not having the correct role.
                                // In some cases, you may want to redirect to a custom error
                                if (error instanceof AuthError) {
                                    return redirect(`{SIGNIN_ERROR_URL}?error=${error.type}`)
                                }

                                // Otherwise if a redirects happens Next.js can handle it
                                // so you can just re-thrown the error and let Next.js handle it.
                                // Docs:
                                // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                                throw error
                            }
                        }}
                    >
                        <button type="submit">
                            <span>Sign in with {provider.name}</span>
                        </button>
                    </form>
                ))}
            </div>
        </>
    );
}
