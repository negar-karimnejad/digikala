import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full mx-auto max-w-7xl">{children}</div>;
};

export default Container;
