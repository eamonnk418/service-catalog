"use server";

import { cookies } from "next/headers";

export async function create() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("authjs.session-token");
  if (jwt === undefined) {
    return
  }

  console.log("Server Actions JWT: ", jwt.value);
}
