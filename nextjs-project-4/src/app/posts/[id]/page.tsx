import PostCard from "@/components/Posts/PostCard";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await res.json();
  return data.data;
}

const PostPage = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div>
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    </div>
  );
};

export default PostPage;
