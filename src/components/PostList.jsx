import { useContext, useState } from "react";
import { AppContext } from "../context/ContextProvider";
import SinglePost from "./SinglePost";

const PostList = () => {
  const { showModal, post } = useContext(AppContext); // Ensure setShowModel is used here

  if (post.length > 0) {
    return (
      <div className="postList">
        {post.map((post) => (
          <SinglePost {...post} key={post.name} />
        ))}
      </div>
    );
  }

  return (
    <>
      <h1 className="welcomeText">Welcome to the React Poster</h1>
    </>
  );
};
export default PostList;
