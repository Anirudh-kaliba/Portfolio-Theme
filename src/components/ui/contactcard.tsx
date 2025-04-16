"use client";

import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { ShineBorder } from "../magicui/shine-border";
import ReCAPTCHADefault from "react-google-recaptcha";
import { submitContactForm } from "../../../firebase/contactService";

// Fix for TypeScript compatibility with JSX
const ReCAPTCHA = ReCAPTCHADefault as unknown as React.FC<{
  sitekey: string;
  onChange: (value: string | null) => void;
  theme?: "light" | "dark";
}>;

const ContactCard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      setStatusMessage({
        type: "error",
        text: "Please verify that you are not a robot.",
      });
      setTimeout(() => setStatusMessage(null), 5000);
      return;
    }

    try {
      await submitContactForm(formData);
      setStatusMessage({
        type: "success",
        text: "Form submitted successfully!",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      });
      setCaptchaValue(null);
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Failed to submit form. Please try again.",
      });
    }

    setTimeout(() => setStatusMessage(null), 5000);
  };

  return (
    <div className="w-full max-w-5xl mb-8">
      <div className="flex justify-center items-center p-6 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-6 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-black/40 shadow-xl space-y-6 relative z-10"
        >
          <ShineBorder
            borderWidth={1}
            duration={10}
            shineColor={["#f23777", "#6f3cf5", "#f09c47"]}
            className="absolute inset-0 rounded-2xl"
          />

          {/* ✅ Status Message */}
          {statusMessage && (
            <div
              className={`text-center text-sm font-medium py-2 px-4 rounded-xl ${
                statusMessage.type === "success"
                  ? "bg-green-100 text-emerald-900"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          {/* First Name */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <User className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <Phone className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Address */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* reCAPTCHA */}

          <div className="flex justify-center overflow-hidden">
            <div className="scale-[0.85] sm:scale-100 origin-center">
              <ReCAPTCHA
                sitekey="6LeP5QorAAAAAJZJam55jm6RxJY1Q4xSpaYWvl3c"
                onChange={(value: string | null) => setCaptchaValue(value)}
                theme="light"
              />
            </div>
          </div>

          {/* Submit Button Only */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={!captchaValue}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition ${
                captchaValue
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-400 text-black cursor-not-allowed"
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
