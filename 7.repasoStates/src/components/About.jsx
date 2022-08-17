import React from "react";

const About = ({ aboutInfo }) => {
  return (
    <figure>
      <h2>
        {aboutInfo.name} {aboutInfo.surname}
      </h2>
      <p>
        {aboutInfo.avatar} - {aboutInfo.age} years old
      </p>
    </figure>
  );
};

export default About;
