import { Link } from 'react-router-dom';

const companyLinks = [
  { label: 'Who We Are', href: 'https://www.baesystems.com/en-us/our-company' },
  { label: 'What We Do', href: 'https://www.baesystems.com/en-us/what-we-do' },
  { label: 'Our Businesses', href: 'https://www.baesystems.com/en-us/our-businesses' },
  { label: 'Newsroom', href: 'https://www.baesystems.com/en-us/newsroom' },
];

const careerLinks = [
  { label: 'Job Openings', to: '/careers/jobs' },
  { label: 'Why BAE Systems', href: 'https://www.baesystems.com/en-us/careers' },
  { label: 'Life at BAE Systems', href: 'https://www.baesystems.com/en-us/careers' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: 'https://www.baesystems.com/en-us/privacy' },
  { label: 'Terms of Service', href: 'https://www.baesystems.com/en-us/terms' },
  { label: 'Cookie Policy', href: 'https://www.baesystems.com/en-us/cookie-policy' },
  { label: 'Accessibility', href: 'https://www.baesystems.com/en-us/accessibility' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      {/* Red accent bar */}
      <div className="h-1 bg-accent-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://www.baesystems.com/.resources/bae-systems-theme/img/logo-red.svg"
                alt="BAE Systems"
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              BAE Systems, Inc. is the U.S. subsidiary of BAE Systems plc, providing defense, aerospace, and security solutions to the United States Department of Defense, intelligence community, and civilian agencies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/company/bae-systems-usa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-accent-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/BAESystemsInc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="text-gray-500 hover:text-accent-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@BAESystemsInc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-500 hover:text-accent-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Careers</h3>
            <ul className="space-y-2">
              {careerLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <p>BAE Systems, Inc.<br />1300 N 17th Street, Suite 400<br />Arlington, VA 22209</p>
              <p>
                <a href="tel:+17033126100" className="hover:text-accent-400 transition-colors">
                  +1 (703) 312-6100
                </a>
              </p>
              <p>
                <a href="mailto:info@baesystems.com" className="hover:text-accent-400 transition-colors">
                  info@baesystems.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500">
            <p>&copy; {new Date().getFullYear()} BAE Systems, Inc. All rights reserved.</p>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <p>BAE Systems, Inc. is the U.S. subsidiary of BAE Systems plc</p>
          </div>
          <a href="https://www.baesystems.com/en/investors" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent-400 transition-colors">
            Investor Relations
          </a>
        </div>
      </div>
    </footer>
  );
}
