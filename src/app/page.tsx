import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 lg:space-y-24 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 flex flex-col h-[95vh] w-screen bg-cyan-500"></div>

          <h1 className="text-2lg  font-bold md:text-4xl lg:text-7xl">
            Sonic Heroes
          </h1>

          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Soluta, dolores modi at a alias iusto esse quidem! 
            Quo libero laborum ex veritatis voluptatem, sequi nisi?
            Explicabo quidem dignissimos quasi! Aspernatur.
          </p>

        </div>
      </main>
    </div>
  );
}
