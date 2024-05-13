import PostCard from "@/components/Posts/PostCard";
import Link from "next/link";
import { generatePostButton } from "@/components/generatePostButton";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data.data;
}

const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className="flex justify-center flex-col items-center">
      {/* Title section */}
      <div>
        <h1>All Post page</h1>
        <div>Generate a post</div>
        <generatePostButton />
      </div>
      {/* Bodi section */}
      <div>{/* <PostList /> */}</div>
      <div>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`}>
            <PostCard
              key={post.id}
              id={post.id}
              body={post.body}
              title={post.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
