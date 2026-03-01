import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-navy-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Please
          check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-block bg-dark-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
