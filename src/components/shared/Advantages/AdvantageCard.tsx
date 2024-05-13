import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

const AdvantageCard = ({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
}) => {
  return (
    <Card className="w-[300px] h-[250px] text-center flex flex-col items-center justify-center gap-4 px-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="max-w-max p-3 bg-primary rounded-full flex items-center justify-center ">
          <Icon className="size-10 text-white/90" />
        </div>
        <span className="text-xl font-semibold text-foreground">{title}</span>
      </div>

      <p className="text-sm text-gray-600">{desc}</p>
    </Card>
  );
};
export default AdvantageCard;
