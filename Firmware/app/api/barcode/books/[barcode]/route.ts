import { prisma } from "@/lib/prisma";
import bwipjs from "bwip-js";

export async function GET(req: Request, { params }: { params: Promise<{ barcode: string }> }) {
  const { barcode } = await params;

  const book = await prisma.books.findUnique({
    where: {
      barcode,
    },
  });

  if (!book) {
    return new Response("Book not found", {
      status: 404,
    });
  }

  const png = await bwipjs.toBuffer({
    bcid: "code128",
    text: book.barcode,
    scale: 3,
    height: 12,
    includetext: true,
  });

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}