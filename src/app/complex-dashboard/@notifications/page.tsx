import React from "react";
import Card from "../../../components/Card";
import Link from "next/link";

function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link className="text-blue-700 underline" href="complex-dashboard/archived">Archived</Link>
    </Card>
  );
}

export default Notifications;
