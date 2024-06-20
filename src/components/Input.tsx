"use client";
import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");

  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      className="m-5 p-2"
    />
  );
}

export default Input;
