import Title from "@/components/atoms/Title";
import { packageItems } from "@/constants/data";
import PackageCard from "./PackageCard";
import { Button } from "@/components/ui/button";

const PackagesList = () => {
  return (
    <section className="py-14">
      <div className="container space-y-8">
        <div className="sm:flex justify-between">
          <Title title="Daftar Paket" />

          <div className="hidden sm:block">
            <Button>Lihat Semua Paket</Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center lg:items-start justify-center lg:justify-between gap-8 xl:gap-0">
          {packageItems.slice(0, 4).map((item, index) => (
            <PackageCard
              key={index}
              title={item.title}
              desc={item.desc}
              bestSeller={item.bestSeller}
            />
          ))}
        </div>

        <div className="sm:hidden flex items-center justify-center">
          <Button>Lihat Semua Paket</Button>
        </div>
      </div>
    </section>
  );
};
export default PackagesList;
