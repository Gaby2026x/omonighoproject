import { Link } from "react-router-dom";

const milestones = [
  {
    year: "1999",
    title: "Formation of BAE Systems",
    description:
      "BAE Systems was formed through the merger of British Aerospace and Marconi Electronic Systems, creating one of the world's largest defense and aerospace companies.",
  },
  {
    year: "2000",
    title: "BAE Systems, Inc. Established",
    description:
      "BAE Systems, Inc. was established as the primary U.S. subsidiary, headquartered in the Washington, D.C. area to serve the United States Department of Defense and federal agencies.",
  },
  {
    year: "2005",
    title: "Major U.S. Defense Contract Wins",
    description:
      "Secured significant U.S. defense contracts and expanded combat vehicle programs, solidifying BAE Systems, Inc. as a critical partner to the American warfighter.",
  },
  {
    year: "2010",
    title: "Cybersecurity & Intelligence Expansion",
    description:
      "Grew capabilities in cybersecurity, signals intelligence, and information technology to support U.S. intelligence community and federal agency missions.",
  },
  {
    year: "2015",
    title: "Space & Mission Systems Growth",
    description:
      "Expanded space and mission systems programs, delivering advanced satellite payloads, electronic warfare systems, and sensor technologies to the U.S. military.",
  },
  {
    year: "2020",
    title: "AI & Autonomous Systems Investment",
    description:
      "Invested heavily in artificial intelligence, machine learning, and autonomous systems to accelerate next-generation defense capabilities for the United States.",
  },
  {
    year: "2024",
    title: "Continued U.S. Growth",
    description:
      "Achieved over $15.8 billion in U.S. revenue with continued growth across all sectors, reinforcing BAE Systems, Inc. as a top-ten U.S. prime defense contractor.",
  },
];

const values = [
  {
    icon: "🛡️",
    title: "Trusted",
    description:
      "We are a trusted partner to the U.S. warfighter, delivering reliable solutions that protect our servicemen and women at home and abroad.",
  },
  {
    icon: "🚀",
    title: "Innovative",
    description:
      "We pioneer breakthrough technologies in electronic systems, cyber, autonomy, and space to keep America at the forefront of defense.",
  },
  {
    icon: "💪",
    title: "Bold",
    description:
      "We take on the most complex national security challenges with determination, delivering mission-critical solutions when our country needs them most.",
  },
  {
    icon: "🤝",
    title: "Inclusive",
    description:
      "We foster a diverse and inclusive workforce across the United States, recognizing that our greatest strength is our people and the perspectives they bring.",
  },
];

const leaders = [
  {
    initials: "TH",
    name: "Thomas Harrington",
    title: "President & CEO",
    color: "bg-navy-700",
    bio: "Over 30 years of leadership in the U.S. defense industry, guiding BAE Systems, Inc. through strategic growth and operational excellence.",
  },
  {
    initials: "MR",
    name: "Margaret Reeves",
    title: "Chief Financial Officer",
    color: "bg-accent-500",
    bio: "Oversees all financial operations for BAE Systems, Inc., ensuring fiscal discipline and sustainable growth across the U.S. business.",
  },
  {
    initials: "RK",
    name: "Rajesh Kapoor",
    title: "Chief Technology Officer",
    color: "bg-steel-600",
    bio: "Leads research and development across AI, cyber, electronic warfare, and next-generation defense platforms for U.S. programs.",
  },
  {
    initials: "CB",
    name: "Catherine Brooks",
    title: "Chief Operating Officer",
    color: "bg-navy-600",
    bio: "Manages day-to-day operations and program delivery across all BAE Systems, Inc. business units and U.S. facilities.",
  },
  {
    initials: "JM",
    name: "Jason Mitchell",
    title: "VP Electronic Systems",
    color: "bg-accent-600",
    bio: "Directs the Electronic Systems sector, delivering advanced electronic warfare, sensors, and precision munitions to the U.S. military.",
  },
  {
    initials: "DP",
    name: "Diana Patel",
    title: "VP Intelligence & Security",
    color: "bg-steel-500",
    bio: "Leads intelligence and security solutions supporting the U.S. intelligence community, Department of Defense, and federal civilian agencies.",
  },
];

const offices = [
  { city: "Arlington, VA", state: "Headquarters", flag: "🇺🇸" },
  { city: "Nashua, NH", state: "Electronic Systems", flag: "🇺🇸" },
  { city: "Sterling Heights, MI", state: "Combat Vehicles", flag: "🇺🇸" },
  { city: "San Diego, CA", state: "Ship Repair", flag: "🇺🇸" },
  { city: "Austin, TX", state: "Technology Solutions", flag: "🇺🇸" },
  { city: "Huntsville, AL", state: "Space & Mission Systems", flag: "🇺🇸" },
  { city: "Minneapolis, MN", state: "Weapon Systems", flag: "🇺🇸" },
  { city: "El Segundo, CA", state: "Space & Sensors", flag: "🇺🇸" },
  { city: "Merrimack, NH", state: "Electronic Combat Solutions", flag: "🇺🇸" },
];

