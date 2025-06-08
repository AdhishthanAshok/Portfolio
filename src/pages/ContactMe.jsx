import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin } from "lucide-react";

// Popup Component
const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-full">
      <p className="text-gray-800">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Close
      </button>
    </div>
  </div>
);

// Input Field Component
const InputField = ({ name, label, placeholder, type = "text", icon, required }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      {label}
    </label>
    <div className="relative">
      {icon && <div className="absolute inset-y-0 left-3 flex items-center">{icon}</div>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${icon ? "pl-10" : ""
          }`}
      />
    </div>
  </div>
);

// LocationItem.jsx
const LocationItem = ({ label, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 hover:underline"
  >
    {icon && <span className="text-lg">{icon}</span>}
    {label}
  </a>
);

const ContactMe = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => setPopupMessage("Message sent successfully!"),
        (error) => setPopupMessage(`Failed to send message: ${error.text}`)
      );
  };

  const closePopup = () => setPopupMessage("");

  const phoneNumber = "9068287133";
  const whatsappMessage =
    "Hello, I came across your portfolio and I would like to discuss potential opportunities.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="px-4 md:px-6 bg-gray-100 dark:bg-gray-900">
      {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <h2 className="block items-center text-2xl md:text-3xl pb-8 font-bold transition-colors duration-300  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
          Social Links :
        </h2>
        {[
          { href: "https://github.com/AdhishthanAshok", icon: "https://img.icons8.com/color/48/github--v1.png", alt: "GitHub" },
          { href: "https://www.linkedin.com/in/adhishthanashok/", icon: "https://img.icons8.com/color/48/linkedin.png", alt: "LinkedIn" },
          { href: "https://leetcode.com/u/adhishthanashok/", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png", alt: "LeetCode" },
          { href: whatsappUrl, icon: "https://img.icons8.com/color/48/whatsapp--v1.png", alt: "WhatsApp" }
        ].map(({ href, icon, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img
              src={icon}
              alt={alt}
              width="35"
              height="35"
              className="transition-transform duration-200 hover:scale-125"
            />
          </a>
        ))}
      </div>

      {/* Contact Info + Form */}
      <section>
        <div className="bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 md:p-12">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-10 mb-10 text-center text-gray-800 dark:text-white">
            <LocationItem label="India" url="https://maps.google.com/?q=India" icon={<MapPin className="w-5 h-5 text-blue-500" />} />
            <LocationItem label="Noida, 201301" url="https://maps.google.com/?q=Sector 22, Noida, 201301" icon={<MapPin className="w-5 h-5 text-blue-500" />} />
            <LocationItem label="+91 9068287133" url="https://wa.me/919068287133" />
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="max-w-3xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField name="user_name" label="First Name" placeholder="Bill" required />
              <InputField name="user_lastname" label="Last Name" placeholder="Gates" required />
            </div>

            <InputField
              name="user_email"
              label="Your Email"
              placeholder="xyz@gmail.com"
              type="email"
              required
              icon={
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              }
            />

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your thoughts here..."
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Send"
                className="px-6 py-2 text-sm font-medium border rounded-lg text-gray-800 hover:bg-gray-800 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition-colors"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
