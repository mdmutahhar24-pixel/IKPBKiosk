'use server';

import { prisma } from "@/lib/prisma";

export default async function BookExists(barcode: string){
    return await prisma.books.findUnique({
        where: {barcode},
    })
}