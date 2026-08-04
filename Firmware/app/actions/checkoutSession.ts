'use server';

import { cookies } from "next/headers";

export async function StartCheckoutSession(userId: string) {
  const cookieStore = await cookies();

  cookieStore.set("checkout-user", userId, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
}