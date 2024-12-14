import { useContext, useState } from "react";
import { AppContext } from "../context/ContextProvider";

const NewPost = () => {
  const { setShowModal, setPost, post } = useContext(AppContext); // Ensure setShowModel is used here
  const [formData, setFormData] = useState({
    name: "",
    text: "",
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPost([...post, formData]);
    setShowModal(false);
    setFormData({ name: "", text: "" });
  };

  console.log(post);

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend></legend>

        <div className="form-row">
          <label htmlFor="comment">Text</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Write your comment here..."
            rows="4"
            required
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          ></textarea>
        </div>

        <div className="form-row">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="btn-container">
          <button type="button" onClick={closeModal} className="form-btn">
            Cancel
          </button>
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default NewPost;
