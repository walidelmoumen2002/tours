import React, { useState } from "react";
import { useFormik } from "formik";
import Tour from "./Tour";
import useFetch from "../hooks/useFetch";

const Tours = ({ tours, removeTour }) => {
  console.log("[tours]", tours);
  const [data, setData] = useState(tours);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
  });
  const searchTour = (word) => {
    const tour = tours.filter((tour) => {
      if (tour.name.toLowerCase().includes(word)) {
        console.log(tour);
        return tour;
      }
    });
    setData(tour);
  };
  return (
    <section>
      <input
        type="text"
        className="search"
        id="search"
        onChange={formik.handleChange}
        value={formik.values.search}
      />
      <button
        onClick={() => searchTour(formik.values.search)}
        className="search-btn"
      >
        Search
      </button>
      {data.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
