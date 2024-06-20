import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-medium flex justify-center items-center bg-green-200 w-full h-full text-black shadow-md p-5 m-5 border rounded-lg">
      {children}
    </div>
  );
}

export default Card;
