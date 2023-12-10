import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-emerald-100 text-emerald-950 ax-w-full h-[800px] px-[300px] py-[60px]">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] bg-emerald-950 text-emerald-100 "
          data-jos_animation="fade-left"
          data-jos_delay="0.1"
        >
          <div class="block"></div>
          <p>
            “This AI SaaS tool has revolutionized the way we process and analyze
            data. This is a game-changer for our business.”
          </p>
          <div class="flex items-center gap-x-4">
            <div class="h-[60px] w-[60px] overflow-hidden rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#E59600"
                  d="M99.54 63.98h-71.1c-7.67 0-13.94 6.68-13.94 14.85s6.27 14.85 13.94 14.85h71.11c7.67 0 13.94-6.68 13.94-14.85s-6.28-14.85-13.95-14.85z"
                />
                <path
                  fill="#FFCA28"
                  d="M64 12.39c-22.64 0-43.61 24.21-43.61 59.06c0 34.66 21.61 51.79 43.61 51.79s43.61-17.13 43.61-51.79c0-34.84-20.97-59.06-43.61-59.06z"
                />
                <g fill="#404040">
                  <ellipse cx="42.62" cy="74.51" rx="6.41" ry="6.64" />
                  <ellipse cx="85.38" cy="74.51" rx="6.41" ry="6.64" />
                </g>
                <path
                  fill="#E59600"
                  d="M69.02 86.53a1.63 1.63 0 0 0-.42-.11h-9.2c-.14.02-.28.05-.42.11c-.83.34-1.29 1.2-.9 2.12c.4.92 2.23 3.5 5.92 3.5s5.52-2.58 5.92-3.5c.39-.91-.07-1.78-.9-2.12z"
                />
                <path
                  fill="#795548"
                  d="M74.95 96.95c-4.14 2.46-17.73 2.46-21.87 0c-2.38-1.42-4.81.75-3.82 2.91c.97 2.13 8.38 7.06 14.79 7.06s13.73-4.93 14.7-7.06c.98-2.16-1.42-4.32-3.8-2.91z"
                />
                <path
                  fill="#543930"
                  d="M64 4.6h-.04c-57.44.31-45.67 65.91-45.67 65.91s2.58 6.77 3.75 9.75c.17.43.79.38.89-.07c1.23-5.49 5.64-24.94 7.87-30.85c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.22 5.89 6.6 25.23 7.84 30.8c.1.45.73.5.9.07l3.77-9.69C109.68 70.51 121.45 4.91 64 4.6z"
                />
                <radialGradient
                  id="notoMan0"
                  cx="63.984"
                  cy="68.951"
                  r="48.156"
                  gradientTransform="matrix(1 0 0 -1.1282 0 136.838)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".794" stop-color="#6D4C41" stop-opacity="0" />
                  <stop offset="1" stop-color="#6D4C41" />
                </radialGradient>
                <path
                  fill="url(#notoMan0)"
                  d="M109.68 70.51S121.45 4.9 64 4.6h-.04c-.89.01-1.77.03-2.63.06c-1.71.07-3.36.2-4.95.39c-.02 0-.03 0-.05.01c-.11.01-.21.03-.33.05c-48.35 6.08-37.71 65.4-37.71 65.4l3.76 9.7c.17.43.79.39.89-.06c1.24-5.54 5.64-24.91 7.86-30.81c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.23 5.92 6.64 25.41 7.86 30.87c.1.45.72.5.88.07c1.17-2.97 3.76-9.77 3.76-9.77z"
                />
                <path
                  fill="#6D4C41"
                  d="M95.18 64.04c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.86-.19c4.11-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.86.19c1.12 0 2.04-.91 2.04-2.04c-.01-.45-.16-.86-.4-1.19zm-42.71 0c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.85-.19c4.12-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.85.19c1.12 0 2.04-.91 2.04-2.04c.01-.45-.14-.86-.38-1.19z"
                />
              </svg>
            </div>
            <div class="flex flex-col gap-y-1">
              <span class="block text-lg font-semibold leading-[1.6]">
                Max Weber
              </span>
              <span class="block text-sm font-light leading-[1.4]">
                HR Manager
              </span>
            </div>
          </div>
        </div>

        <div
          class="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px]  bg-emerald-950 text-emerald-100 "
          data-jos_animation="fade-left"
          data-jos_delay="0.2"
        >
          <p>
            It answers immediately, and weve seen a significant reduction in
            response time. Our customers love it and so do we!
          </p>
          <div class="flex items-center gap-x-4">
            <div class="h-[60px] w-[60px] overflow-hidden rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#E59600"
                  d="M99.54 63.98h-71.1c-7.67 0-13.94 6.68-13.94 14.85s6.27 14.85 13.94 14.85h71.11c7.67 0 13.94-6.68 13.94-14.85s-6.28-14.85-13.95-14.85z"
                />
                <path
                  fill="#FFCA28"
                  d="M64 12.39c-22.64 0-43.61 24.21-43.61 59.06c0 34.66 21.61 51.79 43.61 51.79s43.61-17.13 43.61-51.79c0-34.84-20.97-59.06-43.61-59.06z"
                />
                <g fill="#404040">
                  <ellipse cx="42.62" cy="74.51" rx="6.41" ry="6.64" />
                  <ellipse cx="85.38" cy="74.51" rx="6.41" ry="6.64" />
                </g>
                <path
                  fill="#E59600"
                  d="M69.02 86.53a1.63 1.63 0 0 0-.42-.11h-9.2c-.14.02-.28.05-.42.11c-.83.34-1.29 1.2-.9 2.12c.4.92 2.23 3.5 5.92 3.5s5.52-2.58 5.92-3.5c.39-.91-.07-1.78-.9-2.12z"
                />
                <path
                  fill="#795548"
                  d="M74.95 96.95c-4.14 2.46-17.73 2.46-21.87 0c-2.38-1.42-4.81.75-3.82 2.91c.97 2.13 8.38 7.06 14.79 7.06s13.73-4.93 14.7-7.06c.98-2.16-1.42-4.32-3.8-2.91z"
                />
                <path
                  fill="#543930"
                  d="M64 4.6h-.04c-57.44.31-45.67 65.91-45.67 65.91s2.58 6.77 3.75 9.75c.17.43.79.38.89-.07c1.23-5.49 5.64-24.94 7.87-30.85c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.22 5.89 6.6 25.23 7.84 30.8c.1.45.73.5.9.07l3.77-9.69C109.68 70.51 121.45 4.91 64 4.6z"
                />
                <radialGradient
                  id="notoMan0"
                  cx="63.984"
                  cy="68.951"
                  r="48.156"
                  gradientTransform="matrix(1 0 0 -1.1282 0 136.838)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".794" stop-color="#6D4C41" stop-opacity="0" />
                  <stop offset="1" stop-color="#6D4C41" />
                </radialGradient>
                <path
                  fill="url(#notoMan0)"
                  d="M109.68 70.51S121.45 4.9 64 4.6h-.04c-.89.01-1.77.03-2.63.06c-1.71.07-3.36.2-4.95.39c-.02 0-.03 0-.05.01c-.11.01-.21.03-.33.05c-48.35 6.08-37.71 65.4-37.71 65.4l3.76 9.7c.17.43.79.39.89-.06c1.24-5.54 5.64-24.91 7.86-30.81c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.23 5.92 6.64 25.41 7.86 30.87c.1.45.72.5.88.07c1.17-2.97 3.76-9.77 3.76-9.77z"
                />
                <path
                  fill="#6D4C41"
                  d="M95.18 64.04c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.86-.19c4.11-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.86.19c1.12 0 2.04-.91 2.04-2.04c-.01-.45-.16-.86-.4-1.19zm-42.71 0c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.85-.19c4.12-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.85.19c1.12 0 2.04-.91 2.04-2.04c.01-.45-.14-.86-.38-1.19z"
                />
              </svg>
            </div>
            <div class="flex flex-col gap-y-1">
              <span class="block text-lg font-semibold leading-[1.6]">
                Douglas Smith
              </span>
              <span class="block text-sm font-light leading-[1.4]">
                Businessman
              </span>
            </div>
          </div>
        </div>

        <div
          class="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] bg-emerald-950 text-emerald-100"
          data-jos_animation="fade-left"
          data-jos_delay="0.3"
        >
          <p>
            It is accurate, fast and supports multiple languages support. It is
            a must for any international business success.
          </p>
          <div class="flex items-center gap-x-4">
            <div class="h-[60px] w-[60px] overflow-hidden rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#E59600"
                  d="M99.54 63.98h-71.1c-7.67 0-13.94 6.68-13.94 14.85s6.27 14.85 13.94 14.85h71.11c7.67 0 13.94-6.68 13.94-14.85s-6.28-14.85-13.95-14.85z"
                />
                <path
                  fill="#FFCA28"
                  d="M64 12.39c-22.64 0-43.61 24.21-43.61 59.06c0 34.66 21.61 51.79 43.61 51.79s43.61-17.13 43.61-51.79c0-34.84-20.97-59.06-43.61-59.06z"
                />
                <g fill="#404040">
                  <ellipse cx="42.62" cy="74.51" rx="6.41" ry="6.64" />
                  <ellipse cx="85.38" cy="74.51" rx="6.41" ry="6.64" />
                </g>
                <path
                  fill="#E59600"
                  d="M69.02 86.53a1.63 1.63 0 0 0-.42-.11h-9.2c-.14.02-.28.05-.42.11c-.83.34-1.29 1.2-.9 2.12c.4.92 2.23 3.5 5.92 3.5s5.52-2.58 5.92-3.5c.39-.91-.07-1.78-.9-2.12z"
                />
                <path
                  fill="#795548"
                  d="M74.95 96.95c-4.14 2.46-17.73 2.46-21.87 0c-2.38-1.42-4.81.75-3.82 2.91c.97 2.13 8.38 7.06 14.79 7.06s13.73-4.93 14.7-7.06c.98-2.16-1.42-4.32-3.8-2.91z"
                />
                <path
                  fill="#543930"
                  d="M64 4.6h-.04c-57.44.31-45.67 65.91-45.67 65.91s2.58 6.77 3.75 9.75c.17.43.79.38.89-.07c1.23-5.49 5.64-24.94 7.87-30.85c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.22 5.89 6.6 25.23 7.84 30.8c.1.45.73.5.9.07l3.77-9.69C109.68 70.51 121.45 4.91 64 4.6z"
                />
                <radialGradient
                  id="notoMan0"
                  cx="63.984"
                  cy="68.951"
                  r="48.156"
                  gradientTransform="matrix(1 0 0 -1.1282 0 136.838)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".794" stop-color="#6D4C41" stop-opacity="0" />
                  <stop offset="1" stop-color="#6D4C41" />
                </radialGradient>
                <path
                  fill="url(#notoMan0)"
                  d="M109.68 70.51S121.45 4.9 64 4.6h-.04c-.89.01-1.77.03-2.63.06c-1.71.07-3.36.2-4.95.39c-.02 0-.03 0-.05.01c-.11.01-.21.03-.33.05c-48.35 6.08-37.71 65.4-37.71 65.4l3.76 9.7c.17.43.79.39.89-.06c1.24-5.54 5.64-24.91 7.86-30.81c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.23 5.92 6.64 25.41 7.86 30.87c.1.45.72.5.88.07c1.17-2.97 3.76-9.77 3.76-9.77z"
                />
                <path
                  fill="#6D4C41"
                  d="M95.18 64.04c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.86-.19c4.11-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.86.19c1.12 0 2.04-.91 2.04-2.04c-.01-.45-.16-.86-.4-1.19zm-42.71 0c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.85-.19c4.12-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.85.19c1.12 0 2.04-.91 2.04-2.04c.01-.45-.14-.86-.38-1.19z"
                />
              </svg>
            </div>
            <div class="flex flex-col gap-y-1">
              <span class="block text-lg font-semibold leading-[1.6]">
                Abraham Maslo
              </span>
              <span class="block text-sm font-light leading-[1.4]">
                Founder @ Marketing Company
              </span>
            </div>
          </div>
        </div>

        <div
          class="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] bg-emerald-950 text-emerald-100"
          data-jos_animation="fade-right"
          data-jos_delay="0.1"
        >
          <p>
            Security is a top concern for us, and AI SaaS takes it seriously.
            Its a reassuring layer of protection for our organization.
          </p>
          <div class="flex items-center gap-x-4">
            <div class="flex flex-col gap-y-1">
              <span class="block text-lg font-semibold leading-[1.6]">
                Jack Fayol
              </span>
              <span class="block text-sm font-light leading-[1.4]">
                HR Manager
              </span>
            </div>
          </div>
        </div>

        <div
          class="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] bg-emerald-950 text-emerald-100"
          data-jos_animation="fade-right"
          data-jos_delay="0.2"
        >
          <p>
            We were concerned about integrating their APIs were well documented,
            and their support team was super cool.
          </p>
          <div class="flex items-center gap-x-4">
            <div class="h-[60px] w-[60px] overflow-hidden rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#543930"
                  d="M64.74 4.12c-53.26 0-52.84 49.25-52.84 50.03c0 21.44 1.11 48.82 5.71 69.85h92.79c4.6-21.04 5.7-48.41 5.7-69.84c-.01-.79 1.9-50.04-51.36-50.04z"
                />
                <path
                  fill="#FFCA28"
                  d="M64 19.6c-22.34 0-43.03 16.61-43.03 51.84c0 28.29 17.52 45.03 32.77 50.43c3.64 1.29 7.15 1.94 10.26 1.94c3.09 0 6.58-.64 10.2-1.91c15.27-5.37 32.83-22.12 32.83-50.45c0-35.24-20.69-51.85-43.03-51.85z"
                />
                <path
                  fill="#543930"
                  d="M18.95 120.91c.6 1.23 1.25 2.24 1.91 3.09h7.12c-.71-9.76-2.38-33.66-2.62-46.37c-.07-3.79-1.22-17.83 6.7-19.6C61.1 51.5 77.53 36.1 77.53 36.1c4.27 9.33 17.63 18.43 22.43 21.89c3.94 2.84 3.39 14.54 3.31 19.52L99.64 124h7.64c.68-.85 1.35-1.86 1.96-3.09c3.85-7.82 3.97-66.75 3.97-66.75s1.32-46.2-49.11-46.2s-49.31 46.2-49.31 46.2s.43 59.07 4.16 66.75z"
                />
                <radialGradient
                  id="notoWoman0"
                  cx="64.434"
                  cy="46.481"
                  r="64.666"
                  gradientTransform="matrix(1 0 0 -1.2135 0 137.928)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".794" stop-color="#6D4C41" stop-opacity="0" />
                  <stop offset="1" stop-color="#6D4C41" />
                </radialGradient>
                <path
                  fill="url(#notoWoman0)"
                  d="M64.74 4.12c-53.26 0-52.84 49.25-52.84 50.03c0 10.08.24 21.46.98 32.89l8.73-.02c-.07-3.79 2.58-27.23 10.5-29.01c29.04-6.53 45.47-21.93 45.47-21.93c4.27 9.33 17.63 18.43 22.43 21.89c3.94 2.84 5.55 24.09 5.47 29.07h9.61l.03-.2c.72-11.36.97-22.68.97-32.69c0-.78 1.91-50.03-51.35-50.03z"
                />
                <path
                  fill="#E59600"
                  d="M68.95 87.16c-.14-.06-.27-.09-.41-.11h-9.08c-.14.02-.28.05-.41.11c-.82.33-1.28 1.19-.89 2.09c.39.91 2.2 3.46 5.84 3.46s5.45-2.55 5.84-3.46s-.07-1.76-.89-2.09z"
                />
                <g fill="#404040">
                  <ellipse cx="42.9" cy="75.23" rx="6.32" ry="6.55" />
                  <ellipse cx="85.1" cy="75.23" rx="6.32" ry="6.55" />
                </g>
                <path
                  fill="#6D4C41"
                  d="M52.29 63.47c-1.2-1.59-3.99-3.91-9.39-3.91s-8.19 2.32-9.39 3.91c-.53.71-.4 1.52-.03 2.01c.34.46 1.35.88 2.47.5s3.3-1.51 6.95-1.53c3.65.03 5.84 1.15 6.95 1.53c1.12.38 2.13-.04 2.47-.5c.37-.49.5-1.3-.03-2.01zm42.21 0c-1.2-1.59-3.99-3.91-9.39-3.91s-8.19 2.32-9.39 3.91c-.53.71-.4 1.52-.03 2.01c.34.46 1.35.88 2.47.5s3.3-1.51 6.95-1.53c3.65.03 5.84 1.15 6.95 1.53c1.12.38 2.13-.04 2.47-.5c.36-.49.5-1.3-.03-2.01z"
                />
                <path
                  fill="#795548"
                  d="M74.8 97.66c-4.09 2.43-17.49 2.43-21.58 0c-2.35-1.4-4.75.74-3.77 2.87c.96 2.1 8.27 6.96 14.59 6.96s13.54-4.86 14.5-6.96c.98-2.14-1.39-4.27-3.74-2.87z"
                />
                <radialGradient
                  id="notoWoman1"
                  cx="64.001"
                  cy="51.437"
                  r="61.833"
                  gradientTransform="matrix(1 0 0 -1.1901 0 137.775)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".794" stop-color="#6D4C41" stop-opacity="0" />
                  <stop offset="1" stop-color="#6D4C41" />
                </radialGradient>
                <path
                  fill="url(#notoWoman1)"
                  d="M110.55 123.91c4.53-21.01 5.62-48.2 5.62-69.52c0-.78 1.92-50.11-51.43-50.11S11.82 53.61 11.82 54.39c0 21.32 1.09 48.51 5.62 69.52h93.11z"
                />
              </svg>
            </div>
            <div class="flex flex-col gap-y-1">
              <span class="block text-lg font-semibold leading-[1.6]">
                Karen Lynn
              </span>
              <span class="block text-sm font-light leading-[1.4]">
                Software Engineer
              </span>
            </div>
          </div>
        </div>

        <div
          class="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] bg-emerald-950 text-emerald-100"
          data-jos_animation="fade-right"
          data-jos_delay="0.3"
        >
          <div class="block">
            <p>
              The return on investment has exceeded our expectations. its an
              investment in the future of our business.
            </p>
            <div class="flex items-center gap-x-4">
              <div class="h-[60px] w-[60px] overflow-hidden rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#E59600"
                    d="M99.54 63.98h-71.1c-7.67 0-13.94 6.68-13.94 14.85s6.27 14.85 13.94 14.85h71.11c7.67 0 13.94-6.68 13.94-14.85s-6.28-14.85-13.95-14.85z"
                  />
                  <path
                    fill="#FFCA28"
                    d="M64 12.39c-22.64 0-43.61 24.21-43.61 59.06c0 34.66 21.61 51.79 43.61 51.79s43.61-17.13 43.61-51.79c0-34.84-20.97-59.06-43.61-59.06z"
                  />
                  <g fill="#404040">
                    <ellipse cx="42.62" cy="74.51" rx="6.41" ry="6.64" />
                    <ellipse cx="85.38" cy="74.51" rx="6.41" ry="6.64" />
                  </g>
                  <path
                    fill="#E59600"
                    d="M69.02 86.53a1.63 1.63 0 0 0-.42-.11h-9.2c-.14.02-.28.05-.42.11c-.83.34-1.29 1.2-.9 2.12c.4.92 2.23 3.5 5.92 3.5s5.52-2.58 5.92-3.5c.39-.91-.07-1.78-.9-2.12z"
                  />
                  <path
                    fill="#795548"
                    d="M74.95 96.95c-4.14 2.46-17.73 2.46-21.87 0c-2.38-1.42-4.81.75-3.82 2.91c.97 2.13 8.38 7.06 14.79 7.06s13.73-4.93 14.7-7.06c.98-2.16-1.42-4.32-3.8-2.91z"
                  />
                  <path
                    fill="#543930"
                    d="M64 4.6h-.04c-57.44.31-45.67 65.91-45.67 65.91s2.58 6.77 3.75 9.75c.17.43.79.38.89-.07c1.23-5.49 5.64-24.94 7.87-30.85c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.22 5.89 6.6 25.23 7.84 30.8c.1.45.73.5.9.07l3.77-9.69C109.68 70.51 121.45 4.91 64 4.6z"
                  />
                  <radialGradient
                    id="notoMan0"
                    cx="63.984"
                    cy="68.951"
                    r="48.156"
                    gradientTransform="matrix(1 0 0 -1.1282 0 136.838)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".794" stop-color="#6D4C41" stop-opacity="0" />
                    <stop offset="1" stop-color="#6D4C41" />
                  </radialGradient>
                  <path
                    fill="url(#notoMan0)"
                    d="M109.68 70.51S121.45 4.9 64 4.6h-.04c-.89.01-1.77.03-2.63.06c-1.71.07-3.36.2-4.95.39c-.02 0-.03 0-.05.01c-.11.01-.21.03-.33.05c-48.35 6.08-37.71 65.4-37.71 65.4l3.76 9.7c.17.43.79.39.89-.06c1.24-5.54 5.64-24.91 7.86-30.81c1.31-3.49 4.93-5.51 8.59-4.85c5.63 1.02 14.6 2.28 24.49 2.28h.22c9.89 0 18.86-1.26 24.49-2.28c3.66-.66 7.28 1.36 8.59 4.85c2.23 5.92 6.64 25.41 7.86 30.87c.1.45.72.5.88.07c1.17-2.97 3.76-9.77 3.76-9.77z"
                  />
                  <path
                    fill="#6D4C41"
                    d="M95.18 64.04c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.86-.19c4.11-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.86.19c1.12 0 2.04-.91 2.04-2.04c-.01-.45-.16-.86-.4-1.19zm-42.71 0c.01-.01-2.96-4.67-9.83-4.67s-9.84 4.66-9.84 4.66l.01.01c-.24.33-.39.74-.39 1.19c0 1.12.91 2.04 2.04 2.04c.23 0 .8-.17.85-.19c4.12-1.7 7.34-1.71 7.34-1.71s3.2.01 7.31 1.71c.05.02.62.19.85.19c1.12 0 2.04-.91 2.04-2.04c.01-.45-.14-.86-.38-1.19z"
                  />
                </svg>
              </div>
              <div class="flex flex-col gap-y-1">
                <span class="block text-lg font-semibold leading-[1.6]">
                  Henry Ochi
                </span>
                <span class="block text-sm font-light leading-[1.4]">
                  Bank Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
