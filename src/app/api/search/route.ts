import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("q");
  console.log(search);

  if (typeof search !== "string") {
    throw new Error("invalid request");
  }

  try {
    const posts = await prisma.post.findMany({
        where: {
          OR: [
            {
              body: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              author: {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
          author: true,
        },
      });
    
      return NextResponse.json(posts, {
        status: 200,
      });

  } catch(error: any) {
    console.log(error)
    return NextResponse.error(); 

  }

  
}
