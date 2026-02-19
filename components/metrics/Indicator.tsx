import { ReactNode } from "react";

interface IndicatorProps {
  title: string;
  value: string;
  icon: ReactNode;
}

const Indicator = ({ title, value, icon }: IndicatorProps) => {
  return (
    <div className="flex flex-col w-24 gap-2 p-4 ">
      <div className="flex flex-col items-center gap-1">
        {icon}
        <span className="text-md text-foreground font-bold">{value}</span>
      </div>
      <span className="text-xs text-center text-muted">{title}</span>
    </div>
  );
};

export default Indicator;
