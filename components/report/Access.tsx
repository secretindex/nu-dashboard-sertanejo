import { Surface } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface AccessProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const Access = ({ title, description, icon, link }: AccessProps) => {
  return (
    <Surface className="flex items-center justify-between gap-6 p-4 border border-border rounded-2xl">
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full bg-focus p-2">
            {icon}
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-md">{title}</h4>
          <span className="text-xs text-muted">{description}</span>
        </div>
      </div>
      <div>
        <Link href={link as string}>
          <ExternalLink className="text-focus" />
        </Link>
      </div>
    </Surface>
  );
};

export default Access;
