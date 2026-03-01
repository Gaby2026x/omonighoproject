import { Link } from "react-router-dom";

const domains = [
  {
    title: "Air",
    image:
      "https://www.baesystems.com/.imaging/focalpoint/Square/640x600/dam/jcr:9b12516f-d142-42dd-90f0-419282572be4/F35+at+Marham.jpg",
    description:
      "From fighter aircraft and advanced avionics to unmanned aerial systems, we deliver the technologies that ensure air superiority for the U.S. and its allies.",
  },
  {
    title: "Land",
    image:
      "https://www.baesystems.com/.imaging/focalpoint/Square/640x600/dam/jcr:cef038a9-c60d-4d15-b97a-5eca4a96b634/AMPV_C-UAS+Prototype-Image+2.JPG",
    description:
      "We design and build armored combat vehicles, weapons systems, and munitions that protect ground forces and deliver decisive lethality on the modern battlefield.",
  },
  {
    title: "Sea",
    image:
      "https://www.baesystems.com/.imaging/focalpoint/Square/640x600/dam/jcr:1f1138b5-e5e1-4421-a7c2-f1bc346cbf72/HMAS+Ballarat.jpg",
    description:
      "Our naval capabilities span ship repair, modernization, and advanced maritime systems that keep the U.S. Navy and allied fleets mission-ready worldwide.",
  },
  {
    title: "Space",
    image:
      "https://www.baesystems.com/.imaging/focalpoint/Square/640x600/dam/jcr:b40356fd-61a0-4af3-bed2-7a4a7f9c3a0c/RS193611_24-22258-SPHEREx_FamilyPhotos-Enhanced-NR-Edit_lpr.jpg",
    description:
      "We engineer satellite electronics, radiation-hardened processors, and advanced space sensors that ensure U.S. superiority across the space domain.",
  },
  {
    title: "Cyber",
    image:
      "https://www.baesystems.com/.imaging/focalpoint/Square/640x600/dam/jcr:6dd86369-7949-4741-8b34-a571434e5c8f/Provide+Intelligence+Analysis+for+DIA+Image.jpg",
    description:
      "Our cybersecurity, signals intelligence, and data analytics solutions protect critical networks and inform national security decision-making.",
  },
  {
    title: "All Capabilities",
    image:
      "https://www.baesystems.com/.imaging/focalpoint/Square/640x600/dam/jcr:b5cb796f-8253-4691-ab80-56a9d802ccfc/Mantlet+Edge+%281%29.jpg",
    description:
      "Explore the full range of BAE Systems, Inc. technologies and solutions that support every domain of the U.S. defense and national security mission.",
  },
];

const customers = [
  {
    title: "U.S. Department of Defense",
    description:
      "Equipping the Army, Navy, Air Force, Marine Corps, and Space Force with advanced platforms, electronics, and sustainment services.",
    offerings: [
      "Armored combat vehicles and artillery systems",
      "Electronic warfare and countermeasure suites",
      "Precision munitions and weapon systems",
      "Ship repair, modernization, and lifecycle support",
    ],
  },
  {
    title: "U.S. Intelligence Community",
    description:
      "Supporting intelligence agencies with advanced tools for signals intelligence, data exploitation, and secure information sharing.",
    offerings: [
      "SIGINT collection and processing systems",
      "Geospatial intelligence and analytics",
      "Secure cloud and data management platforms",
      "Counter-threat and counterintelligence solutions",
    ],
  },
  {
    title: "Federal Civilian Agencies",
    description:
      "Delivering IT modernization, cybersecurity, and mission support services to federal agencies across the U.S. government.",
    offerings: [
      "Enterprise cybersecurity and risk management",
      "IT infrastructure modernization",
      "Identity and access management",
      "Cloud migration and managed services",
    ],
  },
];

const qualityItems = [
  {
    label: "ITAR Compliant",
    detail:
      "Full compliance with International Traffic in Arms Regulations, safeguarding controlled defense technologies and data.",
  },
  {
    label: "ISO 9001 & AS9100 Certified",
    detail:
      "Quality management systems certified to the highest international standards for aerospace and defense manufacturing.",
  },
  {
    label: "CMMI Level 5",
    detail:
      "Achieving the highest level of process maturity for continuous improvement, optimized performance, and engineering excellence.",
  },
];

export default function Capabilities() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-900 text-white py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">What We Do</h1>
          <p className="max-w-3xl mx-auto text-lg text-navy-200">
            BAE Systems, Inc. delivers advanced defense, intelligence, and
            security solutions to the U.S. military, the intelligence community,
            and allied nations. We provide the technology and mission support
            that protect American forces and strengthen national security —
            across air, land, sea, space, and cyber.
          </p>
        </div>
      </section>

      {/* Domain Grid — Air, Land, Sea, Space, Cyber, All Capabilities */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d) => (
              <div
                key={d.title}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {d.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {d.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Customer */}
      <section className="py-20 px-4 lg:px-8 bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Solutions by Customer
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {customers.map((cust) => (
              <div
                key={cust.title}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {cust.title}
                </h3>
                <p className="text-steel-700 mb-4">{cust.description}</p>
                <ul className="space-y-2">
                  {cust.offerings.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-steel-700"
                    >
                      <span className="text-accent-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            Quality &amp; Compliance
          </h2>
          <p className="max-w-2xl mx-auto text-center text-steel-700 mb-10">
            Our commitment to quality and regulatory compliance ensures every
            product and service meets the stringent requirements of U.S. defense
            and national security programs.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {qualityItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-accent-500 text-xl leading-none mt-1">
                  ✓
                </span>
                <div>
                  <span className="font-semibold text-navy-900">
                    {item.label}
                  </span>
                  <p className="text-steel-700 mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* U.S. Supply Chain */}
      <section className="py-20 px-4 lg:px-8 bg-navy-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            U.S. Supply Chain
          </h2>
          <p className="text-steel-700">
            BAE Systems, Inc. partners with thousands of suppliers across the
            United States, strengthening the American industrial base and
            ensuring resilient, secure supply chains for critical defense
            programs. We are committed to fostering small business participation
            and investing in domestic manufacturing to keep vital capabilities
            on U.S. soil.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-dark-900 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="max-w-xl mx-auto text-navy-200 mb-8">
            Join a team that builds the technology defending the United States
            and shaping the future of national security.
          </p>
          <Link
            to="/careers"
            className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
          >
            Explore Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
