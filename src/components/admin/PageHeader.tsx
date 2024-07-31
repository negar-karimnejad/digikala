import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function PageHeader({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return (
    <div>
      <div className="text-2xl font-bold mb-10 flex justify-between items-center">
        <span>{title}</span>
        {href && (
          <Button>
            <Link className="flex items-center gap-1" href={href}>
              <Plus size={22} /> افزودن
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
