"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/src/hooks/use-outside-click";
import Image from "next/image";
import { SimilarDonor } from "@/types";
import { useRouter } from "next/navigation";

export function SimilarDonors({ donors }: { donors: SimilarDonor[] }) {
  const [active, setActive] = useState<SimilarDonor | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => {
    if (ref.current) {
      setActive(null);
    }
  });

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active._id}-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active._id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-[#f5f4ee] sm:rounded-3xl overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                src={active.user_image}
                alt={active.donorCode}
                className="w-full h-80 object-cover object-top"
                unoptimized
              />

              <div>
                <div className="flex justify-between items-start p-5">
                  <div>
                    <motion.h3 className="font-medium text-neutral-700 text-base">
                      {active.donorCode}
                    </motion.h3>
                    <p className="text-neutral-600 text-base">
                      {active.job_title}
                    </p>
                  </div>
                  <button
                    className="underline underline-offset-2 text-green-700 cursor-pointer font-semibold"
                    onClick={() => {
                      router.push(`/donor/${active._id}`);
                    }}
                  >
                    View
                  </button>
                </div>

                <div className="pt-2 relative px-4 pb-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit overflow-auto "
                  >
                    <p className="mb-2">{active.profile_bio}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ">
        {donors.map((donor) => (
          <motion.div
            layoutId={`card-${donor._id}-${id}`}
            key={donor._id}
            onClick={() => setActive(donor)}
            className="p-4 flex flex-col hover:bg-[#e3e0d3] rounded-xl cursor-pointer"
          >
            <div className="flex flex-col gap-2 w-full">
              <Image
                width={100}
                height={100}
                src={donor.user_image}
                alt={donor.donorCode}
                className="h-60 w-full rounded-lg object-cover object-top"
                unoptimized
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-neutral-800 text-base font-main">
                  {donor.donorCode}
                </h3>
                <p className="text-neutral-600 text-sm">{donor.job_title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
