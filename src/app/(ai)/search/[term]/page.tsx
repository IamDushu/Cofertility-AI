import DonorCard from "@/src/components/DonorCard";
import db from "@/db";
import { SimilarDonor } from "@/types";
import { getFiltersFromSearchTerm } from "@/lib/openaiHelpers";

interface SearchPageProps {
  params: Promise<{
    term: string;
  }>;
}

// refresh cache every 24 hours
export const revalidate = 86400;

async function SearchTerm({ params }: SearchPageProps) {
  const { term } = await params;

  const donors = db.collection("donors");

  const filters = await getFiltersFromSearchTerm(term);
  let cleanedfilters;
  if (filters) {
    cleanedfilters = processFilters(filters);
  }

  console.log("Generated Filters: ", cleanedfilters);
  console.log("Generated Filters: ", filters);

  const similarDonors = (await donors
    .find(cleanedfilters || {}, {
      vectorize: decodeURIComponent(term).toLowerCase(),
      limit: 10,
      // Do not include vectors in the output.
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
      includeSimilarity: true,
    })
    .toArray()) as SimilarDonor[];

  return (
    <div className="flex flex-col items-center justify-center px-10 sm:px-50">
      <h1 className="mb-10 text-lg font-sans">
        {similarDonors.length
          ? "Top matches based on your search: "
          : "No matches found for: "}
        <span className="font-main">{decodeURIComponent(term)}</span>
      </h1>

      <div className="flex items-center justify-center pb-24">
        {similarDonors.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {similarDonors.map((donor) => (
              <DonorCard
                key={donor._id}
                donor={donor}
                similarityRating={Number((donor.$similarity * 100).toFixed(1))}
              />
            ))}
          </div>
        ) : (
          <video
            width="400"
            height="240"
            autoPlay
            preload="auto"
            loop
            className="rounded-4xl border-dashed border-2"
          >
            <source src="/noMatch.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

function processFilters(parsedFilters: Record<string, string | null>) {
  const numberFields = [
    "artistic_ability",
    "athletic_ability",
    "mathematical_ability",
    "scientific_ability",
    "singing_ability",
    "height_ft",
    "height_in",
  ];

  const cleanFilters = Object.fromEntries(
    Object.entries(parsedFilters)
      .filter(([, v]) => v !== null && v !== "0" && v !== "")
      .map(([key, value]) => [
        key,
        numberFields.includes(key) ? Number(value) : value,
      ])
  );

  return cleanFilters;
}

export default SearchTerm;
