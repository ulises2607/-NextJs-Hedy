"use client";
import PostCard from "@/components/Posts/PostCard";
import Link from "next/link";

const PostList = () => {
  const userTest = "Ulises";
  const dataExample = [
    {
      id: 1,
      title: "Title 1",
      description: "Little description for the post with id 1",
      quantityComments: 0,
    },
    {
      id: 2,
      title: "Title 2",
      description: "Another description for the post with id 2",
      quantityComments: 0,
    },
    {
      id: 3,
      title: "Title 3",
      description: "Yet another description for the post with id 3",
      quantityComments: 0,
    },
  ];

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
