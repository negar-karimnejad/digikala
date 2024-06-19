import NavLinksItem from "@/components/NavLinksItem";
import React from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget-Password", href: "/forget-password" },
];

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
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
