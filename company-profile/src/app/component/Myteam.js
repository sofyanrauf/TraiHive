import Image from "next/image";
import getData from "../fetch/getData";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default async function Team() {
  const data = await getData();
  const position = [
    "Chief Executive Officer",
    "Design Director",
    "Operational Director",
    "Interior Design Expert",
    "Project Manager",
    "Architectural Technologist",
    "Conceptual Artist",
    "Sustainability Specialist",
    "Project Coordinator",
  ];

  return (
    <>
      <div className=" bg-emerald-100 text-emerald-950">
        <div className="max-w-6xl mx-auto text-center  bg-emerald-100">
          <p className="md:text-4xl sm:text-2xl text-base text-emerald-950 font-bold capitalize text-center ">
            Meet Our Team
          </p>
          <p className="md:text-base sm:text-xs text-xs font-semibold text-slate-900 md:mx-3 sm:mx-2 mx-1 text-center">
            At Arkadia Works, our diverse and skilled team is the driving force
            behind our creative endeavors. Committed to excellence and
            innovation, each member brings a unique set of talents to the table.
            Get to know the faces behind our projects.
          </p>
        </div>
        <div className="max-w-6xl m-auto h-[600px] ">
          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-6 content-center px-10">
            {data.slice(0, 9).map((teams, i) => {
              return (
                <div
                  className="flex flex-col items-center rounded-xl shadow-md shadow-slate-800 mx-2"
                  key={teams.id.value}
                >
                  <Image
                    src={teams.picture.large}
                    width={100}
                    height={100}
                    className="py-3 rounded-3xl"
                    alt="Deskripsi Gambar"
                  />
                  <p className="font-bold text-lg text-sky-950">
                    {teams.name.first} {teams.name.last}
                  </p>
                  <p className="text-center text-base">{position[i]}</p>
                  <div className="flex flex-row justify-center items-center">
                    <MdEmail />
                    <p className="text-center text-[14px] px-1">
                      {teams.email}
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center pb-3">
                    <FaPhone />
                    <p className="text-center text-[14px] px-1">
                      {teams.phone}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
