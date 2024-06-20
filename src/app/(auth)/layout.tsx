import React from "react";
import Input from "../../components/Input";
import NavLinksItem from "../../components/NavLinksItem";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget-Password", href: "/forget-password" },
];

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Input />
      <div className="space-x-5 mb-10">
        {navLinks.map((link) => (
          <NavLinksItem link={link} key={link.name} />
        ))}
      </div>
      {children}
    </div>
  );
}

export default layout;
