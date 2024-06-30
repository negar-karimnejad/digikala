import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Container from "@/components/ui/container";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-5 pt-5">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <Nav />

            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
