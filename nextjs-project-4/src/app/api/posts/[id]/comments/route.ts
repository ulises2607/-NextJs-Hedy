import { NextResponse } from "next/server";
import { getComments, addComment } from "@/firebase/firebase_manage";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  try {
    const comments = await getComments(postId);
    return NextResponse.json({ comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  try {
    const { comment, author } = await request.json();
    const newComment = {
      comment,
      author,
      date: new Date().toISOString(),
    };
    await addComment(postId, newComment);
    return NextResponse.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
