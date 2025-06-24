import React, { useState } from "react";

const Form = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqaqlnoy", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setSuccess(true);
    }
  };

  return (
    <div className="p-2 md:p-20 bg-gray-300">
      <div className="bg-[url(/contact.jpg)] rounded-4xl p-10 bg-cover bg-center text-white">
        <div className="max-w-2xl mx-auto px-4 py-8 ">
          <p className="text-[8vw] text-center font-bold -mt-16 text-pink-500">Contact Us</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="tel"
            name="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Anti-spam honeypot field */}
          <input type="text" name="_gotcha" className="hidden" />

          <textarea
            name="msg"
            placeholder="Your Message*"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        {success && (
          <div className="mt-4 text-green-600 font-medium text-center">
            ✅ Message sent successfully!
          </div>
        )}
    </div>
      </div>
    </div>
  );
};

export default Form;
