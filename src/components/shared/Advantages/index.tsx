import Title from "@/components/atoms/Title";
import AdvantageCard from "./AdvantageCard";
import { advantageItems } from "@/constants/data";

const Advantages = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14 space-y-8">
        <div className="flex items-center justify-center">
          <Title
            title="Keunggulan"
            desc="beberapa keunggulan yang bisa anda dapatkan menggunakan jasa aqiqah lombok."
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {advantageItems.map((item, index) => (
            <AdvantageCard
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Advantages;
