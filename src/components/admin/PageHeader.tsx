import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PageHeader({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return (
    <div>
      <div className="sm:text-2xl text-xl max-sm:leading-9 font-bold mb-10 flex justify-between items-center">
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
