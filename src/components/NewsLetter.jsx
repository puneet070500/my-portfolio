import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);

    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail) {
      const phoneNo = "8109237674";

      const messageHeader =
        "🚀 Hello, I visited your portfolio. Here are my details for the Newsletter: 🚀";

      const formDataText = `📭My-Email: ${email}\n `;

      const finalMessage = `${messageHeader}\n\n${formDataText}`;

      const encodedFormData = encodeURIComponent(finalMessage);

      window.location.replace(
        `https://api.whatsapp.com/send?phone=${phoneNo}&text=${encodedFormData}`
      );

      console.log("Email submitted:", email);
    } else {
      console.error("Invalid email");
    }
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  return (
    <div className="bg-neutral-950 pt-16 sm:pt-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-neutral-950 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent sm:text-4xl xl:max-w-none xl:flex-auto">
            Send Me your email and get notified about new things.
          </h2>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleInputChange}
                className={`min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 ${
                  isValidEmail ? "" : "border-red-500"
                }`}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </div>
            {!isValidEmail && (
              <p className="mt-2 text-sm text-red-500">
                Please enter a valid email address
              </p>
            )}
            <p className="mt-4 text-sm leading-6 text-gray-300">
              I care about your data. Read our{" "}
              <a href="#" className="font-semibold text-white">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
