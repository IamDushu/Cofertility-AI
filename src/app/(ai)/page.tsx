import DonorCard from "@/src/components/DonorCard";
import db from "@/db";
import { Donor } from "@/types";

// refresh cache every 24 hours
export const revalidate = 60 * 60 * 24;

export default async function Home() {
  const donors = db.collection("donors");

  const allDonors = (await donors
    .find(
      {},
      {
        // this is how you exclude out the vector fields from the results
        projection: {
          $vector: false,
          $vectorize: false,
          artistic_ability: false,
          athletic_ability: false,
          mathematical_ability: false,
          scientific_ability: false,
          singing_ability: false,
          hair_type: false,
          hair_color: false,
          education_level: false,
          jewish_ancestry: false,
          height_ft: false,
          height_in: false,
          logical_creative: false,
          serious_silly: false,
          introvert_extrovert: false,
          relationship_preferences: false,
          passions: false,
          goals_in_life: false,
          greatest_strengths: false,
          perfect_day: false,
          dinner_party: false,
          motivation: false,
          message_to_ips: false,
          book: false,
          movie: false,
          food: false,
          allergies: false,
          dental_work: false,
          dimples: false,
          egg_retrieval: false,
          freckles: false,
          siblings: false,
          complexion: false,
          diet: false,
          dominant_hand: false,
          eye_color: false,
          hair_texture: false,
          marital_status: false,
          vision_quality: false,
          weight: false,
          age: false,
        },
      }
    )
    .toArray()) as Donor[];

  // console.log(allDonors);

  return (
    <div className="flex items-center justify-center pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10 sm:px-40">
        {allDonors.map((donor) => (
          <DonorCard key={donor._id} donor={donor} />
        ))}
      </div>
    </div>
  );
}
