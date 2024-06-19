import React from "react";

function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-3">
      <h1 className="text-lg font-bold mb-2">-Feature Page Layout</h1>
      {children}
    </div>
  );
}

export default DocsLayout;
