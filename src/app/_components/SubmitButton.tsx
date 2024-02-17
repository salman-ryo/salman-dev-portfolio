"use client"
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-[#0db9fde3] hover:bg-[#025fd1] text-white ml-1 border dark:border-black dark:bg-black dark:border-x-cyan-300 dark:hover:border-cyan-300  flex items-center justify-center w-16 h-10 p-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 disabled:bg-gray-400 disabled:hover:bg-gray-400 transition font-medium">{pending?(
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
    ) :
    "Send"}</button>
  )
}
