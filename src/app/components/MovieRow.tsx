import Image from "next/image";

const max = 9999
const randomNumber = () => Math.floor(Math.random() * max);


type MovieCardProps = {
  index: number
}

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    key={randomNumber()}
    className="
          group h-28 min-w-[200px] relative transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:scale-110 hover:z-50
          md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]
          "
  >
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt="hero"
      className="rounded" />
  </div>
)



type MovieRowProps = {
  sectionTitle: string
}

export const MovieRow = ({ sectionTitle }: MovieRowProps) => (
  <div className="flex flex-col space-y-4">
    <div className="flex ">
      <h2 className="inline-flex items-center text-2xl font-bold">
        {sectionTitle}
      </h2>
    </div>
    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide py-6">
      {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((index) => (
        <MovieCard key={index} index={index} />
      ))}

    </div>
  </div>
)
