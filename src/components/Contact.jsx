import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const phoneNo = "8109237674";

      const messageHeader =
        "🚀 Hello, I visited your portfolio. Here are my details: 🚀";

      const formDataText =
        `🧔🏻Visitor Name: ${formData.firstName} ${formData.lastName}\n` +
        `phone: ${formData.phoneNumber}\n` +
        `📭Email: ${formData.email}\n` +
        `📄Message: ${formData.message}`;

      const finalMessage = `${messageHeader}\n\n${formDataText}`;

      const encodedFormData = encodeURIComponent(finalMessage);

      window.location.replace(
        `https://api.whatsapp.com/send?phone=${phoneNo}&text=${encodedFormData}`
      );

      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
      toast("Sent to whatsapp , if not try with your cell phone", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: undefined,
    });
  };
  return (
    <div className="relative isolate bg-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-200/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full  stroke-gradient-to-r from-teal-500 via-pink-600 to-sky-600  [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-40" />
              </div>
            </div>
            <Link to={"/"}>
              <FaArrowAltCircleLeft className="text-3xl text-pink-600 mb-3 hover:scale-95 transition-transform duration-300 ease-in-out hover:text-pink-500" />
            </Link>

            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent ">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Hello there! I'm thrilled to connect with you. If you have any
              inquiries, opportunities, or just want to say hi, feel free to
              reach out. Whether you're looking to collaborate on a project,
              discuss potential work, or simply share your thoughts, I'm all
              ears.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <IoPhonePortraitOutline
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+91-8109237674">
                    +91-8109237674
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FaEnvelopeOpenText
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:puneet070500@gmail.com"
                  >
                    puneet070500@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 focus:outline-none"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm outline-none sm:text-sm sm:leading-6 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm outline-none sm:text-sm sm:leading-6 ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm outline-none sm:text-sm sm:leading-6 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    autoComplete="tel"
                    className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-200 shadow-sm outline-none sm:text-sm sm:leading-6 ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-200"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className={`block w-full rounded-md border-0 bg-gray-200/5 px-3.5 py-2 text-gray-200 shadow-sm outline-none sm:text-sm sm:leading-6 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600   px-3.5 py-2.5 text-center text-sm font-semibold text-gray-200 shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
