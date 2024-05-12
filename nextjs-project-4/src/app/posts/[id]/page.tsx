const page = ({ params }) => {
  const postId = params.id;

  return (
    <div>
      <h1>Post ID: {postId}</h1>
    </div>
  );
};

export default page;
