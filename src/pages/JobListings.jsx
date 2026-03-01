import { useState } from "react";
import { Link } from "react-router-dom";
import jobs, { departments, locations } from "../data/jobs";

const experienceLevels = ["Entry", "Mid", "Senior"];
const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

export default function JobListings() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [sort, setSort] = useState("recent");

  const filtered = jobs
    .filter((job) => {
      const q = search.toLowerCase();
      if (q && !(
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q)
      )) return false;
      if (department && job.department !== department) return false;
      if (location && job.location !== location) return false;
      if (experience && job.experience !== experience) return false;
      if (jobType && job.type !== jobType) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      return new Date(b.postedDate) - new Date(a.postedDate);
    });

  return (
    <main>
      {/* Header */}
      <section className="bg-dark-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Job Listings</h1>
          <p className="text-gray-300 text-lg">Explore open positions at BAE Systems. All backgrounds welcome — military, civilian, and career changers.</p>
        </div>
      </section>

      {/* Hiring Notice */}
      <div className="bg-green-700 text-white py-3 px-4 text-center text-sm sm:text-base font-medium">
        📢 <strong>Now Hiring:</strong> Job applications are open for unemployed individuals. Part-time and remote options available.
      </div>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search & Filters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 space-y-4">
            <input
              type="text"
              placeholder="Search by keyword…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">All Departments</option>
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">All Locations</option>
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">All Experience Levels</option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">All Job Types</option>
                {jobTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="recent">Most Recent</option>
                <option value="title">Title A-Z</option>
              </select>
            </div>
          </div>

          {/* Result Count */}
          <p className="text-gray-600 mb-6 font-medium">{filtered.length} position{filtered.length !== 1 ? "s" : ""} found</p>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-navy-900 mb-1">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  <span>📂 {job.department}</span>
                  <span>📍 {job.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-navy-100 text-navy-800 px-2 py-1 rounded">{job.type}</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{job.experience}</span>
                  {job.remote !== "On-site" && (
                    <span className={`text-xs px-2 py-1 rounded ${job.remote === "Remote" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}>{job.remote}</span>
                  )}
                  {job.salary && (
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">{job.salary}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-2">{job.description}</p>
                <Link
                  to={`/careers/jobs/${job.id}`}
                  className="self-start bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">No positions match your search criteria. Try adjusting your filters.</p>
          )}
        </div>
      </section>
    </main>
  );
}
