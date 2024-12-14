import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

const NewPostBtn = () => {
  const { showModal, setShowModal } = useContext(AppContext);

  const toggleCreatePost = () => {
    setShowModal(!showModal);
  };

  return (
    <button className="btn" onClick={toggleCreatePost}>
      🚩New Post
    </button>
  );
};
export default NewPostBtn;
