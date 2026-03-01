import { Link } from "react-router-dom";

const sectors = [
  {
    id: "electronic-systems",
    title: "Electronic Systems",
    location: "Nashua, New Hampshire",
    description:
      "Based in Nashua, New Hampshire, Electronic Systems is a global leader in the design, development, and production of advanced defense electronics. The sector delivers mission-critical solutions across a broad portfolio that includes flight and engine controls, electronic warfare systems, precision guidance and navigation, and command, control, communications, computers, intelligence, surveillance, and reconnaissance (C4ISR) technologies. Electronic Systems provides the U.S. military and its allies with the electronic backbone needed to maintain superiority in contested environments worldwide.",
    programs: [
      "F-35 Lightning II Electronic Warfare Suite — Integrated radar warning, electronic countermeasures, and situational awareness for the Joint Strike Fighter",
      "APKWS Laser-Guided Rockets — Low-cost precision-guided munitions converting unguided rockets into smart weapons for rotary- and fixed-wing aircraft",
      "EPAWSS (Eagle Passive Active Warning Survivability System) — Next-generation electronic protection system for the F-15 Eagle fleet",
      "Military GPS Anti-Jam Technology — Advanced navigation solutions ensuring assured positioning in GPS-denied environments",
      "Digital Engine Controls — Full-authority digital engine control systems for U.S. military fighter and transport aircraft",
    ],
    highlights: [
      "Advanced electronic warfare and radar warning receiver technologies protecting U.S. and allied warfighters",
      "Precision-guided munitions and targeting systems delivering surgical strike capabilities",
      "Next-generation C4ISR solutions integrating sensors, networks, and processing at the tactical edge",
      "Power and energy management systems supporting electrification of military platforms",
    ],
  },
  {
    id: "intelligence-security",
    title: "Intelligence & Security",
    location: "Arlington, Virginia",
    description:
      "Headquartered in Arlington, Virginia, Intelligence & Security delivers advanced technology solutions that help the U.S. government and its allies collect, analyze, and act on critical intelligence. The sector provides full-spectrum cyber operations, intelligence analysis, systems engineering and integration, mission IT and cloud services, and counter-threat solutions to the Department of Defense, the U.S. Intelligence Community, and federal civilian agencies. Intelligence & Security operates at the intersection of mission expertise and cutting-edge technology to safeguard national security.",
    programs: [
      "U.S. Intelligence Community Support — Large-scale intelligence analysis, processing, and dissemination for national security agencies",
      "Department of Defense Cyber Operations — Offensive and defensive cyber capabilities protecting critical military networks and infrastructure",
      "Geospatial Intelligence (GEOINT) Solutions — Advanced imagery analysis and geospatial data exploitation for the National Geospatial-Intelligence Agency",
      "Signals Intelligence (SIGINT) Programs — Collection, processing, and analysis of electronic signals supporting national intelligence priorities",
      "Mission IT and Cloud Services — Secure cloud migration and enterprise IT modernization for defense and intelligence customers",
    ],
    highlights: [
      "Full-spectrum cyber operations spanning offensive, defensive, and exploitation capabilities",
      "AI-driven intelligence analysis and machine learning for rapid data processing and threat identification",
      "Secure cloud architecture and zero-trust frameworks enabling digital transformation across the federal government",
      "Counter-threat solutions detecting and neutralizing insider threats, foreign intelligence, and advanced persistent threats",
    ],
  },
  {
    id: "platforms-services",
    title: "Platforms & Services",
    location: "Sterling Heights, Michigan",
    description:
      "Headquartered in Sterling Heights, Michigan, Platforms & Services is the preeminent provider of armored combat vehicles, weapons systems, and ship repair services for the U.S. Armed Forces. The sector designs, manufactures, and sustains a broad range of ground combat platforms, munitions, and ordnance while also operating some of the nation's most critical naval shipyards. Platforms & Services ensures that American warfighters on land and at sea have the most capable and survivable equipment available.",
    programs: [
      "Armored Multi-Purpose Vehicle (AMPV) — Replacing the Vietnam-era M113 family with a modern, survivable tracked vehicle for the U.S. Army",
      "Bradley Fighting Vehicle Upgrade — Continuous modernization of the Army's primary infantry fighting vehicle with enhanced lethality, protection, and electronics",
      "M777 Lightweight Howitzer — The U.S. military's primary towed 155mm artillery system, delivering long-range precision fires",
      "M109A7 Paladin Self-Propelled Howitzer — Next-generation self-propelled artillery providing enhanced shoot-and-move capability for armored brigade combat teams",
      "Naval Ship Repair and Modernization — Full-service maintenance, repair, and overhaul of U.S. Navy surface combatants at shipyards in Norfolk, San Diego, Jacksonville, Pearl Harbor, and Mayport",
    ],
    highlights: [
      "Advanced composite and reactive armor systems delivering best-in-class survivability for vehicle crews",
      "Modular open-systems architecture enabling rapid technology insertion and vehicle upgrades",
      "Comprehensive ordnance and munitions manufacturing supporting U.S. military readiness",
      "Multi-coast naval ship repair capability sustaining fleet readiness for the U.S. Navy",
    ],
  },
  {
    id: "space-mission-systems",
    title: "Space & Mission Systems",
    location: "Multiple U.S. Locations",
    description:
      "Space & Mission Systems operates across multiple U.S. locations, providing mission-critical space electronics, satellite payloads, and resilient space systems for the U.S. military, intelligence agencies, and civil space programs. The sector is a recognized leader in radiation-hardened electronics, space-based sensors, and satellite communication technologies that underpin America's national security space architecture. From missile warning to GPS navigation, Space & Mission Systems delivers the advanced technologies that ensure U.S. dominance in the space domain.",
    programs: [
      "GPS III Satellite Navigation Payloads — Next-generation navigation technology delivering improved accuracy, anti-jam capability, and cybersecurity for the GPS constellation",
      "Missile Warning Systems — Space-based infrared sensors providing early warning detection of ballistic missile launches worldwide",
      "Space Situational Awareness — Ground- and space-based systems tracking objects in orbit and protecting critical U.S. space assets",
      "BPSK/QPSK Space Communication Modems — High-performance modems enabling secure, resilient satellite-to-ground data links",
      "Radiation-Hardened (Rad-Hard) Electronics — Specialized microelectronics designed to operate reliably in the harsh radiation environment of space",
    ],
    highlights: [
      "Industry-leading radiation-hardened electronics ensuring reliable operation of satellites and space payloads",
      "Advanced infrared sensor technology providing persistent global missile warning and defense",
      "Next-generation GPS payloads enhancing positioning, navigation, and timing for military and civilian users",
      "Resilient space communications architectures supporting the U.S. Space Force and combatant commands",
    ],
  },
];

