import { ReactNode } from "react";
import { Surface } from "@heroui/react";

interface ProgressIndicatorProps {
  title: string;
  value: number;
  total: number;
  icon: ReactNode;
}

const ProgressIndicator = ({
  title,
  value,
  total,
  icon,
}: ProgressIndicatorProps) => {
  return (
    <Surface className="flex flex-col w-full gap-2 p-4 rounded-lg border border-border">
      <div className="flex flex-col items-center gap-1">
        {icon}
        <div className="flex items-center gap-0.5">
          <span className="text-lg text-foreground font-bold">{value}</span>
          <span className="text-lg text-foreground font-bold">/</span>
          <span className="text-lg text-foreground font-bold">{total}</span>
        </div>
      </div>
      <span className="text-xs text-center text-muted">{title}</span>
    </Surface>
  );
};

export default ProgressIndicator;
