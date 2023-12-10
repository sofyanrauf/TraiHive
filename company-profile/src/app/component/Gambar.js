import Image from "next/image";

const Gambar = () => {
  return (
    <section className="max-w-full h-[940px] justify-items-center sm:items-center px-[20px] py-[20px] text-emerald-950 bg-emerald-100 rounded-lg">
      <div className="max-w-full h-[856px] grid pt-[40px] justify-items-center items-center ">
        <h1 className="w-[768px] h-[116px] font-bold text-[48px] mb-[40px] text-center">
          Find new trails to explore and adventures to embark on.
        </h1>
        <div className="rounded-[20px] sm:col-span-2 md:col-span-1">
          <Image
            src="/gambarbesar.png"
            width="1400"
            height="700"
            alt="Foto"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Gambar;
