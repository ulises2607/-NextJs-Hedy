import { NextResponse } from "next/server";
import { getPosts } from "@/firebase/firebase_manage";

export async function GET() {
  const data = await getPosts();
  return NextResponse.json({ data });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Path: src/app/api/posts/[id]/route.ts
