'use server';

import { toast } from "@/components/ui/toast";
import { prisma } from "@/lib/prisma";

export default async function CreateRegUser(formData: FormData) {

    await prisma.regularUser.create({
        data: {
            barcode: formData.get("barcode") as string,
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string
        }
    });
}