import { useLocation, Link } from "react-router-dom";

export default function ApplicationConfirmation() {
  const { state } = useLocation();

  if (!state) {
    return (
      <main className="py-20 px-4 text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-navy-900 mb-4">
          Thank You for Your Application!
        </h1>
        <p className="text-gray-600 mb-8">
          Your application has been received. We appreciate your interest in
          joining BAE Systems.
        </p>
        <Link
          to="/careers/jobs"
          className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Explore Open Positions
        </Link>
      </main>
    );
  }

  const { refNumber, jobTitle, applicantName, applicantEmail } = state;

  const timeline = [
    {
      step: "Application Received",
      description: "Your application has been successfully submitted.",
      icon: "📩",
      active: true,
    },
    {
      step: "Under Review",
      description:
        "Our recruitment team will review your qualifications within 1–3 business days.",
      icon: "🔍",
      active: false,
    },
    {
      step: "Interview",
      description:
        "Shortlisted candidates will be emailed to commence an interview process online.",
      icon: "🎤",
      active: false,
    },
    {
      step: "Decision",
      description:
        "A final decision will be communicated to all applicants.",
      icon: "📧",
      active: false,
    },
  ];

  return (
    <main className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Thank You for Your Application!
          </h1>
          <p className="text-gray-600 text-lg">
            Your application has been successfully submitted to BAE Systems.
          </p>
        </div>

        {/* Application Details */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-bold text-navy-900 mb-4">
            Application Details
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Reference Number</span>
              <span className="font-mono font-semibold text-navy-900">
                {refNumber}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Position</span>
              <span className="font-medium text-navy-900">{jobTitle}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Applicant</span>
              <span className="font-medium text-navy-900">
                {applicantName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Confirmation sent to</span>
              <span className="font-medium text-navy-900">
                {applicantEmail}
              </span>
            </div>
          </div>
        </div>

        {/* What's Next Timeline */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            What&apos;s Next
          </h2>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div key={item.step} className="flex gap-4">
                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${
                      item.active
                        ? "bg-green-100 ring-2 ring-green-500"
                        : "bg-gray-100"
                    }`}
                  >
                    {item.icon}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full min-h-[2rem] bg-gray-200" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3
                    className={`font-semibold ${
                      item.active ? "text-green-700" : "text-navy-900"
                    }`}
                  >
                    {item.step}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-navy-50 border border-navy-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-bold text-navy-900 mb-2">
            Have Questions?
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            If you have any questions about your application, please don&apos;t
            hesitate to reach out.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:admin@baesystems.careers"
                className="text-accent-500 hover:underline"
              >
                admin@baesystems.careers
              </a>
            </li>
            <li>📞 Phone: +1 (813) 489-4533</li>
            <li>
              🔖 Please reference:{" "}
              <span className="font-mono font-semibold">{refNumber}</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/careers/jobs"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Explore Other Positions
          </Link>
        </div>
      </div>
    </main>
  );
}
