import Image from "next/image";

const Features = () => {
  return (
    <div className="items-center align-top justify-center max-w-full   bg-emerald-100 text-emerald-950 ">
      <div className=" row-justify-center text-center px-[120px] py-[60px] text-emerald-950 ">
        <p className="font-bold text-6xl mb-7"> Our Company </p>

        <hr className="border-solid border-emerald-950 short-line w-[128px] mx-auto"></hr>
      </div>

      <div className="md:flex justify-center pl-[120px] pb-11 sm:pl-0">
        <div className="grid  sm:ml-[80px] md:ml-[30px] sm:grid-cols-2 sm:content-center sm:gap-4 md:gap-11">
          <div className=" w-[350px]">
            <div className="px-[60px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15em"
                height="10em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12q0-2.925-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924q1.212 1.213 1.925 2.85T21 12q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 21Zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2l-1.4 1.4Z"
                />
              </svg>
            </div>
            <p className=" text-center font-semibold pb-8">History</p>
            <p className=" text-justify sm:text-sm md:text-base">
              TrailHives history began in 2015, when its founder, a hiking and
              technology enthusiast, found it difficult to find comprehensive
              information about the hiking trails he wanted to explore. From
              this need, he began developing an application which eventually
              became TrailHive. With a strong focus on user experience, accuracy
              of information, and ease of use, TrailHive has quickly become one
              of the leading apps in the outdoor industry.
            </p>
          </div>

          <div className=" w-[350px]">
            <div className="px-[60px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15em"
                height="10em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M18 11a6 6 0 1 1 12 0a6 6 0 0 1-12 0Zm19-4a5 5 0 1 0 0 10a5 5 0 0 0 0-10ZM11 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm8.25 12A4.25 4.25 0 0 0 15 23.25V34a9 9 0 1 0 18 0V23.25A4.25 4.25 0 0 0 28.75 19h-9.5ZM13 23.25c0-1.6.602-3.061 1.592-4.167A4.272 4.272 0 0 0 13.75 19h-5.5A4.25 4.25 0 0 0 4 23.25V33a7 7 0 0 0 10.293 6.179A10.951 10.951 0 0 1 13 34V23.25ZM35 34c0 1.872-.468 3.635-1.293 5.179A7 7 0 0 0 44 33v-9.75A4.25 4.25 0 0 0 39.75 19h-5.5c-.288 0-.57.029-.842.083A6.227 6.227 0 0 1 35 23.25V34Z"
                />
              </svg>
            </div>
            <p className=" text-center font-semibold pb-8">Team</p>
            <p className=" text-justify sm:text-sm md:text-base">
              The team behind TrailHive consists of software developers who are
              passionate about outdoor activities. They have diverse backgrounds
              in technology, design, and market research. Their combined
              expertise allows the company to continually develop new features,
              improve the quality of the app, and ensure users have the best
              experience exploring nature.
            </p>
          </div>
        </div>

        <div className=" sm:col-start-2  sm:col-end-4 sm:pt-11 md:pt-0   w-[350px] sm:ml-[250px] md:ml-11">
          <div className="px-[60px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15em"
              height="10em"
              viewBox="0 0 48 48"
            >
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M19.176 21.647a1 1 0 0 0-.33 1.376c.919 1.498 1.7 2.985 2.22 4.336a1 1 0 0 0 1.867-.718c-.578-1.504-1.426-3.105-2.382-4.664a1 1 0 0 0-1.375-.33Zm10.414-.954a1 1 0 0 1 .217 1.397c-1.157 1.583-2.176 3.7-2.893 5.316a1 1 0 1 1-1.828-.812c.724-1.63 1.814-3.916 3.107-5.684a1 1 0 0 1 1.397-.217Z" />
                <path d="M27.24 12.037C29.582 9.359 42.105 6 42.105 6s-2.129 13.395-4.002 15.537c-1.395 1.596-5.84.599-8.018-.014c1.628-2.497 3.515-4.936 5.174-6.872a1 1 0 0 0-1.518-1.302c-1.673 1.952-3.612 4.45-5.31 7.047c-.954-1.776-3.043-6.242-1.191-8.36ZM11 30H6v12h5v-2.043c1.02-.042 2.526-.096 3.047-.075c1.787.073 3.12.499 4.47.93c1.258.401 2.529.807 4.192.934c.418.032.825.073 1.22.112c1.423.144 2.686.272 3.73-.112c1.332-.49 8.946-4.217 9.898-5.198c.952-.98.476-3.628-2.475-3.138c-1.456.242-3.143.938-4.674 1.569c-1.571.647-2.977 1.227-3.797 1.177c-1.618-.098-5.9-.882-5.9-.882l4.917.06s.695.036 1.65-.649s1.808-2.648.38-2.648c-1.427 0-2.95-.49-2.95-.49l-6.092-1.373s-2.094-.392-2.95 0c-.706.323-3.648 1.377-4.666 1.74V30ZM8.878 9.67s10.335 2.772 12.267 4.981c1.493 1.707-.116 5.262-.926 6.792a58.114 58.114 0 0 0-3.434-4.829a1 1 0 1 0-1.57 1.239a56.058 56.058 0 0 1 3.336 4.695c-1.868.506-5.27 1.203-6.37-.056c-1.546-1.768-3.303-12.823-3.303-12.823Z" />
              </g>
            </svg>
          </div>
          <p className=" text-center font-semibold pb-8">Culture</p>
          <p className=" text-justify sm:text-sm md:text-base">
            TrailHives company culture is strongly driven by a spirit of
            adventure and a love of nature. They promote collaboration,
            innovation, and environmental stewardship. There is a strong focus
            on sustainability values, with efforts to ensure that their app not
            only facilitates outdoor adventures, but also educates users about
            the importance of preserving the natural environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
