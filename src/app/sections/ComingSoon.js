import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  const text = "Coming Soon...";

  return (
    <div className="w-screen h-screen header flex flex-col xl:flex-row items-center  text-white relative overflow-x-hidden">
      <div className="absolute top-10 left-6 xl:left-16 z-50 flex gap-5 w-[90%] xl:max-w-[50%] items-center overflow-x-hidden">
        <div className="w-16 xl:w-24 h-16 xl:h-24 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
          {/* replace with <Image .../> if using next/image (supply width/height) */}
          <Image
            src="/images/logo.png"
            alt="Mr.Chai logo"
            className="w-12 h-12 xl:w-20  xl:h-20 mx-auto object-contain"
            width={100}
            loading="lazy"
            height={100}
          />
        </div>
        <h2 className="text-4xl xl:text-6xl font-bold">Mr.Chai</h2>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center bg-black min-h-[55vh] md:min-h-[50vh] xl:min-h-screen xl:bg-transparent xl:max-w-[50%] p-6 pt-32 xl:pt-40 xl:px-16 rounded-b-3xl">
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-4xl md:text-7xl xl:text-7xl font-bold">
            No clock needed. <br />
            It’s always time for chai
          </h1>
          <p>Behind every good day is a cup of chai</p>
        </div>
        <div className="mt-10">
          <h2 className="flex gap-1 text-2xl md:text-4xl xl:text-4xl font-bold">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className="jumping-letter inline-block"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>
      </div>
      <div className="w-full xl:max-w-[50%] flex items-center justify-end p-10 xl:px-16 overflow-x-hidden">
        <Image
          src="/images/tea.png"
          alt="Cup of tea"
          className="mx-auto xl:m-0 max-w-[500px] max-h-[500px]"
          width={500}
          height={500}
          loading="lazy"
        />
      </div>

      <style>{`
        @keyframes jump {
          0%, 20%, 100% { transform: translateY(0); }
          10% { transform: translateY(-12px); }
        }

        .jumping-letter {
          animation: jump 3s infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
