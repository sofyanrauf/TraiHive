import Image from "next/image";

const Budaya = () => {
  return (
    <div className="max-w-full h-[900px] justify-items-center bg-emerald-100 text-emerald-950 px-[120px] py-[60px]">
      <div className=" h-[446px] grid sm:grid-cols-1 md:grid-cols-2 sm:justify-items-center sm:items-center py-[100px]  gap-[80px]">
        <div className="flex flex-col gap-[24px] rounded-[20px]  sm:col-span-2 md:col-span-1">
          <Image
            src="/about2.png"
            width="653"
            height="623"
            alt="Foto"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-[24px] w-[620px] max-w-[620px] sm:col-span-2 md:col-span-1">
          <h1 className="font-bold text-[75px] text-right">Culture</h1>
          <p className="text-sm text-justify">
            TrailHives underlying culture reflects the spirit of adventure that
            is at the heart of the companys existence. They not only create apps
            for outdoor activities, but also embrace and encourage the spirit of
            deep exploration of the outdoors. Love for nature is not only an
            inspiration, but also the basis for all the innovations they make.
            Collaboration is a key foundation in their culture, promoting solid
            teamwork to produce the best experience for users. Its not just
            about creating a product, but also building a tightly connected
            community.
          </p>
          <p className="text-sm text-justify">
            Inovasi adalah inti dari semua yang dilakukan oleh TrailHive. Mereka
            tidak hanya fokus pada pengembangan teknologi, tetapi juga pada
            cara-cara baru untuk memperkaya pengalaman pengguna dalam
            menjelajahi alam. Namun, sementara mereka berinovasi, perusahaan ini
            juga tetap memegang teguh nilai-nilai keberlanjutan. Mereka memiliki
            kesadaran yang mendalam tentang dampak aktivitas manusia terhadap
            lingkungan alam. Oleh karena itu, TrailHive berkomitmen untuk tidak
            hanya memberikan akses ke tempat-tempat alam yang menakjubkan,
            tetapi juga berupaya untuk mendidik penggunanya tentang pentingnya
            melestarikan dan merawat lingkungan.
          </p>
          <p className="text-sm text-justify ">
            Through their application, TrailHive not only provides information
            about hiking or cycling routes, but also invites users to
            participate in environmental awareness movements. They show that
            sustainability and care for nature are integral components of
            outdoor adventure. Thus, this company culture is not just about
            technological achievements, but also about empowering people to act
            as protectors of nature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Budaya;
