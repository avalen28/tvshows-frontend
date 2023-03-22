import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import showService from "../services/showService";
import { Link } from "react-router-dom";

export default function Show() {
  const params = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState({});
  const getShowFromAPI = async () => {
    try {
      const showFromAPI = await showService.getShow(params.id);
      setShow(showFromAPI);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async () => {
    try {
      await showService.getDeleteShow(params.id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getShowFromAPI();
    // setTimeout(() => console.log("hola soy show", show), 2000);
  }, []);

  return (
    <div>
      <h2>TV Show details</h2>
      <div className="show-card">
        <h4>{show.title}</h4>
        <img src={show.image} alt="show img" />
        <li>
          <ul>{show.creator}</ul>
          <ul>{show.launched}</ul>
          <ul>{show.genre}</ul>
        </li>

        <Link to={`/edit/${params.id}`}>Edit!</Link>
        <button onClick={handleDelete}>Delete!</button>
      </div>
    </div>
  );
}
