// DonorBackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function DonorBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="flex gap-2 cursor-pointer items-center justify-center rounded-md px-3 py-3 mb-5 text-black-400 hover:bg-gray-100 hover:text-gray-500"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
      <span>Go Back</span>
    </button>
  );
}
