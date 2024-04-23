import { getById, updatePosts } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const id = req.url.split("blogs/")[1];
  const post = getById(id);
  if (!post) {
    return NextResponse.json(
      { message: "Post does not exist" },
      { status: 400 }
    );
  }
  return NextResponse.json({ message: "ok", post }, { status: 200 });
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePosts(id, title, desc);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  const id = req.url.split("blogs/")[1];
  console.log(id);
};
