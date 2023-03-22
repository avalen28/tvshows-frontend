import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import showService from "../services/showService";

export default function New() {
  const defaultShow = {
    title: "",
    creator: "",
    launched: "",
    genre: "",
    image: "",
    description: "",
  };
  const navigate = useNavigate();
  const [newShow, setNewShow] = useState(defaultShow);
  const handleChange = (e) => {
    // console.log(e.target.value) comprobamos que llega el valor que se está cambiando
    setNewShow((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAddShow = async () => {
    try {
      const newShowCreatedinDB = await showService.createNewShow(newShow);
      navigate(`/shows/${newShowCreatedinDB._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    handleAddShow();
    setNewShow(defaultShow);
  };

  return (
    <div>
      <h2>Create a tv show</h2>
      <form onSubmit={handleCreate}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={newShow.title}
          onChange={handleChange}
        />
        <label>Creator</label>
        <input
          type="text"
          name="creator"
          value={newShow.creator}
          onChange={handleChange}
        />
        <label>Launched</label>
        <input
          type="number"
          name="launched"
          value={newShow.launched}
          onChange={handleChange}
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={newShow.genre}
          onChange={handleChange}
        />
        <label>Image Profile</label>
        <input
          type="text"
          name="image"
          value={newShow.image}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={newShow.description}
          onChange={handleChange}
        />
        <button type="submit">Create the show</button>
      </form>
    </div>
  );
}
