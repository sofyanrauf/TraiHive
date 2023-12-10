import Image from "next/image";

const Top = () => {
  return (
    <section className="max-w-full h-[940px] justify-items-center sm:items-center px-[20px] py-[20px] text-emerald-950 bg-emerald-100 rounded-lg">
      <div className="max-w-full h-[856px] grid pt-[40px] justify-items-center items-center ">
        <h1 className="w-[768px] h-[116px] font-bold text-[48px] mb-[40px] text-center border-t-4 border-emerald-950 ">
          TOP Picks
        </h1>
        <h2>Loved by our custumers from 35+ cities</h2>
        <div className="rounded-[20px] sm:col-span-2 md:col-span-1">
          <Image
            src="/about3.png"
            width="1402"
            height="441"
            alt="Foto"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Top;
