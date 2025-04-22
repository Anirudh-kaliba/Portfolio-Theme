// src/components/ui/contactcard.tsx
"use client";

import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { ShineBorder } from "../magicui/shine-border";
import ReCAPTCHADefault from "react-google-recaptcha";
import { submitContactForm } from "../../../firebase/contactService";

// Direct assignment for clean usage
const ReCAPTCHA = ReCAPTCHADefault;

const ContactCard = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      await submitContactForm(formData);
      alert("Form submitted successfully!");
      setFormData({ firstName: "", email: "", phone: "", address: "" });
      setCaptchaToken(null);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-5xl mb-8 flex justify-center">
      <div className="w-full max-w-lg p-6 relative">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-black/40 shadow-xl space-y-6 relative z-10"
        >
          <ShineBorder
            borderWidth={1}
            duration={10}
            shineColor={["#f23777", "#6f3cf5", "#f09c47"]}
            className="absolute inset-0 rounded-2xl -z-10"
          />

          {/* Full Name */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <User className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3 flex-shrink-0" />
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3 flex-shrink-0" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <Phone className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3 flex-shrink-0" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* Address */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3 flex-shrink-0" />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* reCAPTCHA */}
          <div className="pt-2 w-full flex justify-center">
            <div className="w-full flex justify-center overflow-hidden">
              <div className="scale-[0.66] sm:scale-[0.9] md:scale-100 origin-top">
                <ReCAPTCHA
                  sitekey=""
                  onChange={(token: string | null) => setCaptchaToken(token)}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={!captchaToken}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition duration-200 ease-in-out text-white font-semibold ${
                captchaToken
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg cursor-pointer"
                  : "bg-gray-400 dark:bg-gray-600 text-gray-100 dark:text-gray-400 cursor-not-allowed"
              }`}
            >
              <Send className="w-5 h-5" /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
