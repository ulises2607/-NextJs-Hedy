"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CommentCard = ({ postId, initialComments }) => {
  const [userComment, setUserComment] = useState("");
  const [comments, setComments] = useState(initialComments);

  const handleComment = (e) => {
    setUserComment(e.target.value);
  };

  const addNewComment = async () => {
    const newComment = {
      comment: userComment,
      date: new Date().toISOString(),
      author: "Anonymous",
    };

    try {
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (!res.ok) {
        throw new Error("Failed to add comment");
      }

      setUserComment("");
      await fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/posts/${postId}/comments`);
      if (!res.ok) {
        throw new Error("Failed to fetch comments");
      }

      const data = await res.json();
      setComments(data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="mt-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border-b p-4 mb-2 shadow-sm rounded-md bg-gray-100"
        >
          <h3 className="text-gray-800">{comment.comment}</h3>
          <p className="text-sm text-gray-500">
            {new Date(comment.date).toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">by {comment.author}</p>
        </div>
      ))}
      <div className="mt-4 flex flex-col">
        <Input
          value={userComment}
          onChange={handleComment}
          type="text"
          placeholder="Add comment"
          className="mb-2"
        />
        <Button onClick={addNewComment} type="submit">
          Add comment
        </Button>
      </div>
    </div>
  );
};

export default CommentCard;
