"use client";
import PostList from "@/components/Posts/PostList";

const page = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      {/* Title section */}
      <div>
        <h2>All Post page</h2>
      </div>
      {/* Bodi section */}
      <div>
        <PostList />
      </div>
    </div>
  );
};

export default page;
