"use server";

export async function register(formData: FormData) {
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const tel = formData.get("tel");

  console.log(fullname, email, tel);
}