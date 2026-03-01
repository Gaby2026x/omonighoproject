import { useState } from "react";
import { Link } from "react-router-dom";
import { sendContactToTelegram } from "../data/telegram";

const offices = [
  {
    city: "Arlington, VA (HQ)",
    address: "1300 N 17th Street, Suite 400, Arlington, VA 22209",
    phone: "+1 (703) 312-6100",
  },
  {
    city: "Nashua, NH",
    address: "65 Spit Brook Road, Nashua, NH 03060",
    phone: "+1 (603) 885-4321",
  },
  {
    city: "Sterling Heights, MI",
    address: "34201 Van Dyke Avenue, Sterling Heights, MI 48312",
    phone: "+1 (586) 574-8000",
  },
  {
    city: "San Diego, CA",
    address: "2000 East El Segundo Blvd, El Segundo, CA 90245",
    phone: "+1 (310) 647-1000",
  },
];

const inquiryTypes = [
  "Sales",
  "Support",
  "Partnerships",
  "Media",
  "Careers",
  "General",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const success = await sendContactToTelegram(form);
    setStatus(success ? "success" : "error");
    if (success) {
      setForm({ name: "", email: "", inquiryType: "", subject: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reach out to our team across the United States. We're here to help.
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
          U.S. Offices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office) => (
            <div
              key={office.city}
              className="bg-gray-50 rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {office.city}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{office.address}</p>
              <p className="text-accent-500 font-medium">{office.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-8">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type
              </label>
              <select
                name="inquiryType"
                value={form.inquiryType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <option value="">Select an inquiry type</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-dark-900 text-white py-3 rounded-lg font-semibold hover:bg-dark-800 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && (
              <p className="text-green-600 text-center font-medium">
                Your message has been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-medium">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Business Hours & Map */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Business Hours
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                <span className="font-semibold text-navy-900">
                  Monday – Friday:
                </span>{" "}
                8:00 AM – 6:00 PM (Eastern Time)
              </p>
              <p>
                <span className="font-semibold text-navy-900">Saturday:</span>{" "}
                9:00 AM – 1:00 PM (Select Offices)
              </p>
              <p>
                <span className="font-semibold text-navy-900">Sunday:</span>{" "}
                Closed
              </p>
              <p className="mt-4 text-sm">
                Hours may vary by location. For urgent inquiries outside
                business hours, please use our emergency contact line.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              U.S. Locations
            </h2>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500 text-lg font-medium">
                Interactive Map
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
