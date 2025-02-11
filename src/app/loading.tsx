"use client";

import HeaderSkeleton from "./_components/HeaderSkeleton";

export default function LoadingPage(){
  return (
    <>
      <style jsx global>
        {`
          header {
            display: none !important;
          }
        `}
      </style>
      <HeaderSkeleton />
      <section className="mb-28 sm:mb-6 w-full sm:max-w-[80rem] px-6 mx-auto text-center scroll-mt-24 2xl:h-[70dvh]">
        <div className="flex items-center justify-center flex-col md:flex-row 2xl:mt-8">
          {/* Left Column - Image Skeleton */}
          <div className="md:w-1/3 md:ml-2 md:self-start 2xl:self-auto flex items-center justify-center 2xl:mr-20 2xl:mb-20">
            <div
              className="animate-pulse rounded-full border-[0.2rem] border-white bg-gray-200 dark:bg-gray-700
            h-36 w-36 sm:h-60 sm:w-60 md:h-[16rem] md:w-[16rem] 2xl:h-[20rem] 2xl:w-[20rem]"
            ></div>
          </div>

          {/* Right Column - Text and Buttons Skeleton */}
          <div className="md:w-2/3 md:px-3">
            {/* Heading Skeleton */}
            <div className="mb-10 md:mb-32 mt-6 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5]">
              <div className="h-8 mb-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 mb-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Buttons & Icon Skeletons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-2 items-center text-lg font-medium 2xl:gap-8">
              <div className="w-40 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="w-40 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
