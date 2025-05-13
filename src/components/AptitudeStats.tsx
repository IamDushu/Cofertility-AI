export default function AptitudeStats({
  artistic_ability,
  athletic_ability,
  mathematical_ability,
  scientific_ability,
  singing_ability,
}: {
  artistic_ability: number;
  athletic_ability: number;
  mathematical_ability: number;
  scientific_ability: number;
  singing_ability: number;
}) {
  return (
    <div className="bg-white border rounded-[15px] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-black/5 sm:grid-cols-2 lg:grid-cols-5">
          <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-900">
              Athleticism
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-700">
                {athletic_ability}
              </span>
              <span className="text-sm md:text-base font-semibold tracking-tight text-gray-400">
                / 5
              </span>
            </p>
          </div>
          <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-900">
              Singing
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-700">
                {singing_ability}
              </span>
              <span className="text-sm md:text-base font-semibold tracking-tight text-gray-400">
                / 5
              </span>
            </p>
          </div>
          <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-900">Art</p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-700">
                {artistic_ability}
              </span>
              <span className="text-sm md:text-base font-semibold tracking-tight text-gray-400">
                / 5
              </span>
            </p>
          </div>
          <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-900">
              Science
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-700">
                {scientific_ability}
              </span>
              <span className="text-sm md:text-base font-semibold tracking-tight text-gray-400">
                / 5
              </span>
            </p>
          </div>
          <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-900">Math</p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-700">
                {mathematical_ability}
              </span>
              <span className="text-sm md:text-base font-semibold tracking-tight text-gray-400">
                / 5
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
