"use client";

export default function HeaderSkeleton() {
  return (
    <div className="z-[997] relative">
      {/* Background container skeleton */}
      <div
        className="fixed top-0 left-1/2 h-[4rem] w-full rounded-none 
                   sm:top-6 sm:h-[3.25rem] sm:w-[29rem] sm:rounded-full 
                   bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                   border-opacity-40 bg-opacity-80 filter shadow-lg shadow-black/[0.03] 
                   dark:shadow-cyan-300/[0.5] backdrop-blur-sm animate-pulse"
        style={{ transform: "translateX(-50%)" }}
      ></div>

      {/* Navigation skeleton */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:py-0">
        <ul
          className="flex sm:flex-nowrap justify-center items-center gap-y-1 
                     sm:gap-5 w-[22rem] sm:w-auto text-[0.9rem] font-medium text-gray-600 dark:text-gray-100"
        >
          {/* Render 5 skeleton items for the nav links */}
          {[1, 2, 3, 4, 5].map((item) => (
            <li
              key={item}
              className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
            ></li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
