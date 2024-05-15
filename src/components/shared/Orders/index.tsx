import Image from "next/image";

// components
import Title from "@/components/atoms/Title";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const Orders = () => {
  return (
    <section className="py-14">
      <div className="container space-y-4 lg:space-y-8">
        <div className="flex items-center justify-center">
          <Title
            title="Cara Pemesanan"
            desc="Langkah-langkah pemesanan aqiqah."
          />
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:flex-1 hidden lg:block">
            <Image src={"/messages.svg"} alt="" width={500} height={500} />
          </div>

          <div className="lg:flex-1 lg:flex flex-col justify-center gap-8 space-y-8">
            <ul className="list-decimal list-inside sm:text-lg space-y-4">
              <li>
                Menghubungi kami melalui WhatsApp Admin di 0817 6917 1945.
              </li>

              <li>
                Tentukan paket aqiqah yang diinginkan dan mengisi form
                pemesanan.
              </li>

              <li>
                Melakukan DP sebesar Rp. 500.000 sebagai tanda jadi (pelunasan
                saat pengantaran paket).
              </li>

              <li>
                Admin akan mengirimkan dokumentasi pemotongan hewan aqiqah.
              </li>

              <li>
                Paket aqiqah akan diantar ke alamat yang telah ditentukan.
              </li>

              <li>Pembayaran penuh dilakukan saat pengantaran paket aqiqah.</li>
            </ul>

            <div>
              <Button>
                <FaWhatsapp className="size-5 mr-1" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Orders;
