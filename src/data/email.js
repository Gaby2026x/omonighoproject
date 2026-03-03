export async function sendApplicationEmail(applicationData) {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not configured. Skipping email notification.");
      return false;
    }

    const skills = applicationData.skills?.length
      ? applicationData.skills.join(", ")
      : "None selected";

    const message = [
      `Reference: ${applicationData.refNumber}`,
      `Position: ${applicationData.jobTitle}`,
      "",
      "Personal Information",
      `Name: ${applicationData.firstName} ${applicationData.lastName}`,
      `Email: ${applicationData.email}`,
      `Phone: ${applicationData.phone}`,
      `Location: ${applicationData.currentLocation}`,
      `Willing to Relocate: ${applicationData.willingToRelocate}`,
      "",
      "Education",
      `Degree: ${applicationData.highestDegree || "N/A"}`,
      `Field: ${applicationData.fieldOfStudy || "N/A"}`,
      `Institution: ${applicationData.institution || "N/A"}`,
      `Graduation Year: ${applicationData.graduationYear || "N/A"}`,
      "",
      "Work Experience",
      `Employer: ${applicationData.employer || "N/A"}`,
      `Position: ${applicationData.position || "N/A"}`,
      `Period: ${applicationData.startDate || "N/A"} – ${applicationData.endDate || "N/A"}`,
      "",
      "Skills",
      skills,
      "",
      `Security Clearance: ${applicationData.securityClearance || "N/A"}`,
      `Availability: ${applicationData.availabilityDate || "N/A"}`,
      `Portfolio: ${applicationData.portfolioLink || "N/A"}`,
      "",
      "Why Interested",
      applicationData.whyInterested || "N/A",
    ].join("\n");

    const response = await fetch(
      "https://api.emailjs.com/api/v1.6/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: "admin@baeaerosystems.com",
            subject: `New Job Application: ${applicationData.jobTitle} - ${applicationData.refNumber}`,
            applicant_name: `${applicationData.firstName} ${applicationData.lastName}`,
            applicant_email: applicationData.email,
            message: message,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error("EmailJS API error:", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return false;
  }
}
