"use client";
import React from "react";

function ErrorBoundry({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button
        onClick={reset}
        className="text-white w-32 bg-green-500 p-2 m-5 text-lg rounded-md font-medium hover:shadow-sm hover:bg-green-600 transition-all"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorBoundry;
