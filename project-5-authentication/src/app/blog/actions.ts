"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addPost(formData: FormData) {
  const supabase = createClient();

  console.log("formData", formData.get("title"));

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    user_id: user?.id,
    created_at: new Date().toISOString(),
  };

  console.log("lo que llega al action", data);

  const { error } = await supabase.from("posts").insert([data]);

  if (error) {
    return { error };
  } else {
    console.log("Post added");
    revalidatePath("/blog");
  }
}

export async function addComment(formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = {
    content: formData.get("content") as string,
    user_id: user?.id,
    post_id: formData.get("post_id") as string,
    created_at: new Date().toISOString(),
  };

  console.log("lo que llega al action", data);

  const { error } = await supabase.from("comments").insert([data]);

  if (error) {
    return { error };
  } else {
    console.log("Comment added");
    revalidatePath("/blog");
  }
}
