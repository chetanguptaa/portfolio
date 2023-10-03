import { NextRequest, NextResponse } from "next/server";
import { Blog } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create a blog." },
        {
          status: 401,
        }
      );
    }
    const reqBody: Blog = await req.json();
    const { title, editorState } = reqBody;
    const blog = await prisma.blog.create({
      data: {
        title: title,
        editorState: editorState,
      },
    });
    const response = NextResponse.json({
      id: blog.id,
      message: "Saving successful",
      success: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
