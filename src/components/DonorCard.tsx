import { Donor, SimilarDonor } from "@/types";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

function DonorCard({
  index,
  similarityRating,
  donor,
}: {
  index?: number;
  similarityRating?: number;
  donor: Donor | SimilarDonor;
}) {
  return (
    <Link key={donor._id} href={`/donor/${donor._id}`} target="_blank">
      <div className="hover:scale-95 transition">
        <div className="relative flex justify-center ">
          <ImageWithFallback
            className="w-full rounded-lg aspect-square object-cover cursor-pointer"
            src={donor.user_image}
            alt={donor.user}
          />

          {similarityRating && (
            <div className="absolute w-14 h-14 flex items-center justify-center -bottom-4 -right-4 bg-orange-300 bg-opacity-90 p-2 rounded-full m-5 font-bold text-sm">
              {similarityRating}%
            </div>
          )}

          {index && (
            <div className="absolute text-gray-100 top-32 -left-10 text-9xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {index}
            </div>
          )}
        </div>

        <div className="py-2 px-2">
          <p className="text-lg font-semibold line-clamp-1 w-64 font-main">
            {donor.donorCode}
          </p>
          <p className="font-sans font-medium text-sm">{donor.job_title}</p>
          <p className="text-gray-500 text-sm line-clamp-5">
            {donor.profile_bio}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DonorCard;
