"use client";
import React, { useState } from "react";

function About() {
  const [name, setName] = useState("");
  console.log("about page✌🎂");

  return (
    <>
      <h1>About Page</h1>
      <input
        type="text"
        className="border"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>name: {name}!</p>
    </>
  );
}

export default About;
