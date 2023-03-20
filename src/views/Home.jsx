import React, { useState, useEffect } from "react";
import showService from "../services/showService";
import Card from "../components/Card";

export default function Home() {
  const [shows, setShows] = useState([]);
  const getShowsFromAPI = async () => {
    try {
      const showsFromAPI = await showService.getShows();
      setShows(showsFromAPI);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getShowsFromAPI();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <Card shows={shows} />
    </div>
  );
}
