import Image, { StaticImageData } from "next/image";

export default function Attributes({
  icon,
  title,
  eye_color,
  complexion,
  hair_color,
  hair_type,
  hair_texture,
  dominant_hand,
  freckles,
  dimples,
  allergies,
  dental_work,
  egg_retrieval,
  diet,
  vision_quality,
  marital_status,
  jewish_ancestry,
  siblings,
}: {
  icon: StaticImageData | string;
  title: string;
  eye_color?: string;
  complexion?: string;
  hair_color?: string;
  hair_type?: string;
  hair_texture?: string;
  dominant_hand?: string;
  freckles?: string;
  dimples?: string;
  allergies?: string;
  dental_work?: string;
  egg_retrieval?: string;
  diet?: string;
  vision_quality?: string;
  marital_status?: string;
  jewish_ancestry?: string;
  siblings?: string;
}) {
  return (
    <section>
      <div className="flex items-center gap-2 my-5">
        <Image src={icon} width={50} height={50} alt="Love Icon" className="" />
        <h3 className="text-2xl font-semibold leading-6 text-gray-900 font-main">
          {title}
        </h3>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {eye_color && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Eye color</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex gap-1">
                  <Image
                    src={`https://match.cofertility.com/images/profile/${eye_color}.svg`}
                    alt="eye color"
                    width={15}
                    height={15}
                  />
                  {eye_color}
                </dd>
              </div>
            )}
            {complexion && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Complexion
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex gap-1">
                  <Image
                    src={`https://match.cofertility.com/images/profile/${complexion}.svg`}
                    alt="eye color"
                    width={15}
                    height={15}
                  />
                  {complexion === "very_fair"
                    ? "Very fair"
                    : complexion === "light_brown"
                    ? "Light brown"
                    : complexion === "dark_brown"
                    ? "Dark brown"
                    : complexion}
                </dd>
              </div>
            )}
            {hair_color && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Hair color
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex gap-1">
                  <Image
                    src={`https://match.cofertility.com/images/profile/${hair_color}.svg`}
                    alt="eye color"
                    width={15}
                    height={15}
                  />
                  {hair_color === "strawberry_blonde"
                    ? "Strawberry blonde"
                    : hair_color}
                </dd>
              </div>
            )}
            {hair_type && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Hair style
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex gap-1">
                  <Image
                    src={`https://match.cofertility.com/images/profile/${hair_type}.svg`}
                    alt="eye color"
                    width={15}
                    height={15}
                  />
                  {hair_type}
                </dd>
              </div>
            )}
            {hair_texture && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Hair texture
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex gap-1">
                  <Image
                    src={`https://match.cofertility.com/images/profile/${hair_texture}.svg`}
                    alt="eye color"
                    width={15}
                    height={15}
                  />
                  {hair_texture}
                </dd>
              </div>
            )}
            {dominant_hand && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Dominant Hand
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {dominant_hand}
                </dd>
              </div>
            )}
            {freckles && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Freckles</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {freckles}
                </dd>
              </div>
            )}
            {dimples && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Dimples</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {dimples}
                </dd>
              </div>
            )}
            {allergies && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Allergies</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {allergies}
                </dd>
              </div>
            )}
            {dental_work && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Dental work
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {dental_work}
                </dd>
              </div>
            )}
            {egg_retrieval && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Had egg retrieval before?
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {egg_retrieval}
                </dd>
              </div>
            )}
            {diet && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Diet</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {diet === "meat_eater_non_vegetarian"
                    ? "Meat eater/Non vegetarian"
                    : diet}
                </dd>
              </div>
            )}
            {vision_quality && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Vision quality
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {vision_quality}
                </dd>
              </div>
            )}
            {marital_status && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Marital Status
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {marital_status === "single_never_married"
                    ? "Single/never married"
                    : marital_status === "married_or_in_a_domestic_partnership"
                    ? "Married/In a domestic partnership"
                    : marital_status}
                </dd>
              </div>
            )}
            {jewish_ancestry && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Jewish ancestry
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {jewish_ancestry === "yes_maternal_side"
                    ? "Yes, maternal side"
                    : jewish_ancestry === "yes_both_sides"
                    ? "Yes, both sides"
                    : jewish_ancestry === "yes_paternal_side"
                    ? "Yes, paternal side"
                    : jewish_ancestry}
                </dd>
              </div>
            )}
            {siblings && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Have Siblings?
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {siblings}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>
  );
}
