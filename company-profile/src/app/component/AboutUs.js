import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="max-w-full h-[574px] justify-items-center bg-emerald-100 text-emerald-950 px-[120px] py-[60px]">
      <div className=" h-[446px] grid sm:grid-cols-1 md:grid-cols-2 sm:justify-items-center sm:items-center  gap-[80px]">
        <div className="flex flex-col gap-[24px] w-[620px] max-w-[620px] sm:col-span-2 md:col-span-1">
          <Image
            src="/about1.png"
            width="629"
            height="373"
            alt="Foto"
            className="w-full h-auto"
          />
        </div>

        <div className="rounded-[20px] sm:col-span-2 md:col-span-1">
          <h1 className="font-bold text-[45px]">Welcome to TrailHive!</h1>
          <p className="text-justify  text-[18px]">
            TrailHive is a technology company that focuses on developing
            applications for fans of outdoor activities, such as hiking and
            cycling. They have the tagline Your Ultimate Outdoor Companion which
            reflects their mission to be a loyal companion on your outdoor
            adventures. By providing easy access and complete information about
            the best hiking and cycling trails in various regions, TrailHive
            helps users find their ideal destination quickly and easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
