import { ReactNode } from "react";
import { Surface } from "@heroui/react";

interface TotalIndicatorProps {
  title: string;
  value: number;
  icon: ReactNode;
}

const TotalIndicator = ({ title, value, icon }: TotalIndicatorProps) => {
  return (
    <Surface className="flex flex-col w-full gap-2 p-4 rounded-lg border border-border">
      <div className="flex flex-col items-center gap-1">
        {icon}
        <div className="flex items-center gap-1">
          <span className="text-lg text-foreground font-bold">{value}</span>
        </div>
      </div>
      <span className="text-xs text-center text-muted">{title}</span>
    </Surface>
  );
};

export default TotalIndicator;
