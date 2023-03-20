import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import showService from "../services/showService";

export default function Show() {
  const params = useParams();
  console.log("hola soy params", params.id);
  const [show, setShow] = useState({});
  const getShowFromAPI = async () => {
    try {
      const showFromAPI = await showService.getShow(params.id);
      setShow(showFromAPI);
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
      {/* ITERATION 3 */}
      <p>{show.title}</p>
    </div>
  );
}
