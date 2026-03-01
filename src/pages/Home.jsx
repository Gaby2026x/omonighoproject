import { Link } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";

const sectors = [
  {
    title: "Electronic Systems",
    description:
      "Flight and engine controls, electronic warfare, C4ISR, precision guidance, and power and energy management systems.",
    gradient: "from-navy-800 to-navy-950",
  },
  {
    title: "Intelligence & Security",
    description:
      "Systems engineering, integration, and sustainment solutions for U.S. military and government agencies.",
    gradient: "from-navy-700 to-navy-900",
  },
  {
    title: "Platforms & Services",
    description:
      "Combat vehicles, weapons, munitions, ship repair, ordnance, and technical services for the U.S. armed forces.",
    gradient: "from-navy-800 to-navy-950",
  },
  {
    title: "Space & Mission Systems",
    description:
      "Space electronics, payloads, sensors, and satellite systems supporting national security missions.",
    gradient: "from-navy-700 to-navy-900",
  },
];

const stats = [
  { value: "35,000+", label: "Employees in the U.S." },
  { value: "$15.8B", label: "U.S. Revenue" },
  { value: "70+", label: "Years of Innovation" },
  { value: "30+", label: "U.S. Locations" },
];

const newsItems = [
  {
    title: "BAE Systems Delivers Next-Generation Electronic Warfare System to U.S. Army",
    date: "June 12, 2025",
    excerpt:
      "The advanced EW suite provides U.S. ground forces with superior situational awareness and spectrum dominance on the modern battlefield.",
    category: "Electronic Systems",
  },
  {
    title: "BAE Systems Awarded $2.7B Contract for Bradley Fighting Vehicle Upgrades",
    date: "May 22, 2025",
    excerpt:
      "The modernization program will deliver enhanced lethality, survivability, and mobility for the U.S. Army's infantry fighting vehicle fleet.",
    category: "Platforms & Services",
  },
  {
    title: "BAE Systems Expands Cybersecurity Operations Center in Northern Virginia",
    date: "May 5, 2025",
    excerpt:
      "New facility strengthens the company's ability to protect critical U.S. government networks and support intelligence community missions.",
    category: "Intelligence & Security",
  },
];

const innovations = [
  {
    title: "Artificial Intelligence",
    description: "Leveraging AI and machine learning to accelerate decision-making and enhance mission effectiveness for the U.S. warfighter.",
  },
  {
    title: "Autonomous Systems",
    description: "Developing unmanned and autonomous platforms across air, land, sea, and space domains for the U.S. Department of Defense.",
  },
  {
    title: "Advanced Manufacturing",
    description: "Investing in digital engineering, additive manufacturing, and next-generation production methods at U.S. facilities nationwide.",
  },
  {
    title: "Digital Transformation",
    description: "Modernizing enterprise IT, cloud infrastructure, and data analytics to support U.S. national security objectives.",
  },
];

const featuredJobs = jobs.slice(0, 3);

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-dark-900 text-white overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
          <img
            src="/States_files/BAE8-8-2020_13.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              We Protect Those Who Protect Us
              <span className="text-accent-400">®</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 mb-10 leading-relaxed">
              BAE Systems, Inc. delivers advanced defense, intelligence, and
              security solutions — empowering professionals from all
              backgrounds with proven technology and unwavering commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.baesystems.com/en-us/our-company"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors text-base"
              >
                Explore Our Capabilities
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors text-base"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500" />
      </section>

      {/* Job Application Open Notice */}
      <section className="bg-green-700 text-white py-4 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📢</span>
            <p className="text-sm sm:text-base font-medium">
              <strong>Now Hiring:</strong> Job applications are open for unemployed individuals. All backgrounds welcome — apply today!
            </p>
          </div>
          <Link
            to="/careers/jobs"
            className="shrink-0 bg-white text-green-700 font-semibold text-sm px-5 py-2 rounded hover:bg-green-50 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-20 px-4 lg:px-8 bg-steel-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Business Sectors
            </h2>
            <p className="text-steel-500 max-w-2xl mx-auto">
              BAE Systems, Inc. operates across four sectors that deliver
              critical capabilities to the U.S. Department of Defense and
              federal agencies.
            </p>
            <div className="w-12 h-1 bg-accent-500 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((sector) => (
              <a
                key={sector.title}
                href="https://www.baesystems.com/en-us/what-we-do"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gradient-to-br ${sector.gradient} rounded-lg p-6 min-h-[240px] flex flex-col justify-end overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {sector.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {sector.description}
                </p>
                <span className="inline-flex items-center text-accent-400 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-navy-900 py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-heading font-bold text-white mb-10">
            BAE Systems, Inc. at a Glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-3xl sm:text-4xl font-heading font-bold text-white group-hover:text-accent-400 transition-colors">
                  {stat.value}
                </p>
                <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy-900">
                Latest News
              </h2>
              <div className="w-12 h-1 bg-accent-500 mt-3" />
            </div>
            <a
              href="https://www.baesystems.com/en-us/newsroom"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center text-accent-500 hover:text-accent-600 font-semibold text-sm transition-colors"
            >
              Visit Newsroom
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-1 bg-accent-500" />
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-accent-500 uppercase tracking-wide mb-2">
                    {item.category}
                  </span>
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  <h3 className="text-lg font-heading font-semibold text-navy-900 mb-3 group-hover:text-accent-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <a
              href="https://www.baesystems.com/en-us/newsroom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-500 hover:text-accent-600 font-semibold text-sm"
            >
              Visit Newsroom →
            </a>
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-20 px-4 lg:px-8 bg-steel-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 mb-3">
              Innovation &amp; Technology
            </h2>
            <p className="text-steel-500 max-w-2xl mx-auto">
              We invest in breakthrough technologies that give the United States
              a decisive advantage on the battlefield and beyond.
            </p>
            <div className="w-12 h-1 bg-accent-500 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-heading font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-dark-900 text-white py-20 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent-500" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Build a rewarding career with us. We welcome applicants from all
            backgrounds — whether you are a recent graduate, career changer,
            or experienced professional. Opportunities span engineering,
            technology, operations, and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/careers/jobs/${job.id}`}
                className="bg-dark-800 border border-gray-700 hover:border-accent-500 rounded-lg px-5 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-dark-800/80"
              >
                {job.title}
              </Link>
            ))}
          </div>
          <Link
            to="/careers/jobs"
            className="inline-flex items-center px-8 py-3.5 rounded bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
          >
            View All Positions
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-3">
            Stay Informed
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive the latest news and updates from BAE Systems
            in the United States.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
          {/* Hidden email link — not visible but accessible/clickable */}
          <a
            href="mailto:admin@baesystems.careers"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:text-accent-500 focus:px-4 focus:py-2 focus:rounded"
            tabIndex={0}
          >
            admin@baesystems.careers
          </a>
        </div>
      </section>
    </main>
  );
}
