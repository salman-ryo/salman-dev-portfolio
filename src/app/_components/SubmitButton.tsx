"use client"
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-slate-800 border dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-950 dark:hover:text-white text-white flex items-center justify-center w-16 h-10 p-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 disabled:bg-gray-400 disabled:hover:bg-gray-400 transition font-semibold">{pending?(
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
    ) :
    "Send"}</button>
  )
}
