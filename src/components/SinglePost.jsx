import { useContext, useState } from "react";
import { AppContext } from "../context/ContextProvider";

const SinglePost = ({ name, text }) => {
  //   const { setShowModal, setPost } = useContext(AppContext); // Ensure setShowModel is used here
  return (
    <div className="singlePost">
      <h2>{name}</h2>
      <p>{text}</p>
    </div>
  );
};
export default SinglePost;
