import { signOut } from "@/auth"
 
export default function Logoff() {
  return (
    <div className="">
      <h5>Are you sure you want to sign out?</h5>
      <form
        action={async (formData) => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}