const benefits = [
  {
    icon: "💰",
    title: "401(k) Matching",
    description:
      "BAE Systems, Inc. offers a competitive 401(k) retirement savings plan with generous company matching to help you build a secure financial future.",
  },
  {
    icon: "❤️",
    title: "Comprehensive Health Insurance",
    description:
      "Full medical, dental, and vision coverage for you and your family, including access to wellness programs and mental health resources.",
  },
  {
    icon: "📚",
    title: "Tuition Reimbursement",
    description:
      "We invest in your growth with tuition reimbursement for undergraduate and graduate programs at accredited U.S. colleges and universities.",
  },
  {
    icon: "🏖️",
    title: "Paid Time Off",
    description:
      "Generous paid time off including vacation days, personal days, and federal holidays so you can recharge and spend time with your family.",
  },
];

const certifications = ["ISO 9001", "ISO 27001", "AS9100", "CMMI Level 5"];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-dark-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Who We Are
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-navy-200 leading-relaxed">
            BAE Systems, Inc. is the U.S. subsidiary of BAE Systems plc and a
            top-ten prime defense contractor. Headquartered in Arlington,
            Virginia, we deliver advanced defense, aerospace, and security
            solutions to the United States Department of Defense, intelligence
            community, and federal agencies.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Company Overview
          </h2>
          <div className="w-12 h-1 bg-accent-500 mx-auto mt-3 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-navy-50 rounded-xl p-6">
              <p className="text-4xl font-heading font-bold text-accent-500">Top 10</p>
              <p className="mt-2 text-steel-700 text-sm">U.S. Prime Defense Contractor</p>
            </div>
            <div className="bg-navy-50 rounded-xl p-6">
              <p className="text-4xl font-heading font-bold text-accent-500">~35,000</p>
              <p className="mt-2 text-steel-700 text-sm">Employees Across the United States</p>
            </div>
            <div className="bg-navy-50 rounded-xl p-6">
              <p className="text-4xl font-heading font-bold text-accent-500">$15.8B+</p>
              <p className="mt-2 text-steel-700 text-sm">Annual U.S. Revenue</p>
            </div>
          </div>
          <p className="mt-10 text-steel-700 text-center max-w-3xl mx-auto leading-relaxed">
            BAE Systems, Inc. is a top-ten prime contractor headquartered in
            Arlington, Virginia. The company employs approximately 35,000 people
            across the United States, delivering a full range of products and
            services for air, land, sea, space, and cyber domains. Our work
            supports every branch of the U.S. armed forces and key federal
            agencies with solutions that protect national security.
          </p>
        </div>
      </section>

      {/* Our History Timeline */}
      <section className="bg-navy-50 py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Our History
          </h2>
          <div className="w-12 h-1 bg-accent-500 mx-auto mt-3 mb-14" />
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="sm:w-1/2" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center text-xs font-bold z-10">
                  {m.year}
                </div>
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <div className="bg-white rounded-lg shadow p-5 border border-steel-100">
                    <h3 className="text-lg font-heading font-semibold text-navy-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Our Values
          </h2>
          <div className="w-12 h-1 bg-accent-500 mx-auto mt-3" />
          <p className="text-center text-steel-700 mb-12 max-w-2xl mx-auto">
            Our values shape how we serve the United States and guide every
            decision we make as a defense partner.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-steel-100"
              >
                <span className="text-4xl" role="img" aria-label={v.title}>
                  {v.icon}
                </span>
                <h3 className="mt-4 text-xl font-heading font-semibold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-steel-50 py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Leadership Team
          </h2>
          <div className="w-12 h-1 bg-accent-500 mx-auto mt-3 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${l.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto`}
                >
                  {l.initials}
                </div>
                <h3 className="mt-4 text-lg font-heading font-semibold text-navy-900">
                  {l.name}
                </h3>
                <p className="text-accent-500 text-sm font-medium">
                  {l.title}
                </p>
                <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                  {l.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* U.S. Presence */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            U.S. Presence
          </h2>
          <div className="w-12 h-1 bg-accent-500 mx-auto mt-3" />
          <p className="text-center text-steel-700 mb-12 max-w-2xl mx-auto">
            With offices and facilities across the United States, BAE Systems,
            Inc. delivers critical defense capabilities from coast to coast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div
                key={o.city}
                className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-steel-100"
              >
                <span className="text-3xl" role="img" aria-label="United States">
                  {o.flag}
                </span>
                <div>
                  <p className="font-heading font-semibold text-navy-900">
                    {o.city}
                  </p>
                  <p className="text-sm text-steel-600">{o.state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="bg-navy-50 py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Culture &amp; Benefits
          </h2>
          <div className="w-12 h-1 bg-accent-500 mx-auto mt-3" />
          <p className="text-center text-steel-700 mb-12 max-w-2xl mx-auto">
            Discover what it&apos;s like to work at BAE Systems, Inc. and the
            benefits that support your career and well-being.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl" role="img" aria-label={b.title}>
                  {b.icon}
                </span>
                <h3 className="mt-3 text-lg font-heading font-semibold text-navy-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-dark-900 py-14 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            Certifications &amp; Standards
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <span
                key={c}
                className="bg-navy-700/60 rounded-lg px-5 py-3 text-sm font-medium text-white"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 lg:px-8 text-center">
        <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">
          Join Our Team
        </h2>
        <p className="text-steel-700 mb-6 max-w-xl mx-auto">
          Build your career with BAE Systems, Inc. and help protect those who
          protect us.
        </p>
        <Link
          to="/careers"
          className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
        >
          Join Our Team
        </Link>
      </section>
    </main>
  );
}
