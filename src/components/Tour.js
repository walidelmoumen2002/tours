import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h2>{name}</h2>
          <p className="tour-price">{price}$</p>
        </div>
        <p>
          {readMore ? info : info?.substring(0, 200)}...
          <button onClick={() => setReadMore(!readMore)} className="btninfo">
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="removebtn ">
          Not interested
        </button>
      </footer>
    </article>
  );
};
export default Tour;
