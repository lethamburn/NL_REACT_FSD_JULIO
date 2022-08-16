import React from "react";

const Gallery = ({ title, list }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
