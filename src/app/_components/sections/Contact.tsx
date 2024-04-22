"use client";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "../../_lib/hooks";
import { motion } from "framer-motion";
import { BsEye } from "react-icons/bs";
import { sendEmail } from "../../_actions/sendEmail";
import SubmitButton from "../SubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const animateInput = {
    initial: {
      x:10,
      y:10,
      scale: 0.5
    },
    animate: {
      x:0,
      y:0,
      scale:1
    },
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const resetForm = () => {
    setFormData({
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="pb-20 sm:pb-28 px-8 sm:px-0 w-[min(100%,38rem)] text-center mx-auto mt-10 scroll-mt-24 overflow-hidden"
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 dark:text-gray-200 mt-6">
        Please contact me directly on my email{" "}
        <a className="font-semibold hover:text-[#00AAF9] dark:text-blue-400 underline dark:no-underline" href="mailto:dev.salman1508@gmail.com">
          dev.salman1508@gmail.com
        </a>{" "}
        or through the form below:
      </p>

      <form
        className="mt-10 flex flex-col relative"
        action={async (formData) => {

          const {error} = await sendEmail(formData);
          if (error) {
            toast.error(error+"\nIf error persists, please contact me on the email.");
            return;
          }
          toast.success("Email sent successfully!");
          resetForm();
        }}
      >
        {/* envelope */}
        <motion.div
          className="bg-slate-100 dark:bg-slate-900 border z-10 border-white rounded-lg p-6 h-full w-full shadow-md dark:shadow-cyan-200 absolute top-0 right-0"
          initial={{ x: 0 }}
          animate={showForm? {x:100,y:1000, rotate:100} : {}}
          transition={{duration:1.8}}
        >
          <div className="w-full h-1 bg-blue-500 dark:bg-cyan-400 mb-4"></div>
          <div className="flex items-center justify-center">
            <div className="flex p-1 border rounded-bl-md rounded-br-md border-l-gray-300 border-r-gray-300 border-b-gray-300 justify-center items-center gap-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-black" onClick={()=>{setShowForm(true)}}>
                <h1>View Form</h1>
                <BsEye/>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-16 h-6 bg-gray-600 dark:bg-gray-500"></div>
            <div className="w-16 h-6 bg-gray-600 dark:bg-gray-500"></div>
          </div>
          <div className="w-full h-6 bg-gray-600 dark:bg-gray-500 mt-4"></div>
        </motion.div>

        <motion.input
          className="h-14 px-4 rounded-lg border-2 dark:border-black dark:bg-black dark:border-b-cyan-300 dark:text-white transition-all "
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          maxLength={100}
          placeholder="Your email"
          variants={animateInput}
          initial="initial"
          animate={showForm? "animate" :""}
        />
        <motion.textarea
          className="h-52 my-3 rounded-lg border-2 dark:border-black dark:bg-black dark:border-b-cyan-300 dark:text-white p-4  transition-all "
          name="message"
          placeholder="Your message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          maxLength={5000}
          variants={animateInput}
          initial="initial"
          animate={showForm? "animate" :""}

        />
        <SubmitButton/>
      </form>
    </section>
  );
}
