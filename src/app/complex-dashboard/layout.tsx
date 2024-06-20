import React from "react";

export default function DashboardLayout({
  children,
  notifications,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
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
  );
}
