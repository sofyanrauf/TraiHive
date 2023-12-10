import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="max-w-full bg-emerald-100 sticky top-0 left-0 text-emerald-950 px-[120px] z-50">
      <div className="m-auto max-w-[1200px] h-[75px] flex items-center justify-between px-6">
        <div>
          <Image src="/brand.png" alt="Company Logo" width="108" height="0" />
        </div>
        <ul className="hidden md:flex gap-12 font-semibold text-[20px]">
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="/about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="/Service">Services</a>
          </li>
          <li className="cursor-pointer">
            <a href="/Teams">Teams</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
