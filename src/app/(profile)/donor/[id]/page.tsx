// import DonorCard from "@/src/components/DonorCard";
import db from "@/db";
import { Donor, SimilarDonor } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  // Radio,
  // RadioGroup,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
// import DonorBackButton from "@/src/components/BackButton";
import { SimilarDonors } from "@/src/components/SimilarDonors";
import Favorites from "@/src/components/Favorites";
import Personality from "@/src/components/Personality";

interface DonorPageProps {
  params: Promise<{
    id: string;
  }>;
}

// refresh cache every 24 hours
export const revalidate = 86400;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

async function DonorPage({ params }: DonorPageProps) {
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

  // console.log(donor);
  // const selectedColor = "Washed Gray";

  // To remove the current donor
  const similarDonors = (await donors
    .find(
      {},
      {
        vector: donor.$vector,
        limit: 6,
        includeSimilarity: true,
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
    .toArray()) as SimilarDonor[];
  similarDonors.shift();

  return (
    <div className="bg-[#faf9f5]">
      <div className="px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
        {/* <DonorBackButton /> */}
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                <Tab
                  key={donor._id}
                  className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  <span className="sr-only">{donor.donorCode}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      width={800}
                      height={800}
                      alt=""
                      src={donor.user_image}
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                  />
                </Tab>
              </TabList>
            </div>

            <TabPanels className="aspect-h-1 aspect-w-1 w-full">
              <TabPanel key={donor._id}>
                <Image
                  width={100}
                  height={100}
                  alt="donor image"
                  src={donor.user_image}
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                  unoptimized
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>

          {/* Donor info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-main font-bold tracking-tight text-gray-900">
              {donor.donorCode}
            </h1>

            <h3 className="font-sans font-medium text-sm">{donor.job_title}</h3>

            <div className="mt-3">
              <h2 className="sr-only">Donor information</h2>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: donor.profile_bio }}
                className="space-y-6 text-base text-gray-700"
              />
            </div>

            {/* Age  */}
            <div className="mt-3 ">
              <h3 className="font-sans font-medium text-sm">
                Age:{" "}
                <span className="space-y-6 text-gray-700 text-sm">
                  {donor.age}
                </span>
              </h3>
            </div>

            {/* Relationship Preference  */}
            <div className="mt-3 ">
              <h3 className="font-sans font-medium text-sm">
                Relationship preference:{" "}
                <span className="space-y-6 text-gray-700 text-sm">
                  {donor.relationship_preferences[0].toUpperCase() +
                    donor.relationship_preferences.slice(1)}
                </span>
              </h3>
            </div>

            {/* AMH Rating */}
            <div className="mt-3 mb-1">
              <h3 className="sr-only ">AMH Rating</h3>
              <div className="flex gap-2 items-center">
                <h3 className="font-sans font-medium text-sm">AMH Rating: </h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        5 > rating ? "text-[#66f24e] " : "text-gray-300",
                        "h-5 w-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[12px] text-gray-700">
              This donor meets Cofertility&apos;s AMH requirements of 2.0 or
              above.
            </p>

            {/* Colors */}
            {/* <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Hair Color
                </h3>
                <fieldset aria-label="Choose a color" className="mt-2">
                  <RadioGroup
                    value={selectedColor}
                    className="flex items-center space-x-3"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedColor,
                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div> */}

            <div className="mt-10 flex">
              <button
                type="submit"
                className="flex cursor-pointer max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-[#ed795f] px-8 py-3 text-base font-medium text-white hover:bg-[#ed795fdd] focus:outline-none focus:ring-2 focus:ring-[#ed795f] focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Hold Match
              </button>

              <button
                type="button"
                className="ml-4 flex cursor-pointer items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
                <span className="sr-only">Add to favorites</span>
              </button>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-4 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-[#8c1948]">
                        What are you passionate about? What are your hobbies,
                        interests, or talents?
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <p className="text-gray-700">{donor.passions}</p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-4 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-[#8c1948]">
                        What are your short-term and long-term goals in life?
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <p className="text-gray-700">{donor.goals_in_life}</p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-4 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-[#8c1948]">
                        What would you consider to be your greatest strengths
                        and why?
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <p className="text-gray-700">{donor.greatest_strengths}</p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-4 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-[#8c1948]">
                        What would you do on a &apos;perfect&apos; day if you
                        could do anything that you wanted?
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <p className="text-gray-700">{donor.perfect_day}</p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-4 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-[#8c1948]">
                        If you were planning a dinner and could invite any three
                        people (living or dead, famous or not), who would they
                        be and why?
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <p className="text-gray-700">{donor.dinner_party}</p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-4 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-[#8c1948]">
                        Please tell us about your motivation for donating your
                        eggs as part of the Split program.
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <p className="text-gray-700">{donor.motivation}</p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-4 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-[#8c1948]">
                        What message would you like to share with the intended
                        parent(s)?
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <p className="text-gray-700">{donor.message_to_ips}</p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
        {/* My Favorites  */}
        <div className="mt-10">
          <Favorites movie={donor.movie} food={donor.food} book={donor.book} />
        </div>
        {/* My Personality  */}
        <div className="mt-10">
          <Personality
            logical_creative={donor.logical_creative}
            serious_silly={donor.serious_silly}
            introvert_extrovert={donor.introvert_extrovert}
          />
        </div>
        {/* Recommendations  */}
        <div>
          <h2 className="text-3xl font-main pt-10 mb-5 font-bold ">
            Similar Donors you may like
          </h2>
          {/* <div className="flex justify-between items-center lg:flex-row gap-x-20 gap-y-10 pl-20 pr-10 py-10 overflow-x-scroll">
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
          </div> */}
          <SimilarDonors donors={similarDonors} />
        </div>
      </div>
    </div>
  );
}

export default DonorPage;
