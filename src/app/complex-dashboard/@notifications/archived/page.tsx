import React from "react";
import Link from "next/link";
import Card from "../../../../components/Card";

function ArchievdNotifications() {
  return (
    <Card>
      <h1>Archievd Notifications</h1>
      <Link className="text-blue-700 underline" href="/complex-dashboard">
        Defualt
      </Link>
    </Card>
  );
}

export default ArchievdNotifications;
