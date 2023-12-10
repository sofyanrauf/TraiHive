import Image from "next/image";

const Services = () => {
  return (
    <div class=" max-w-full h-[940px] justify-items-center sm:items-center px-[120px] py-[60px]  rounded-lg mx-auto  text-emerald-100 bg-emerald-950 ">
      <h1 class="text-center text-6xl font-bold  pb-[50px] ">Our Service :</h1>

      <ul class="grid place-content-center sm:grid-cols-2 gap-8 px-[20px] py-[20px]">
        <li class="flex ">
          <div class="px-4 text-5xl font-extralight ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <circle cx="256" cy="56" r="56" fill="currentColor" />
              <path
                fill="currentColor"
                d="M336 128H176a32 32 0 0 0-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 0 0-32-32Z"
              />
            </svg>
          </div>
          <div>
            <div class="text-xl font-bold ">Guided Adventure Tours</div>
            <p class="max-w-xs py-2 text-sm t text-justify">
              Discover the thrill of outdoor exploration with our Guided
              Adventure Tours. Our experienced guides take you on exhilarating
              journeys through stunning landscapes, ensuring safety while
              unraveling the hidden gems of your chosen destination. Whether its
              hiking, kayaking, or mountain biking, embark on unforgettable
              adventures with us.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.5 17.5L14 14l3.5-7.5L10 10l-3.5 7.5ZM12 13q-.425 0-.712-.288T11 12q0-.425.288-.712T12 11q.425 0 .713.288T13 12q0 .425-.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </svg>
          </div>
          <div>
            <div class="text-xl font-bold ">Guided Adventure Tours</div>
            <p class="max-w-xs py-2 text-sm  text-justify">
              Seamlessly plan your outdoor escapades using Trail Explorer. This
              feature-rich service equips you with detailed trail maps,
              difficulty levels, and user reviews, allowing you to select the
              perfect route for your adventure. Customize your experience based
              on preferences and fitness levels, ensuring an enjoyable and
              personalized outdoor journey.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.621 4.515c.182-.728.273-1.091.544-1.303C5.437 3 5.812 3 6.562 3h10.876c.75 0 1.125 0 1.397.212c.27.212.362.575.544 1.303l1.203 4.814c.097.388.146.581.135.739a1 1 0 0 1-.69.883c-.15.049-.354.049-.763.049c-.533 0-.8 0-1.023-.052a2 2 0 0 1-1.393-1.18c-.089-.212-.132-.47-.217-.983c-.024-.144-.036-.216-.05-.235a.1.1 0 0 0-.162 0c-.014.019-.026.09-.05.235l-.081.489A2 2 0 0 1 14.352 11h-.204a2 2 0 0 1-1.936-1.726l-.081-.49c-.024-.143-.036-.215-.05-.234a.1.1 0 0 0-.162 0c-.014.019-.026.09-.05.235l-.081.489A2 2 0 0 1 9.852 11h-.204A2 2 0 0 1 7.73 9.374a1.386 1.386 0 0 1-.018-.1l-.081-.49c-.024-.143-.036-.215-.05-.234a.1.1 0 0 0-.162 0c-.014.019-.026.09-.05.235c-.085.514-.128.77-.217.983a2 2 0 0 1-1.392 1.18C5.536 11 5.27 11 4.736 11c-.409 0-.613 0-.763-.049a1 1 0 0 1-.69-.883c-.01-.158.038-.351.135-.739L4.62 4.515Z"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M5.017 12.5C5 12.921 5 13.415 5 14v6c0 .943 0 1.414.293 1.707C5.586 22 6.057 22 7 22h3v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h3c.943 0 1.414 0 1.707-.293C19 21.414 19 20.943 19 20v-6c0-.585 0-1.079-.017-1.5c-.365 0-.738-.011-1.083-.091a3.499 3.499 0 0 1-1.4-.682c-.584.47-1.32.754-2.113.772l-.126.001h-.148A3.493 3.493 0 0 1 12 11.726c-.584.47-1.32.754-2.113.772l-.126.001h-.148a3.493 3.493 0 0 1-2.113-.773c-.404.325-.88.56-1.4.682c-.345.08-.718.09-1.083.091Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <div class="text-xl font-bold ">Gear Rental Marketplace</div>
            <p class="max-w-xs py-2 text-sm  text-justify">
              Simplifying your outdoor gear needs, our Gear Rental Marketplace
              offers a vast array of high-quality equipment for rent. From
              camping gear to specialized outdoor gear like climbing equipment
              or water sports gear, easily browse, compare, and rent the right
              gear for your adventure. Enjoy your experience without worrying
              about owning the equipment.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M3 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm6.779 1.584l.042.032a2 2 0 1 0-.042-.032ZM6.268 6A2 2 0 1 1 9.73 7.998A2 2 0 0 1 6.268 6ZM2.5 6h2.67a3.013 3.013 0 0 0 .594 3H5.5a2.501 2.501 0 0 0-2.355 1.658a3.733 3.733 0 0 1-.933-.543C1.46 9.51 1 8.616 1 7.5A1.5 1.5 0 0 1 2.5 6Zm8 3c1.085 0 2.009.691 2.355 1.658c.34-.139.654-.32.933-.543C14.54 9.51 15 8.616 15 7.5A1.5 1.5 0 0 0 13.5 6h-2.67c.11.313.17.65.17 1a2.99 2.99 0 0 1-.764 2h.264Zm1.387 1.928c.073.176.113.37.113.572c0 1.116-.459 2.01-1.212 2.615C10.047 14.71 9.053 15 8 15c-1.053 0-2.047-.29-2.788-.885C4.46 13.51 4 12.616 4 11.5A1.496 1.496 0 0 1 5.5 10h5a1.5 1.5 0 0 1 1.387.928Z"
              />
            </svg>
          </div>
          <div>
            <div class="text-xl font-bold ">Community Events & Workshops</div>
            <p class="max-w-xs py-2 text-sm  text-justify">
              Simplifying your outdoor gear needs, our Gear Rental Marketplace
              offers a vast array of high-quality equipment for rent. From
              camping gear to specialized outdoor gear like climbing equipment
              or water sports gear, easily browse, compare, and rent the right
              gear for your adventure. Enjoy your experience without worrying
              about owning the equipment.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <defs>
                <mask id="ipSPlan0">
                  <g fill="none" stroke-width="4">
                    <path
                      fill="#fff"
                      stroke="#fff"
                      stroke-linejoin="round"
                      d="M5 19h38v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V19Z"
                    />
                    <path
                      stroke="#fff"
                      stroke-linejoin="round"
                      d="M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5v-9Z"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16 31l6 6l12-12"
                    />
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      d="M16 5v8m16-8v8"
                    />
                  </g>
                </mask>
              </defs>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSPlan0)"
              />
            </svg>
          </div>
          <div>
            <div class="text-xl font-bold ">
              Adventure Planning & Concierge Services
            </div>
            <p class="max-w-xs py-2 text-sm  text-justify">
              Leave the planning to us! Our Adventure Planning & Concierge
              Services cater to personalized trip planning, ensuring hassle-free
              adventures. Benefit from curated itineraries, accommodation
              suggestions, dining options, and transportation arrangements
              tailored to your preferences. Enjoy a seamless adventure planning
              experience from start to finish.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Services;
