"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommentCard from "../Comments/CommentCard";
import Link from "next/link";

const PostCard = ({ id, title, body, author, comments }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 p-5 m-2 shadow-lg rounded-lg bg-white">
      <Card className="w-[550px] m-2 bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>
            <Link
              href={`/posts/${id}`}
              className="text-blue-500 hover:underline"
            >
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="text-gray-500">
            Created by {author}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-gray-800">{body}</div>
          <div className="mt-4">
            <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
              Comments
            </Button>
            {isOpen && <CommentCard postId={id} initialComments={comments} />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostCard;
