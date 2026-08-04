'use server';

import { prisma } from "@/lib/prisma";


export default async function BookAdd(formData: FormData) {

    let author = await prisma.authors.findFirst({
        where: {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
        },
    });

    if (!author) {
        author = await prisma.authors.create({
            data: {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            },
        });
    }

    await prisma.books.create({
        data: {
            barcode: formData.get("barcode") as string,
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            shelfLocation: formData.get("shelfLocation") as string,
            Genre: formData.get("genre") as string,

            author: {
                connect: {
                    id: author.id
                }
            }
        },
    });

    
}