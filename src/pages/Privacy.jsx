import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Introduction</h2>
        <p className="text-gray-600 mb-6">
          BAE Systems, Inc. ("we", "us", or "our") is committed to protecting the
          privacy and security of your personal information. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-600 mb-6">
          We may collect personal information that you voluntarily provide when
          you use our website, including your name, email address, phone number,
          and any other information you choose to provide through our contact
          forms, job applications, or newsletter sign-ups.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-6">
          We use the information we collect to respond to your inquiries, process
          job applications, send marketing communications (where you have opted
          in), improve our website and services, and comply with legal
          obligations.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Data Sharing and Disclosure
        </h2>
        <p className="text-gray-600 mb-6">
          We do not sell your personal information. We may share your data with
          trusted third-party service providers who assist us in operating our
          website and conducting our business, provided they agree to keep your
          information confidential. We may also disclose information where
          required by law.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Cookies and Tracking
        </h2>
        <p className="text-gray-600 mb-6">
          Our website may use cookies and similar tracking technologies to
          enhance your browsing experience, analyze site traffic, and understand
          where our visitors are coming from. You can control cookies through
          your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Security</h2>
        <p className="text-gray-600 mb-6">
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over the
          Internet is 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights</h2>
        <p className="text-gray-600 mb-6">
          Depending on your jurisdiction, you may have the right to access,
          correct, delete, or port your personal data, as well as the right to
          object to or restrict certain processing. To exercise these rights,
          please contact us at{" "}
          <a
            href="mailto:privacy@baesystems.com"
            className="text-accent-500 hover:underline"
          >
            privacy@baesystems.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:privacy@baesystems.com"
            className="text-accent-500 hover:underline"
          >
            privacy@baesystems.com
          </a>{" "}
          or visit our{" "}
          <Link to="/contact" className="text-accent-500 hover:underline">
            Contact page
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
