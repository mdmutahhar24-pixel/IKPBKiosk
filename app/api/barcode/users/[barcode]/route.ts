import { prisma } from "@/lib/prisma";
import bwipjs from "bwip-js";

export async function GET(req: Request, { params }: { params: Promise<{ barcode: string }> }) {
  const { barcode } = await params;

  const user = await prisma.regularUser.findUnique({
    where: {
      barcode,
    },
  });

  if (!user) {
    return new Response("User not found", {
      status: 404,
    });
  }

  const png = await bwipjs.toBuffer({
    bcid: "code128",
    text: user.barcode,
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