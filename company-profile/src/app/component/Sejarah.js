import Image from "next/image";

const Sejarah = () => {
  return (
    <div className="max-w-full h-[900px] justify-items-center bg-emerald-950 text-emerald-100 px-[120px] py-[60px]">
      <div className="h-[446px] grid sm:grid-cols-1 md:grid-cols-2 sm:justify-items-center sm:items-center py-[100px] gap-[80px] ">
        <div className="flex flex-col gap-[24px] w-[620px] max-w-[620px] sm:col-span-2 md:col-span-1">
          <h1 className="font-bold text-[75px]">History</h1>
          <p className="text-sm text-justify">
            In 2015, a hiking enthusiast who also has a background in technology
            began to experience difficulties in finding complete information
            about the hiking trails he wanted to explore. The limited
            accessibility of comprehensive information was the trigger for the
            founder to start the application development journey which
            eventually became TrailHive. Seeing this gap, he decided to combine
            his expertise in technology with his love of the outdoors to create
            a solution that makes it easier for nature lovers to find the best
            trails.
          </p>
          <p className="text-sm text-justify">
            With a passion for providing a superior experience to users,
            TrailHive focuses on two main things: accuracy of information and
            ease of use. By combining detailed data on hiking and cycling routes
            with a user-friendly interface, the app quickly gained widespread
            attention in the outdoor activities industry. The excellence in
            providing accurate and easily accessible information makes TrailHive
            one of the most reliable applications for adventurers.
          </p>
          <p className="text-sm text-justify">
            Over time, a continued focus on superior user experience and a
            commitment to improving the information available has seen TrailHive
            grow rapidly. From its initial commitment to meeting the needs of
            nature lovers, TrailHive has become not just an app, but also a
            tightly connected community, inspiring users to explore nature with
            more confidence and experience natures beauty more deeply.
          </p>
        </div>

        <div className="rounded-[20px] sm:col-span-2 md:col-span-1">
          <Image
            src="/about2.png"
            width="653"
            height="623"
            alt="Foto"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
