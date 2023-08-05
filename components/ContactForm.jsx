"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        toast("Message sent! ✉️", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormState({ email: "", message: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="mx-auto w-1/2 md:w-2/3 2xl:w-1/2 text-sm  md:text-md lg:text-lg 2xl:text-xl"
      method="POST"
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="block bg-transparent rounded-md w-full lg:w-3/4 p-2.5 appearance-none text-gray-300 border border-white text-sm focus:border-purple-500 focus:outline-none peer"
              placeholder=" "
              autoComplete="Off"
              required
            />
            <label
              htmlFor="floating_email"
              className="ml-1 px-1.5 peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-5 scale-75 top-2.5 z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 bg-midnight peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="message"
              id="message"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="block bg-transparent rounded-md w-full lg:w-3/4 p-2.5 appearance-none text-gray-300 border border-white text-sm focus:border-purple-500 focus:outline-none peer"
              placeholder=" "
              autoComplete="off"
              required
            />
            <label
              htmlFor="message"
              className="ml-1 px-1.5 peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-5 scale-75 top-2.5 z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 bg-midnight peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              message
            </label>
          </div>
        </div>
        <button
          className="py-2 px-16 w-full lg:w-3/4 font-bold bg-purple-500 hover:bg-purple-400 shadow-purple text-midnight "
          type="submit"
        >
          send!
        </button>
      </div>
    </form>
  );
}
