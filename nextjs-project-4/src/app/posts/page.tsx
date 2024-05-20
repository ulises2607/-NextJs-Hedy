export const dynamic = "force-dynamic";
import PostCard from "@/components/Posts/PostCard";
import Link from "next/link";
import CommentCard from "@/components/Comments/CommentCard";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data.data;
}

const Posts = async () => {
  const posts = await getPosts();

  console.log("La data traida del getpost", posts);

  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <h1>All Post page</h1>
      </div>

      <div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            body={post.body}
            title={post.title}
            author={post.author}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
