'use server';

import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";

export default async function AdminSignIn(_prevState: {error: string} | null, formData: FormData) {
    const { error } = await auth.signIn.email({
        email: formData.get("email") as string,
        password: formData.get("password") as string
    });

    if (error) {
        return { error: error.message || "Something went wrong with your sign in. Please try again later." }
    }
    const { data: session } = await auth.getSession()
    if (!(session?.user.role == "admin")) {
        return { error: "You are not an admin. Please do not log in here again." }
    }
    redirect("/admin/dashboard")
}