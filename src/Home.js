import React, { useState } from "react";
import Search from "./Components/Search";
import List from "./Components/List";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { save } from "./store/actions";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentID, setCurrentID] = useState(null);
  const [title, setTitle] = useState(null);

  const dispatch = useDispatch();

  const handleView = (id, title) => {
    setShowModal(true);
    setCurrentID(id);
    setTitle(title);
  };

  const handleSave = (id) => {
    dispatch(save(id, title));
    setCurrentID(null);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentID(null);
  };

  return (
    <div className="home">
      <Search />
      <List view={handleView} />

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <h3>Update Movie Title</h3>
          <div className="view-wrapper">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn-save" onClick={() => handleSave(currentID)}>
              Save Changes
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
