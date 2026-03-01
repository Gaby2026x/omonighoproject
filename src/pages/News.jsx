import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Defense", "Technology", "Awards", "Community"];

const articles = [
  {
    category: "Defense",
    title: "BAE Systems Awarded $3.6 Billion AMPV Full-Rate Production Contract",
    date: "March 12, 2025",
    location: "Sterling Heights, MI",
    excerpt:
      "The U.S. Army has awarded BAE Systems a $3.6 billion contract for full-rate production of the Armored Multi-Purpose Vehicle (AMPV), replacing the legacy M113 fleet with a modern, survivable platform for American soldiers.",
  },
  {
    category: "Technology",
    title: "Next-Generation Electronic Warfare System Completes Successful Flight Test",
    date: "January 28, 2025",
    location: "Nashua, NH",
    excerpt:
      "BAE Systems' next-generation electronic warfare system has completed a successful series of flight tests, demonstrating advanced threat detection and countermeasure capabilities for the U.S. military.",
  },
  {
    category: "Community",
    title: "BAE Systems Invests $100 Million in New Advanced Manufacturing Facility in Alabama",
    date: "November 15, 2024",
    location: "Huntsville, AL",
    excerpt:
      "BAE Systems, Inc. announces a $100 million investment in a new state-of-the-art manufacturing facility in Huntsville, Alabama, creating over 500 American jobs and strengthening the U.S. defense industrial base.",
  },
  {
    category: "Awards",
    title: "BAE Systems Named Top 10 U.S. Defense Contractor for 2025",
    date: "October 8, 2024",
    location: null,
    excerpt:
      "BAE Systems, Inc. has been recognized as one of the top 10 defense contractors in the United States, reflecting the company's continued growth and commitment to supporting the nation's security priorities.",
  },
  {
    category: "Technology",
    title: "AI-Powered Threat Detection System Deployed Across DoD Networks",
    date: "September 20, 2024",
    location: "Arlington, VA",
    excerpt:
      "BAE Systems has deployed its AI-powered cyber threat detection system across Department of Defense networks, providing real-time protection against sophisticated adversarial attacks on U.S. critical infrastructure.",
  },
  {
    category: "Defense",
    title: "BAE Systems Delivers 1,000th Bradley Fighting Vehicle Upgrade",
    date: "August 5, 2024",
    location: "Sterling Heights, MI",
    excerpt:
      "BAE Systems has delivered the 1,000th upgraded Bradley Fighting Vehicle to the U.S. Army, a major milestone in the program that enhances lethality, survivability, and readiness for American ground forces.",
  },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsroom</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The latest news, press releases, and updates from BAE Systems, Inc.
            across the United States.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-dark-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <span className="inline-block bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {article.date}
                  {article.location && ` — ${article.location}`}
                </p>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  to="#"
                  className="text-accent-500 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Kit */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Press Kit</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download our U.S. media resources including logos, executive
            biographies, and corporate fact sheets. For media inquiries, please
            contact our communications team.
          </p>
          <a
            href="#"
            className="inline-block bg-dark-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-800 transition-colors mb-6"
          >
            Download Press Kit
          </a>
          <p className="text-gray-600">
            Media Contact:{" "}
            <a
              href="mailto:media@baesystems.com"
              className="text-accent-500 hover:underline"
            >
              media@baesystems.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
