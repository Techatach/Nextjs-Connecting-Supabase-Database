import React from "react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { register } from "@/app/actions/page";

export default function Register() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="">
      <form action={register}>
        <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
          <main className="mt-4">
            <div className="flex gab-2 items-center mb-2">
              <div className="">
                <h1>การลงทะเบียน</h1>
              </div>
              <label className="text-md px-4" htmlFor="fullname">
                Fullname
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border"
                name="fullname"
                placeholder="fullname"
                required
              />
            </div>

            <div className="flex gab-2 items-center mb-2">
              <h1>Email</h1>
              <label className="text-md px-4" htmlFor="email">
                Fullname
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="flex gab-2 items-center mb-4">
              <h1>Tel</h1>
              <label className="text-md px-4" htmlFor="tel">
                Fullname
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border"
                name="tel"
                placeholder="0998965698"
                required
              />
            </div>
            <button className="bg-green-800 rounded-md px-4 py-1 text-foreground mb-2 text-white">
              Register
            </button>
          </main>
        </div>
      </form>
    </div>
  );
}
