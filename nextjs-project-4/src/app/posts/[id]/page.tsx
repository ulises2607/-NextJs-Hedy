import PostCard from "@/components/Posts/PostCard";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await res.json();
  return data;
}

const PostPage = async ({ params }) => {
  const post = await getPost(params.id);
  console.log("que trae esto!!!");

  console.log(post);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">Author: {post.author}</p>
      <p className="text-gray-700">Date: {post.date}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Tags:</h3>
        <ul className="inline-flex mt-2">
          {post.tags.map((tag, index) => (
            <li
              key={index}
              className="bg-gray-200 px-2 py-1 mr-2 rounded-md text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Body:</h3>
        <p className="mt-2">{post.body}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Comments:</h3>
        <ul className="mt-2">
          {post.comments.map((comment) => (
            <li key={comment.id} className="border-b pb-4">
              <p>{comment.comment}</p>
              <p className="text-gray-600 text-sm mt-1">By: {comment.author}</p>
              <p className="text-gray-600 text-sm">Date: {comment.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostPage;
