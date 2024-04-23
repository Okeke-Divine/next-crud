import { getById } from "@/app/lib/data";
import { NextResponse } from "@/node_modules/next/server";

export const GET = async (req: Request, res: Response) => {
  const id = req.url.split("blogs/")[1];
  const post = getById(id);
  if (!post) {
    return NextResponse.json({ message: "Error" }, { status: 400 });
  }
  return NextResponse.json({ message: "ok", post }, { status: 200 });
};

export const PUT = async (req: Request, res: Response) => {
  console.log("PUT");
};

export const DELETE = async (req: Request, res: Response) => {
  console.log("DELETE");
};
