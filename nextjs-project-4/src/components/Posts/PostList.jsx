"use client";
import PostCard from "@/components/Posts/PostCard";
import Link from "next/link";

const PostList = ({ title, body, id }) => {
  const userTest = "Ulises";

  return (
    <div className="flex flex-col gap-10">
      {dataExample.map((card) => (
        <div className="flex gap-5 m-2">
          <Link href={`/posts/${card.id.toString()}`}>
            <PostCard
              key={card.id}
              id={card.id}
              title={card.title}
              user={userTest}
              description={card.description}
              commentsQuantity={card.quantityComments}
              className="m-2"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