export default function Businesses() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-dark-900 to-dark-950 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Businesses
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-navy-100 leading-relaxed">
            BAE Systems, Inc., the U.S. subsidiary of BAE Systems plc, is a top
            ten defense contractor serving the Department of Defense, the
            Intelligence Community, and allied nations. Our four sectors deliver
            advanced technology solutions across electronic systems, intelligence
            and security, combat platforms, and space to protect those who
            protect us.
          </p>
        </div>
      </section>

      {/* Business Sector Sections */}
      {sectors.map((sector, index) => (
        <section
          key={sector.id}
          className={index % 2 === 0 ? "bg-white" : "bg-steel-50"}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 border-l-4 border-accent-500 pl-4 mb-2">
              {sector.title}
            </h2>
            <p className="text-steel-500 text-sm font-semibold uppercase tracking-wide pl-5 mb-6">
              {sector.location}
            </p>

            <p className="text-steel-700 text-lg leading-relaxed mb-10 max-w-4xl">
              {sector.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Key Programs */}
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold text-navy-800 mb-4">
                  Key Programs
                </h3>
                <ul className="space-y-3">
                  {sector.programs.map((program) => (
                    <li
                      key={program}
                      className="flex items-start gap-3 text-steel-700"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Highlights */}
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold text-navy-800 mb-4">
                  Technology Highlights
                </h3>
                <ul className="space-y-3">
                  {sector.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-steel-700"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Partner With Us CTA */}
      <section className="bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="max-w-2xl mx-auto text-navy-100 text-lg mb-8">
            Whether you represent the U.S. Department of Defense, a federal
            agency, or an innovative technology partner, BAE Systems, Inc. is
            ready to collaborate on the solutions that will define the future of
            national defense and security.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
