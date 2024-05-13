import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const posts = data.slice(0, 5);
  return NextResponse.json({ data: posts });
}

export async function POST() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
