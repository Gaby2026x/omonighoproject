import { useState } from "react";
import { Link } from "react-router-dom";

const reports = [
  {
    title: "2024 Annual Report",
    description:
      "Full-year financial results, strategic highlights, and forward outlook for BAE Systems plc, including U.S. operations performance.",
    type: "Annual Report",
  },
  {
    title: "FY2024 Earnings Release",
    description:
      "Year-end results detailing revenue growth, operating margins, order backlog, and segment performance across all business areas.",
    type: "Earnings Release",
  },
  {
    title: "H1 2024 Interim Results",
    description:
      "First-half financial performance with updates on defense contract awards, U.S. segment revenue, and revised full-year guidance.",
    type: "Interim Report",
  },
];

const boardMembers = [
  { name: "Charles Woodburn", title: "Chief Executive" },
  { name: "Brad Greve", title: "Chief Financial Officer" },
  { name: "Sir Roger Carr", title: "Chairman" },
  { name: "Tom Arseneault", title: "President & CEO, BAE Systems, Inc." },
];

const faqs = [
  {
    question: "How do I buy BAESY shares in the United States?",
    answer:
      "U.S. investors can purchase BAE Systems American Depositary Shares (ADSs) under the ticker symbol BAESY on the OTC market through any major U.S. brokerage, including Fidelity, Charles Schwab, and TD Ameritrade. Each ADS represents four ordinary shares of BAE Systems plc.",
  },
  {
    question: "What is the difference between BA. and BAESY?",
    answer:
      "BA. is the ticker for BAE Systems plc ordinary shares traded on the London Stock Exchange in British pounds. BAESY is the ticker for American Depositary Shares traded on the U.S. OTC market in U.S. dollars. Each BAESY ADS represents four BA. ordinary shares.",
  },
  {
    question: "When does BAE Systems pay dividends?",
    answer:
      "BAE Systems typically pays dividends twice per year. The interim dividend is generally paid in December, and the final dividend is paid in June following approval at the Annual General Meeting. U.S. ADS holders receive dividends in U.S. dollars, converted from British pounds by the depositary bank.",
  },
  {
    question: "Where can I find SEC filings for BAE Systems?",
    answer:
      "As a foreign private issuer, BAE Systems files annual reports on Form 20-F with the U.S. Securities and Exchange Commission. These filings are available on the SEC's EDGAR database and through our Investor Relations page.",
  },
  {
    question: "How do I contact the Investor Relations team from the U.S.?",
    answer:
      "U.S.-based investors can reach our Investor Relations team by email at investors@baesystems.com or by calling +1 (703) 312-6100 during Eastern Time business hours, Monday through Friday.",
  },
];

export default function Investors() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investor Relations
          </h1>
          <div className="w-12 h-1 bg-accent-500 mx-auto mt-3 mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Financial performance, corporate governance, and shareholder
            resources for BAE Systems plc — serving U.S. and global investors.
          </p>
          <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
            BAE Systems plc is listed on the London Stock Exchange (LSE:&nbsp;BA.)
            with American Depositary Shares trading on the U.S. OTC market
            (OTC:&nbsp;BAESY).
          </p>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
          Financial Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {report.type}
              </span>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {report.title}
              </h3>
              <p className="text-gray-600 mb-4">{report.description}</p>
              <a
                href="#"
                className="text-accent-500 font-semibold hover:underline"
              >
                Download PDF →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Stock Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
            Stock Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* US OTC */}
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-lg font-bold text-navy-900 mb-4 text-center">
                U.S. OTC Market
              </h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-sm text-gray-500">Ticker</p>
                  <p className="text-2xl font-bold text-accent-500">BAESY</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ADS Price (USD)</p>
                  <p className="text-2xl font-bold text-navy-900">$67.50</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Market Cap (USD)</p>
                  <p className="text-2xl font-bold text-navy-900">$49.2B</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">52-Week Range</p>
                  <p className="text-2xl font-bold text-navy-900">
                    $48.10 – $72.85
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">
                Each ADS represents 4 ordinary shares
              </p>
            </div>
            {/* LSE */}
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-lg font-bold text-navy-900 mb-4 text-center">
                London Stock Exchange
              </h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-sm text-gray-500">Ticker</p>
                  <p className="text-2xl font-bold text-accent-500">BA.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Share Price (GBP)</p>
                  <p className="text-2xl font-bold text-navy-900">£13.42</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Market Cap (GBP)</p>
                  <p className="text-2xl font-bold text-navy-900">£38.7B</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">52-Week Range</p>
                  <p className="text-2xl font-bold text-navy-900">
                    £9.80 – £14.10
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            Data shown is illustrative and may not reflect current market
            values.
          </p>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
          Corporate Governance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shareholder Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
            Shareholder Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Annual General Meeting
              </h3>
              <p className="text-gray-600">
                The 2025 Annual General Meeting is scheduled for{" "}
                <span className="font-semibold">May 8, 2025</span>. U.S.-based
                shareholders holding ADSs may instruct the depositary bank to
                vote on their behalf or submit a proxy through their broker.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Dividend Information
              </h3>
              <p className="text-gray-600">
                The final dividend for FY2024 of{" "}
                <span className="font-semibold">17.8p per ordinary share</span>{" "}
                is payable in June 2025. U.S. ADS holders receive dividends in
                U.S. dollars, converted by the depositary bank and paid net of
                applicable withholding taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
          Investor FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-navy-900 hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-xl ml-4">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Investor Relations Contact
          </h2>
          <p className="text-gray-300 mb-2">
            Email:{" "}
            <a
              href="mailto:investors@baesystems.com"
              className="text-accent-400 hover:underline"
            >
              investors@baesystems.com
            </a>
          </p>
          <p className="text-gray-300 mb-4">
            U.S. Investor Relations: +1 (703) 312-6100
          </p>
          <p className="text-sm text-gray-400">
            BAE Systems, Inc. — 1101 Wilson Blvd, Arlington, VA 22209
          </p>
        </div>
      </section>
    </div>
  );
}
