import { socialLinks } from "../_lib/data";

export default function Footer() {
  return (
    <footer className="w-full text-center border-t border-gray-500 px-8 sm:px-4 py-2 sm:py-6 text-gray-600 dark:text-gray-300 break-words">
      <p className="font-serif">
        &copy; {new Date().getFullYear()}{" "}
        <a
          className="cursor-pointer hover:text-black dark:hover:text-yellow-200"
          href={socialLinks.github}
          target="_blank"
        >
          Salman alias Ryo
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
