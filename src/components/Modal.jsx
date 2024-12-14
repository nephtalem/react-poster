import NewPost from "./NewPost";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

const Modal = () => {
  const { showModal } = useContext(AppContext);


  return (
    <div className={showModal ? "modal active" : "modal "}>
      <NewPost />
    </div>
  );
};
export default Modal;
