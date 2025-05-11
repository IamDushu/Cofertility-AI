import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import WomanIcon from "@/public/Woman.svg";

export default function Personality({
  logical_creative,
  serious_silly,
  introvert_extrovert,
}: {
  logical_creative: string;
  serious_silly: string;
  introvert_extrovert: string;
}) {
  return (
    <fieldset>
      <div className="flex items-center gap-2">
        <Image
          src={WomanIcon}
          width={50}
          height={50}
          alt="Love Icon"
          className=""
        />
        <h3 className="text-2xl font-semibold leading-6 text-gray-900 font-main">
          My Personality
        </h3>
      </div>
      <RadioGroup
        value={logical_creative}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        <Radio
          value="logical"
          className="group relative flex  rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-[#ed795e] data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Logical
              </span>
            </span>
          </span>
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#1e5951] [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#1e5951]"
          />
        </Radio>
        <Radio
          value="creative"
          className="group relative flex rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Creative
              </span>
            </span>
          </span>
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#1e5951]  [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#1e5951]"
          />
        </Radio>
      </RadioGroup>
      <RadioGroup
        value={serious_silly}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        <Radio
          value="serious"
          className="group relative flex  rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-[#ed795e] data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Serious
              </span>
            </span>
          </span>
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#1e5951] [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#1e5951]"
          />
        </Radio>
        <Radio
          value="silly"
          className="group relative flex rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Silly
              </span>
            </span>
          </span>
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#1e5951]  [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#1e5951]"
          />
        </Radio>
      </RadioGroup>
      <RadioGroup
        value={introvert_extrovert}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        <Radio
          value="introverted"
          className="group relative flex  rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-[#ed795e] data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Introvert
              </span>
            </span>
          </span>
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#1e5951] [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#1e5951]"
          />
        </Radio>
        <Radio
          value="extroverted"
          className="group relative flex rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Extrovert
              </span>
            </span>
          </span>
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#1e5951]  [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#1e5951]"
          />
        </Radio>
        <Radio
          value="ambiverted"
          className="group relative flex rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Ambiverted
              </span>
            </span>
          </span>
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#1e5951]  [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#1e5951]"
          />
        </Radio>
      </RadioGroup>
    </fieldset>
  );
}
