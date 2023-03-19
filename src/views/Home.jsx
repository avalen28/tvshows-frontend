import React, { useState, useEffect } from "react";
import showService from "../services/showService";
import { Link } from "react-router-dom";

export default function Home() {
  const getData = async () => {
    try {
      const response = await showService.getShows();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {/* ITERATION 2: Should display a list of all the shows */}
    </div>
  );
}
