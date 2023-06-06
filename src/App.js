import axios from "axios";
import React, { useState, useEffect } from "react";
import AllMovies from "./Components/AllMovies";

// React router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import MovieDetail from "./Components/MovieDetail";


const App = () => {
  const [data, setData] = useState([]);
  // Data fetching
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<AllMovies data={data} />} />
      
        <Route path="/movies/:id" element={<MovieDetail />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
