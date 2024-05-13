import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="container lg:h-[550px] flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="flex-1 size-full flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-8">
          <div className="space-y-4 lg:space-y-8 text-center lg:text-start">
            <h1 className="text-3xl sm:text-5xl font-bold sm:leading-[60px]">
              <span className="text-primary">Tunaikan</span> Aqiqah, <br />
              Tanpa Perlu <span className="text-primary">Repot</span>.
            </h1>

            <p className="text-sm sm:text-base sm:max-w-[500px] text-muted-foreground">
              Aqiqah Lombok adalah layanan aqiqah yang menyediakan paket aqiqah
              lengkap, mulai dari pemotongan hingga pengantaran daging ke alamat
              Anda.
            </p>
          </div>

          <div>
            <Button>Hubungi Kami</Button>
          </div>
        </div>

        <div className="relative flex-1 size-full flex items-center justify-center">
          <div className="relative w-full h-[250px] sm:h-[300px] lg:size-full">
            <Image src={"/heroimg.svg"} alt="" fill />
          </div>
          kkk
          <div className="hidden lg:block absolute bottom-28 max-w-[500px] bg-background rounded-lg border shadow-sm p-4 text-sm">
            <p>
              Aqiqah yaitu sembelihan dengan niat mendekatkan diri kepada Allah
              Subhanahu wa ta&apos;ala dan sebagai ungkapan rasa syukur atas
              nikmat dikaruniai anak. <br />
              <span className="font-bold">~ Syaikh Ibnu ‘Utsaimin</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
