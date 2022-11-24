import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeData = (id) => {
    const newTours = data.filter((tour) => tour.id !== id);
    console.log(newTours);
    setData(newTours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      console.log(data);
      setData(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data, setData, loading, fetchData, removeData];
};

export default useFetch;
