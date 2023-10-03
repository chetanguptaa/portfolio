import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log(request.url);
    const blogs = await prisma.blog.findMany();
    const response = NextResponse.json(blogs, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
