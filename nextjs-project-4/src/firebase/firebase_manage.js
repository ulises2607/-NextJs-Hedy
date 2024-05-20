import { db } from "./firebase";
import {
  collection,
  doc,
  writeBatch,
  getDocs,
  querySnapshot,
  getDoc,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import posts from "./data.json";

const addMultiplePosts = async () => {
  try {
    const batch = writeBatch(db);
    posts.forEach((post) => {
      const postData = {
        ...post,
      };
      const docRef = doc(collection(db, "posts"));
      batch.set(docRef, postData);
    });
    await batch.commit();
  } catch (error) {
    throw new Error("Error adding multiple products: " + error.message);
  }
};

const getPosts = async () => {
  try {
    const postsQuerySnapshot = await getDocs(collection(db, "posts"));
    const posts = await Promise.all(
      postsQuerySnapshot.docs.map(async (postDoc) => {
        const postData = postDoc.data();
        const commentsQuerySnapshot = await getDocs(
          collection(db, "posts", postDoc.id, "comments")
        );
        const comments = commentsQuerySnapshot.docs.map((commentDoc) => ({
          id: commentDoc.id,
          ...commentDoc.data(),
        }));
        return {
          id: postDoc.id,
          ...postData,
          comments,
        };
      })
    );
    return posts;
  } catch (error) {
    throw new Error("Error getting posts: " + error.message);
  }
};

const getPostById = async (postId) => {
  try {
    const postDocRef = doc(db, "posts", postId);
    const postDoc = await getDoc(postDocRef);
    if (!postDoc.exists()) {
      throw new Error("Post not found");
    }
    const postData = postDoc.data();
    const commentsQuerySnapshot = await getDocs(
      collection(db, "posts", postId, "comments")
    );
    const comments = commentsQuerySnapshot.docs.map((commentDoc) => ({
      id: commentDoc.id,
      ...commentDoc.data(),
    }));
    return {
      id: postDoc.id,
      ...postData,
      comments,
    };
  } catch (error) {
    throw new Error("Error getting post by ID: " + error.message);
  }
};

const getComments = async (postId) => {
  try {
    const commentsQuerySnapshot = await getDocs(
      collection(db, "posts", postId, "comments")
    );
    const comments = commentsQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return comments;
  } catch (error) {
    throw new Error("Error getting comments: " + error.message);
  }
};

const addComment = async (postId, comment) => {
  try {
    // Referencia a la subcolección 'comments' dentro del documento del post
    const commentsRef = collection(db, "posts", postId, "comments");
    // Agregar un nuevo comentario
    await addDoc(commentsRef, comment);
  } catch (error) {
    throw new Error("Error adding comment: " + error.message);
  }
};

export default addMultiplePosts;
export { getPosts, getComments, addComment, getPostById };
