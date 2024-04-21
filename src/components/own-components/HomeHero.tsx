import React from "react";
import HeroBgImage from "../../assets/hero-bg.png";

function HomeHero() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  return (
    <section
      className="w-full h-[270px] max-sm:h-[250px] rounded-[20px] max-sm:rounded p-8 max-sm:p-5 flex flex-col justify-between items-end bg-left-bottom bg-cover shadow shadow-black/60"
      style={{ backgroundImage: `url(${HeroBgImage.src})` }}
    >
      <h2 className="py-2 px-3 bg-white/15 rounded text-xl max-sm:text-[16px]">
        Upcoming Meeting at: 12:30 PM
      </h2>
      <div className="flex flex-col flex-end">
        <h1 className="text-5xl font-bold max-sm:text-4xl ">{time}</h1>
        <p className="text-[21px] mt-2 max-sm:text-[15px] max-sm:mt-0">
          {date}
        </p>
      </div>
    </section>
  );
}

export default HomeHero;
