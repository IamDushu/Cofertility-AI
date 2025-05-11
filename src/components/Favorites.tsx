import LoveIcon from "@/public/Heart.svg";
import Image from "next/image";
import MovieIcon from "@/public/personality_movie.svg";
import FoodIcon from "@/public/personality_food.svg";
import BookIcon from "@/public/personality_book.svg";

export default function Favorites({
  movie,
  book,
  food,
}: {
  movie: string;
  book: string;
  food: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={LoveIcon}
          width={50}
          height={50}
          alt="Love Icon"
          className="-rotate-10"
        />
        <h3 className="text-2xl font-semibold leading-6 text-gray-900 font-main">
          My Favorites
        </h3>
      </div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg bg-white px-4  pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <Image src={MovieIcon} alt="movie" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Movie
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-sm text-gray-900">{movie}</p>
          </dd>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white px-4  pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <Image src={BookIcon} alt="movie" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Book
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-sm text-gray-900">{book}</p>
          </dd>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white px-4  pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <Image src={FoodIcon} alt="movie" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Food
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-sm text-gray-900">{food}</p>
          </dd>
        </div>
      </dl>
    </div>
  );
}
