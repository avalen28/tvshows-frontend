import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import showService from "../services/showService";

export default function Edit() {
  const params = useParams();

  const [showToEdit, setShowToEdit] = useState({});
  const navigate = useNavigate();
  const showFromDB = async () => {
    try {
      const responseDBshow = await showService.getShow(params.id);

      setShowToEdit(responseDBshow);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    showFromDB();
  }, []);

  const handleChange = (e) => {
    setShowToEdit((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const putShowInDB = async () => {
    try {
      await showService.updateShow(params.id, showToEdit);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUptade = (e) => {
    e.preventDefault();
    putShowInDB();
    navigate("/");
  };

  return (
    <div>
      <h2>Edit show</h2>
      <form onSubmit={handleUptade}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={showToEdit.title}
          onChange={handleChange}
        />
        <label>Creator</label>
        <input
          type="text"
          name="creator"
          value={showToEdit.creator}
          onChange={handleChange}
        />
        <label>Launched</label>
        <input
          type="number"
          name="launched"
          value={showToEdit.launched}
          onChange={handleChange}
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={showToEdit.genre}
          onChange={handleChange}
        />
        <label>Image Profile</label>
        <input
          type="text"
          name="image"
          value={showToEdit.image}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={showToEdit.description}
          onChange={handleChange}
        />
        <button type="submit">Update the show</button>
      </form>
    </div>
  );
}
