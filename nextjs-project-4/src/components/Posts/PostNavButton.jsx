"use client";

import { Link } from "lucide-react";

const PostNavButton = (id) => {
  return Link({ href: `/posts/${id}` }, null, "Post");
};

export default PostNavButton;
