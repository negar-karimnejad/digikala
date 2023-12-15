import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className="bg-red-500 hover:bg-red-600 rounded-md p-2 text-white">
      {children}
    </button>
  );
}

export default Button;
