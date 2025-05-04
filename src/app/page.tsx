import DonorCard from "@/src/components/DonorCard";
import db from "@/db";
import { Donor } from "@/types";

// refresh cache every 24 hours
export const revalidate = 60 * 60 * 24;

export default async function Home() {
  const donors = db.collection("donor");

  const allDonors = (await donors
    .find(
      {},
      {
        // this is how you exclude out the vector fields from the results
        // projection: { $vector: 0 },
      }
    )
    .toArray()) as Donor[];

  return (
    <div className="flex items-center justify-center pb-24 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {allDonors.map((donor) => (
          <DonorCard key={donor._id} donor={donor} />
        ))}
      </div>
    </div>
  );
}
