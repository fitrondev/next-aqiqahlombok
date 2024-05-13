import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const PackageCard = ({
  title,
  desc,
  bestSeller,
}: {
  title: string;
  desc: string;
  bestSeller: boolean;
}) => {
  return (
    <Card className="w-[300px]">
      <CardHeader className="relative w-full h-[200px]">
        <Image
          src={"/p1.jpg"}
          alt=""
          fill
          className="rounded-t-lg object-cover"
        />

        <div>
          {bestSeller && (
            <div className="absolute top-0 left-0 bg-primary text-background px-2 py-1 rounded-tl-lg rounded-br-lg">
              Best Seller
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">
          {desc.split(" ").slice(0, 12).join(" ")}...
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button>Lihat Detail</Button>
      </CardFooter>
    </Card>
  );
};
export default PackageCard;
