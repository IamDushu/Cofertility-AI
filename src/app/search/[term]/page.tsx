import DonorCard from "@/src/components/DonorCard";
import db from "@/db";
import { Donor } from "@/types";
// import { getFiltersFromSearchTerm } from "@/lib/openaiHelpers";

// refresh cache every 24 hours
export const revalidate = 60 * 60 * 24;

async function SearchTerm({
  params,
}: {
  params: {
    term: string;
  };
}) {
  const { term } = await params;
  const donors = db.collection("donor");

  // const filters = await getFiltersFromSearchTerm(term);
  // let cleanedfilters;
  // if (filters) {
  //   cleanedfilters = processFilters(filters);
  // }

  // console.log("Generated Filters: ", cleanedfilters);
  // console.log("Generated Filters: ", filters);

  const similarDonors = (await donors
    .find(
      { hair_type: "wavy", height_ft: { $gte: 5 }, height_in: { $gte: 5 } },
      {
        vectorize: term,
        limit: 10,
        // Do not include vectors in the output.
        projection: { $vector: 0 },
      }
    )
    .toArray()) as Donor[];

  return (
    <div className="flex flex-col items-center justify-center p-20 pt-10">
      <h1 className="mb-10 text-xl text-gray-100">
        Suggested results based on your search: {decodeURIComponent(term)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {similarDonors.map((donor, i) => (
          <div className="flex space-x-2 relative" key={donor._id}>
            <p className="absolute flex items-center justify-center left-4 top-2 text-white font-extrabold text-xl z-40 rounded-full bg-indigo-500/80 w-10 h-10">
              {i + 1}
            </p>

            <DonorCard key={donor._id} donor={donor} />
          </div>
        ))}
      </div>
    </div>
  );
}

// function processFilters(parsedFilters: Record<string, string | null>) {
//   const numberFields = [
//     "artistic_ability",
//     "athletic_ability",
//     "mathematical_ability",
//     "scientific_ability",
//     "singing_ability",
//     "height_ft",
//     "height_in",
//   ];

//   const cleanFilters = Object.fromEntries(
//     Object.entries(parsedFilters)
//       .filter(([, v]) => v !== null && v !== "0" && v !== "")
//       .map(([key, value]) => [
//         key,
//         numberFields.includes(key) ? Number(value) : value,
//       ])
//   );

//   return cleanFilters;
// }

export default SearchTerm;
