import React, { useState } from "react";
import { useFormik } from "formik";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  console.log("[tours]", tours);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(tours);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
  });
  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id);
    console.log(newTours);
    setData(newTours);
  };

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
      <form
        onChange={() => {
          searchTour(formik.values.search);
        }}
      >
        <input
          type="text"
          className="search"
          id="search"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
      </form>

      {data.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
