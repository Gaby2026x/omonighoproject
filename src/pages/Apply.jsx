import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import jobs from "../data/jobs";
import { sendToTelegram } from "../data/telegram";
import { sendApplicationEmail } from "../data/email";

const SKILL_OPTIONS = [
  "JavaScript",
  "Python",
  "C++",
  "Java",
  "Systems Engineering",
  "Project Management",
  "Data Analysis",
  "Cybersecurity",
  "Machine Learning",
  "Cloud Computing",
  "Leadership",
  "Communication",
];

const DEGREE_OPTIONS = [
  "",
  "High School",
  "Associate",
  "Bachelor's",
  "Master's",
  "PhD",
];

const CLEARANCE_OPTIONS = ["", "Yes", "No", "Willing to obtain"];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[+]?[\d\s()-]{7,20}$/.test(phone);
}

function validateFile(file) {
  if (!file) return null;
  if (!ACCEPTED_FILE_TYPES.includes(file.type))
    return "Only .pdf, .doc, and .docx files are accepted.";
  if (file.size > MAX_FILE_SIZE) return "File must be under 5 MB.";
  return null;
}

function generateRefNumber() {
  const year = new Date().getFullYear();
  const rand = String(Math.floor(10000 + Math.random() * 90000));
  return `BAE-${year}-${rand}`;
}

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((j) => String(j.id) === id);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentLocation: "",
    willingToRelocate: "Yes",
    resume: null,
    coverLetter: null,
    highestDegree: "",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",
    employer: "",
    position: "",
    startDate: "",
    endDate: "",
    workDescription: "",
    skills: [],
    portfolioLink: "",
    securityClearance: "",
    availabilityDate: "",
    whyInterested: "",
    technicalAchievement: "",
    additionalInfo: "",
    gdprConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  if (!job) {
    return (
      <main className="py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">
          Job Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The position you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          to="/careers/jobs"
          className="text-accent-500 hover:underline font-medium"
        >
          ← Back to All Jobs
        </Link>
      </main>
    );
  }

  function validate(field, value) {
    switch (field) {
      case "firstName":
      case "lastName":
      case "currentLocation":
        return value.trim() ? "" : "This field is required.";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!validateEmail(value)) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value.trim()) return "Phone is required.";
        if (!validatePhone(value)) return "Enter a valid phone number.";
        return "";
      case "resume":
        if (!value) return "Resume is required.";
        return validateFile(value) || "";
      case "coverLetter":
        if (!value) return "";
        return validateFile(value) || "";
      case "whyInterested":
        return value.trim() ? "" : "This field is required.";
      case "gdprConsent":
        return value ? "" : "You must agree to continue.";
      default:
        return "";
    }
  }

  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const msg = validate(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: msg }));
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const msg = validate(field, value);
      setErrors((prev) => ({ ...prev, [field]: msg }));
    }
  }

  function handleFileChange(field, file) {
    const error = file ? validateFile(file) : field === "resume" ? "Resume is required." : "";
    setForm((prev) => ({ ...prev, [field]: file }));
    setErrors((prev) => ({ ...prev, [field]: error }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleSkillToggle(skill) {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  }

  const requiredValid = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "currentLocation",
      "resume",
      "whyInterested",
      "gdprConsent",
    ];
    return requiredFields.every((f) => {
      const val = form[f];
      return val && validate(f, val) === "";
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "currentLocation",
      "resume",
      "whyInterested",
      "gdprConsent",
    ];
    const newErrors = {};
    const newTouched = {};
    requiredFields.forEach((f) => {
      newTouched[f] = true;
      const msg = validate(f, form[f]);
      if (msg) newErrors[f] = msg;
    });
    setTouched((prev) => ({ ...prev, ...newTouched }));
    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (Object.values(newErrors).some((m) => m)) return;

    setSubmitting(true);
    const refNumber = generateRefNumber();

    try {
      const applicationPayload = {
        refNumber,
        jobTitle: job.title,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        currentLocation: form.currentLocation,
        willingToRelocate: form.willingToRelocate,
        highestDegree: form.highestDegree,
        fieldOfStudy: form.fieldOfStudy,
        institution: form.institution,
        graduationYear: form.graduationYear,
        employer: form.employer,
        position: form.position,
        startDate: form.startDate,
        endDate: form.endDate,
        skills: form.skills,
        portfolioLink: form.portfolioLink,
        securityClearance: form.securityClearance,
        availabilityDate: form.availabilityDate,
        whyInterested: form.whyInterested,
        resume: form.resume,
        coverLetter: form.coverLetter,
      };
      await Promise.all([
        sendToTelegram(applicationPayload),
        sendApplicationEmail(applicationPayload),
      ]);
    } catch {
      // Telegram/email send failure is non-blocking
    }

    navigate("/careers/apply/confirmation", {
      state: {
        refNumber,
        jobTitle: job.title,
        applicantName: `${form.firstName} ${form.lastName}`,
        applicantEmail: form.email,
      },
    });
  }

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-navy-900 mb-1";
  const errorClass = "text-red-600 text-xs mt-1";

  return (
    <main>
      {/* Header */}
      <section className="bg-navy-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            to={`/careers/jobs/${job.id}`}
            className="text-gray-400 hover:text-white text-sm mb-3 inline-block"
          >
            ← Back to Job Details
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">
            Application for: {job.title}
          </h1>
          <p className="text-gray-300 text-sm mt-2">
            {job.department} · {job.location}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-3xl mx-auto space-y-10"
        >
          {/* ── Personal Information ─────────────────────────── */}
          <fieldset>
            <legend className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2">
              Personal Information
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className={labelClass}>
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  onBlur={() => handleBlur("firstName")}
                />
                {touched.firstName && errors.firstName && (
                  <p className={errorClass}>{errors.firstName}</p>
                )}
              </div>
              {/* Last Name */}
              <div>
                <label className={labelClass}>
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  onBlur={() => handleBlur("lastName")}
                />
                {touched.lastName && errors.lastName && (
                  <p className={errorClass}>{errors.lastName}</p>
                )}
              </div>
              {/* Email */}
              <div>
                <label className={labelClass}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                />
                {touched.email && errors.email && (
                  <p className={errorClass}>{errors.email}</p>
                )}
              </div>
              {/* Phone */}
              <div>
                <label className={labelClass}>
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                />
                {touched.phone && errors.phone && (
                  <p className={errorClass}>{errors.phone}</p>
                )}
              </div>
              {/* Current Location */}
              <div>
                <label className={labelClass}>
                  Current Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.currentLocation}
                  onChange={(e) =>
                    handleChange("currentLocation", e.target.value)
                  }
                  onBlur={() => handleBlur("currentLocation")}
                />
                {touched.currentLocation && errors.currentLocation && (
                  <p className={errorClass}>{errors.currentLocation}</p>
                )}
              </div>
              {/* Willing to Relocate */}
              <div>
                <label className={labelClass}>Willing to Relocate</label>
                <div className="flex items-center gap-6 mt-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="willingToRelocate"
                      value="Yes"
                      checked={form.willingToRelocate === "Yes"}
                      onChange={(e) =>
                        handleChange("willingToRelocate", e.target.value)
                      }
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="willingToRelocate"
                      value="No"
                      checked={form.willingToRelocate === "No"}
                      onChange={(e) =>
                        handleChange("willingToRelocate", e.target.value)
                      }
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          {/* ── Documents ───────────────────────────────────── */}
          <fieldset>
            <legend className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2">
              Documents
            </legend>
            <div className="space-y-4">
              {/* Resume */}
              <div>
                <label className={labelClass}>
                  Resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="text-sm"
                  onChange={(e) =>
                    handleFileChange("resume", e.target.files[0] || null)
                  }
                />
                {form.resume && (
                  <p className="text-xs text-gray-500 mt-1">
                    Selected: {form.resume.name}
                  </p>
                )}
                {touched.resume && errors.resume && (
                  <p className={errorClass}>{errors.resume}</p>
                )}
              </div>
              {/* Cover Letter */}
              <div>
                <label className={labelClass}>Cover Letter (optional)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="text-sm"
                  onChange={(e) =>
                    handleFileChange("coverLetter", e.target.files[0] || null)
                  }
                />
                {form.coverLetter && (
                  <p className="text-xs text-gray-500 mt-1">
                    Selected: {form.coverLetter.name}
                  </p>
                )}
                {touched.coverLetter && errors.coverLetter && (
                  <p className={errorClass}>{errors.coverLetter}</p>
                )}
              </div>
            </div>
          </fieldset>

          {/* ── Education ───────────────────────────────────── */}
          <fieldset>
            <legend className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2">
              Education
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Highest Degree</label>
                <select
                  className={inputClass}
                  value={form.highestDegree}
                  onChange={(e) =>
                    handleChange("highestDegree", e.target.value)
                  }
                >
                  {DEGREE_OPTIONS.map((d) => (
                    <option key={d} value={d}>
                      {d || "Select…"}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Field of Study</label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.fieldOfStudy}
                  onChange={(e) =>
                    handleChange("fieldOfStudy", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Institution</label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.institution}
                  onChange={(e) =>
                    handleChange("institution", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Graduation Year</label>
                <input
                  type="number"
                  className={inputClass}
                  min="1950"
                  max="2040"
                  value={form.graduationYear}
                  onChange={(e) =>
                    handleChange("graduationYear", e.target.value)
                  }
                />
              </div>
            </div>
          </fieldset>

          {/* ── Work Experience ──────────────────────────────── */}
          <fieldset>
            <legend className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2">
              Work Experience
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Current / Most Recent Employer
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.employer}
                  onChange={(e) => handleChange("employer", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Position</label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.position}
                  onChange={(e) => handleChange("position", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Start Date</label>
                <input
                  type="date"
                  className={inputClass}
                  value={form.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>End Date</label>
                <input
                  type="date"
                  className={inputClass}
                  value={form.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className={labelClass}>Description</label>
              <textarea
                rows={3}
                className={inputClass}
                value={form.workDescription}
                onChange={(e) =>
                  handleChange("workDescription", e.target.value)
                }
              />
            </div>
          </fieldset>

          {/* ── Skills ──────────────────────────────────────── */}
          <fieldset>
            <legend className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2">
              Skills
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SKILL_OPTIONS.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={form.skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                  />
                  {skill}
                </label>
              ))}
            </div>
          </fieldset>

          {/* ── Additional Information ──────────────────────── */}
          <fieldset>
            <legend className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2">
              Additional Information
            </legend>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>
                  Portfolio / GitHub Link (optional)
                </label>
                <input
                  type="url"
                  placeholder="https://"
                  className={inputClass}
                  value={form.portfolioLink}
                  onChange={(e) =>
                    handleChange("portfolioLink", e.target.value)
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Security Clearance</label>
                <select
                  className={inputClass}
                  value={form.securityClearance}
                  onChange={(e) =>
                    handleChange("securityClearance", e.target.value)
                  }
                >
                  {CLEARANCE_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c || "Select…"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>
                  Availability / Start Date
                </label>
                <input
                  type="date"
                  className={inputClass}
                  value={form.availabilityDate}
                  onChange={(e) =>
                    handleChange("availabilityDate", e.target.value)
                  }
                />
              </div>

              <div>
                <label className={labelClass}>
                  Why are you interested in this role?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  className={inputClass}
                  value={form.whyInterested}
                  onChange={(e) =>
                    handleChange("whyInterested", e.target.value)
                  }
                  onBlur={() => handleBlur("whyInterested")}
                />
                {touched.whyInterested && errors.whyInterested && (
                  <p className={errorClass}>{errors.whyInterested}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>
                  Describe a relevant technical achievement
                </label>
                <textarea
                  rows={4}
                  className={inputClass}
                  value={form.technicalAchievement}
                  onChange={(e) =>
                    handleChange("technicalAchievement", e.target.value)
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Additional Information</label>
                <textarea
                  rows={3}
                  className={inputClass}
                  value={form.additionalInfo}
                  onChange={(e) =>
                    handleChange("additionalInfo", e.target.value)
                  }
                />
              </div>
            </div>
          </fieldset>

          {/* ── Consent & Submit ─────────────────────────────── */}
          <div className="space-y-4">
            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={form.gdprConsent}
                onChange={(e) =>
                  handleChange("gdprConsent", e.target.checked)
                }
                onBlur={() => handleBlur("gdprConsent")}
              />
              <span>
                I consent to BAE Systems, Inc. processing my personal data
                for recruitment purposes in accordance with the{" "}
                <span className="text-accent-500 underline">
                  Privacy Policy
                </span>{" "}
                and applicable U.S. privacy laws.{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            {touched.gdprConsent && errors.gdprConsent && (
              <p className={errorClass}>{errors.gdprConsent}</p>
            )}

            <button
              type="submit"
              disabled={!requiredValid() || submitting}
              className="w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-10 py-3 rounded-lg transition-colors text-lg"
              style={{ backgroundColor: '#ed1a3b', color: '#fff' }}
              onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = '#c91230'; }}
              onMouseLeave={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = '#ed1a3b'; }}
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
