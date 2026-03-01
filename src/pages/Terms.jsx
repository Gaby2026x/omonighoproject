import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-300">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-6">
          By accessing and using the BAE Systems website, you accept and agree to
          be bound by these Terms of Service. If you do not agree with any part
          of these terms, you must not use our website.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Use of Website
        </h2>
        <p className="text-gray-600 mb-6">
          You may use our website for lawful purposes only. You agree not to use
          the site in any way that could damage, disable, or impair the website
          or interfere with any other party's use. Unauthorized access or
          attempted access to any part of the website is strictly prohibited.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Intellectual Property
        </h2>
        <p className="text-gray-600 mb-6">
          All content on this website, including text, graphics, logos, and
          software, is the property of BAE Systems, Inc. or its licensors and is
          protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works without our prior
          written consent.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Disclaimer of Warranties
        </h2>
        <p className="text-gray-600 mb-6">
          This website is provided on an "as is" and "as available" basis. BAE
          Systems makes no warranties, expressed or implied, regarding the
          accuracy, completeness, or reliability of any content on this site. We
          do not guarantee that the website will be uninterrupted or error-free.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-6">
          To the fullest extent permitted by law, BAE Systems shall not be liable
          for any indirect, incidental, special, or consequential damages arising
          out of or in connection with your use of this website, even if advised
          of the possibility of such damages.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Third-Party Links
        </h2>
        <p className="text-gray-600 mb-6">
          Our website may contain links to third-party websites. These links are
          provided for your convenience only. BAE Systems does not endorse or
          assume responsibility for the content or practices of any linked
          third-party sites.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Governing Law
        </h2>
        <p className="text-gray-600 mb-6">
          These Terms of Service are governed by and construed in accordance with
          the laws of the Commonwealth of Virginia, United States. Any disputes arising from or relating to
          these terms shall be subject to the exclusive jurisdiction of the
          federal and state courts located in the Commonwealth of Virginia.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you have questions about these Terms of Service, please contact us
          at{" "}
          <a
            href="mailto:legal@baesystems.com"
            className="text-accent-500 hover:underline"
          >
            legal@baesystems.com
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
