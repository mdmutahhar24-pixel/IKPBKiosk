'use server';

import { toast } from "@/components/ui/toast";
import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation";


export default async function AdminSignUp(_prevState: { error: string } | null, formData: FormData) {
    const email = formData.get("email") as string

    if (!email) {
        return { error: "No Email address was provided. Please fill this field out." }
    }

    const { error } = await auth.signUp.email({
        email,
        name: formData.get("name") as string,
        password: formData.get("password") as string
    });

    if (error) {
        return { error: error.message || "Failed To create account. Please try again." }
    }

    redirect("/")
}