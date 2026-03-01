import { Link } from "react-router-dom";
import jobs from "../data/jobs";

const whyCards = [
  {
    title: "Cutting-Edge Defense Programs",
    description:
      "Develop next-generation electronic warfare, autonomous systems, and cybersecurity solutions that keep America's armed forces ahead of every threat.",
  },
  {
    title: "Career Growth & Advancement",
    description:
      "Structured career paths, leadership development programs, and mentorship from industry veterans help you advance across BAE Systems, Inc.",
  },
  {
    title: "Competitive Compensation",
    description:
      "Top-tier salaries, performance bonuses, and equity programs that recognize your contributions to our nation's most critical missions.",
  },
  {
    title: "National Impact",
    description:
      "Your work directly protects the U.S. warfighter — from the soldier on the ground to the pilot in the cockpit — safeguarding American security every day.",
  },
  {
    title: "Work-Life Balance",
    description:
      "Flexible schedules, hybrid work options, and generous PTO so you can recharge and spend time with the people who matter most.",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Employee resource groups, equitable hiring practices, and a culture where every background and perspective strengthens our mission.",
  },
];

const testimonials = [
  {
    quote:
      "BAE Systems, Inc. gave me the chance to work on electronic warfare programs that truly make a difference for our troops. The engineering culture here is second to none, and I've grown more in five years than I thought possible.",
    name: "Sarah Mitchell",
    role: "Senior Systems Engineer — Nashua, NH · 5 years",
  },
  {
    quote:
      "I joined as a junior intelligence analyst and now lead a team supporting some of the Department of Defense's highest-priority programs. Leadership genuinely invests in your development and career trajectory.",
    name: "James Rivera",
    role: "Intelligence Analyst — Arlington, VA · 6 years",
  },
  {
    quote:
      "Managing programs for the U.S. Navy at BAE Systems has been the most rewarding chapter of my career. The collaborative environment across our San Diego site makes complex defense programs feel achievable every single day.",
    name: "Karen Nguyen",
    role: "Program Manager — San Diego, CA · 8 years",
  },
];

const benefits = [
  { title: "401(k) Matching", description: "Generous company match on your 401(k) contributions so you can build long-term financial security." },
  { title: "Health, Dental & Vision", description: "Comprehensive medical, dental, and vision insurance plans for you and your dependents." },
  { title: "Tuition Reimbursement", description: "Financial support for undergraduate and graduate coursework, certifications, and professional development." },
  { title: "Flexible & Hybrid Work", description: "Work-from-home options and flexible schedules that let you balance mission-critical work with everyday life." },
  { title: "Paid Time Off", description: "Competitive PTO, federal holidays, and personal days to rest, recharge, and take care of what matters." },
  { title: "Relocation Assistance", description: "Full relocation packages including moving expenses, temporary housing, and travel reimbursement." },
];

const featuredJobs = jobs.slice(0, 5);

export default function Careers() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-dark-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-dark-900/90" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build a Career That Matters
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            BAE Systems, Inc. is one of America's premier defense contractors.
            Join a team that delivers advanced technology solutions to protect
            the U.S. warfighter and strengthen our national security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers/jobs"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
            >
              Search Open Positions
            </Link>
            <a
              href="#why-bae"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors"
            >
              Why BAE Systems
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section id="why-bae" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            Why Work With Us
          </h2>
          <p className="text-center text-steel-600 max-w-2xl mx-auto mb-14">
            At BAE Systems, Inc., your career is built on purpose — protecting
            national security while growing professionally in a supportive,
            innovative environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 px-4 bg-steel-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-14">
            What Our People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-lg p-8 flex flex-col shadow-sm"
              >
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            Benefits &amp; Perks
          </h2>
          <p className="text-center text-steel-600 max-w-2xl mx-auto mb-14">
            We invest in our people with comprehensive benefits that support
            your health, finances, career development, and quality of life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-base font-semibold text-navy-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      <section className="py-20 px-4 bg-steel-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-14">
            Featured Positions
          </h2>
          <div className="space-y-4">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/careers/jobs/${job.id}`}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-6 py-5 hover:shadow-md transition-shadow group"
              >
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 group-hover:text-accent-500 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-1.5 text-sm text-gray-500">
                    <span>{job.department}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-accent-500 transition-colors shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/careers/jobs"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded transition-colors"
            >
              View All Positions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
