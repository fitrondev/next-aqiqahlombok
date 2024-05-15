import Advantages from "@/components/shared/Advantages";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Orders from "@/components/shared/Orders";
import PackagesList from "@/components/shared/PackagesList";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <PackagesList />
      <Orders />
      <Testimonials />
    </>
  );
}
