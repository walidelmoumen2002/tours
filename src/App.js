import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [data, setData, loading, fetchData] = useFetch(url);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (data.length === 0) {
    return (
      <main className="page">
        <h1>no tours left</h1>
        <div className="line"></div>
        <button onClick={fetchData} className="loadbtn">
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main className="page">
      <h1>Our Tours</h1>
      <div className="line"></div>
      <Tours tours={data} setData={setData} />
    </main>
  );
}

export default App;
