import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => String(j.id) === id);

  if (!job) {
    return (
      <main className="py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">Job Not Found</h1>
        <p className="text-gray-600 mb-6">The position you're looking for doesn't exist or has been removed.</p>
        <Link to="/careers/jobs" className="text-accent-500 hover:underline font-medium">
          ← Back to All Jobs
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-dark-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/careers/jobs" className="text-gray-400 hover:text-white text-sm mb-4 inline-block">
            ← Back to All Jobs
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
            <span>📂 {job.department}</span>
            <span>📍 {job.location}</span>
            <span>💼 {job.type}</span>
            <span>📊 {job.experience} Level</span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 space-y-10">
            {/* About This Role */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">About This Role</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">Key Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Required Qualifications */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">Required Qualifications</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.requiredQualifications.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Preferred Qualifications */}
            {job.preferredQualifications && job.preferredQualifications.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">Preferred Qualifications</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.preferredQualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span key={s} className="bg-navy-100 text-navy-800 text-sm px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* About the Department */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">About the Department</h2>
              <p className="text-gray-700 leading-relaxed">
                The {job.department} division is at the forefront of innovation, delivering mission-critical solutions that protect and empower communities around the globe. Our teams collaborate across disciplines to solve the most complex challenges in defense and security.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">Benefits</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2"><span>🏥</span> Comprehensive Health, Dental & Vision</li>
                <li className="flex items-center gap-2"><span>💰</span> 401(k) with Company Match</li>
                <li className="flex items-center gap-2"><span>📚</span> Tuition Reimbursement</li>
                <li className="flex items-center gap-2"><span>🌴</span> Generous Paid Time Off</li>
                <li className="flex items-center gap-2"><span>🏠</span> Flexible & Hybrid Work Options</li>
                <li className="flex items-center gap-2"><span>✈️</span> Relocation Assistance</li>
              </ul>
            </div>

            {/* Apply Button */}
            <div className="pt-4">
              <Link
                to={`/careers/apply/${job.id}`}
                className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
              >
                Apply for This Position
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-8 space-y-4">
              <h3 className="text-lg font-bold text-navy-900 mb-2">Job Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500">Department</p>
                  <p className="font-medium text-navy-900">{job.department}</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium text-navy-900">{job.location}</p>
                </div>
                <div>
                  <p className="text-gray-500">Job Type</p>
                  <p className="font-medium text-navy-900">{job.type}</p>
                </div>
                <div>
                  <p className="text-gray-500">Experience Level</p>
                  <p className="font-medium text-navy-900">{job.experience}</p>
                </div>
                {job.salary && (
                  <div>
                    <p className="text-gray-500">Salary</p>
                    <p className="font-medium text-navy-900">{job.salary}</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-500">Remote Policy</p>
                  <p className="font-medium text-navy-900">{job.remote}</p>
                </div>
                {job.clearanceRequired && (
                  <div>
                    <p className="text-gray-500">Security Clearance</p>
                    <p className="font-medium text-navy-900">Required</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-500">Posted</p>
                  <p className="font-medium text-navy-900">{new Date(job.postedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
