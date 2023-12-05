"use client"
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-purple-800 ml-1 border-2 dark:border-black dark:bg-black dark:border-x-cyan-300 dark:hover:border-cyan-300 text-white flex items-center justify-center w-16 h-10 p-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 disabled:bg-gray-400 disabled:hover:bg-gray-400 transition font-semibold">{pending?(
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
    ) :
    "Send"}</button>
  )
}
