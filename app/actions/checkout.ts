'use server';

import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Checkout(barcode: string) {
  const cookieStore = await cookies();

  const userId = cookieStore.get("checkout-user")?.value;

  if (!userId) {
    throw new Error("No user is currently checking out books.");
  }

  const user = await prisma.regularUser.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  const book = await prisma.books.findUnique({
    where: {
      barcode,
    },
  });

  if (!book) {
    throw new Error("Book not found.");
  }
  
  if (book.status === "CHECKED_OUT") {
    await prisma.books.update({
      where: {
        barcode,
      },
      data: {
        status: "AVAILABLE"
      },
    });
    await prisma.transaction.create({
      data: {
        bookTitle: book.title,
        UserBarCode: user.barcode,
        action: "RETURNED"
      }
    })
  } else {
    await prisma.books.update({
      where: {
        barcode,
      },
      data: {
        status: "CHECKED_OUT"
      },
    });
    await prisma.transaction.create({
      data: {
        bookTitle: book.title,
        UserBarCode: user.barcode,
        action: "CHECKED_OUT",
      }
    })
  }

  redirect("/");
}