import DonorCard from "@/src/components/DonorCard";
import db from "@/db";
import { Donor, SimilarDonor } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

// refresh cache every 24 hours
export const revalidate = 60 * 60 * 24;

async function DonorPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const donors = db.collection("donors");

  const search = await donors.find(
    { $and: [{ _id: id }] },
    { projection: { $vector: 1 } }
  );

  if (!(await search.hasNext())) {
    return notFound();
  }

  const donor = (await search.next()) as Donor;

  const similarDonors = (await donors
    .find({}, { vector: donor.$vector, limit: 6, includeSimilarity: true })
    .toArray()) as SimilarDonor[];
  // cut the first movie because it is the same as the movie we are looking for
  similarDonors.shift();

  return (
    <div className="px-50">
      <div className="flex flex-col md:flex-row items-center gap-y-10 p-10 pb-0">
        <Image
          src={donor.user_image}
          alt={donor.user}
          width={300}
          height={450}
          className="shrink-0 rounded-lg "
        />
        <div className="px-2 md:px-10 flex flex-col gap-y-2">
          <h1 className="text-6xl font-bold">{donor.user}</h1>
          <p className="text-gray-600">{donor.book}</p>
          <p className="font-light">{donor.book}</p>

          <div className="mt-auto grid grid-cols-2">
            <div className="font-semibold">
              <p>Books I like:</p>
              <p>Books I like:</p>
              <p>Books I like:</p>
              <p>Books I like:</p>
              <p>Books I like:</p>
              <p>Books I like:</p>
              <p>Books I like:</p>
              <p>Books I like:</p>
              <p>Books I like:</p>
            </div>
            <div>
              <p>{donor.book}</p>
              <p>{donor.artistic_ability}</p>
              <p>{donor.athletic_ability}</p>
              <p>{donor.book}</p>
              <p>{donor.book}</p>
              <p>{donor.book}</p>
              <p>{donor.book}</p>
              <p>{donor.book}</p>
              <p>{donor.book}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl pt-10 pl-10 font-bold ">
          Similar Donors you may like
        </h2>
        <div className="flex justify-between items-center lg:flex-row gap-x-20 gap-y-10 pl-20 pr-10 py-10 overflow-x-scroll">
          {similarDonors.map((donor, i) => {
            return (
              <DonorCard
                key={donor._id}
                index={i + 1}
                similarityRating={Number(donor.$similarity.toFixed(2)) * 100}
                donor={donor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DonorPage;
