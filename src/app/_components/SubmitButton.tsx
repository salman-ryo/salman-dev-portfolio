"use client"
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-slate-800 text-white flex items-center w-fit p-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 disabled:bg-gray-400 disabled:hover:bg-gray-400 transition">{pending?(
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
    ) :
    "Send"}</button>
  )
}
