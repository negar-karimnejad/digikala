import React from "react";

export default function DashboardLayout({
  children,
  notifications,
  users,
  revenue,
  signin,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  signin: React.ReactNode;
}) {
  const isLoggedin = true;

  return isLoggedin ? (
    <div>
      <div>{children}</div>
      <div className="flex gap-5">
        <div className="flex flex-col space-y-5">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div>{notifications}</div>
      </div>
    </div>
  ) : (
    signin
  );
}
