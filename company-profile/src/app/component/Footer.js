import Image from "next/image";

const Footer = () => {
  return (
    <section className="max-w-full h-[528px] bg-emerald-950 text-emerald-100 justify-center item-center px-[120px] py-[80px] ">
      <div className="w-[1200px] h-[227px]  grid grid-cols-2 relative  ">
        <div className="w-[199px] h-[32px] flex gap-[40px]">
          <Image src="/brand2.png" alt="brand" width="155" height="20" />
        </div>
        <div className="w-[199px] h-[227px] ">
          <ul className=" md:flex gap-12 font-semibold text-[20px] absolute right-0">
            <li className="cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="/Service">Service</a>
            </li>
            <li className="cursor-pointer">
              <a href="/Teams">Teams</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1200px] h-[61px] grid-rows-2 relative mt-[40px] border-t-4 border-emerald-100">
        <div className="w-[968px] h-[29px]"></div>
        <div className="w-[968px] h-[29px] flex gap-[32px] relative">
          copyright SofyanRauf. All rights reserved
          <div className="w-[352px] h-[29px] flex text-center  gap-[32px]">
            <div className="w-[85px] h-[29px] text-[12px]">Privacy Policy </div>
            <div className="w-[101px] h-[29px] text-[12px]">
              Terms Of Service
            </div>
            <div className="w-[101px] h-[29px] text-[12px]">
              Cookies Settings
            </div>
          </div>
          <div className="w-[200px] h-[24px] flex gap-[12px] absolute right-0">
            <Image src="/1.png " alt="icon1" width="24" height="24" />
            <Image src="/2.png " alt="icon2" width="24" height="24" />
            <Image src="/3.png " alt="icon3" width="24" height="24" />
            <Image src="/4.png " alt="icon4" width="24" height="24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
