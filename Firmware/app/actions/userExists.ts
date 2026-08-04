'use server';

import { prisma } from "@/lib/prisma";

export default async function UserExists(barcode: string) {
    return await prisma.regularUser.findUnique({
        where: {
            barcode,
        }
    })
}