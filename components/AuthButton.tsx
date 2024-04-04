import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        {/* <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"> */}
        <button className="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      // className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl "
    >
      Login
    </Link>
  );
}
