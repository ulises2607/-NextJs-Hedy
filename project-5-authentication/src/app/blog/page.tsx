import AddPostModal from "@/components/post-form";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const Blog = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user?.email);

  if (!user) {
    return redirect("/login");
  }

  const userId = user.id;

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  // Only testing fech some comments to preview. It is not worked yet
  const { data: comments } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="bg-gray-200 flex flex-col items-center justify-start text-center min-h-screen py-10">
      <div className="mb-8">
        <AddPostModal userId={userId} />
      </div>
      <div className="flex flex-col gap-8 items-center justify-center text-left bg-white w-full max-w-4xl p-4 rounded-lg shadow-md">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.id}
              className="w-full bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>
              <p>{post.content}</p>
              <span>by {post.user_id}</span>
              <div className="flex flex-col gap-2 bg-slate-50">
                <h3>Comments</h3>
                {comments &&
                  comments.map((comment) => (
                    <div key={comment.id} className="bg-slate-100 p-4">
                      {comment.post_id === post.id && <p>{comment.content}</p>}
                    </div>
                  ))}
              </div>
            </article>
          ))
        ) : (
          <p>No hay post</p>
        )}
      </div>
    </main>
  );
};

export default Blog;
