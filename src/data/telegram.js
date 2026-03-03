export async function sendContactToTelegram(contactData) {
  try {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram credentials not configured. Skipping notification.");
      return false;
    }

    const message = [
      "📩 *New Contact Inquiry*",
      "",
      `👤 *Name:* ${contactData.name}`,
      `📧 *Email:* ${contactData.email}`,
      `📂 *Inquiry Type:* ${contactData.inquiryType}`,
      `📌 *Subject:* ${contactData.subject}`,
      "",
      "💬 *Message:*",
      contactData.message,
    ].join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      console.error("Telegram API error:", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return false;
  }
}

export async function sendToTelegram(applicationData) {
  try {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram credentials not configured. Skipping notification.");
      return false;
    }

    const skills = applicationData.skills?.length
      ? applicationData.skills.join(", ")
      : "None selected";

    const message = [
      "📋 *New Job Application Received*",
      "",
      `🔖 *Reference:* ${applicationData.refNumber}`,
      `💼 *Position:* ${applicationData.jobTitle}`,
      "",
      "👤 *Personal Information*",
      `Name: ${applicationData.firstName} ${applicationData.lastName}`,
      `Email: ${applicationData.email}`,
      `Phone: ${applicationData.phone}`,
      `Location: ${applicationData.currentLocation}`,
      `Willing to Relocate: ${applicationData.willingToRelocate}`,
      "",
      "🎓 *Education*",
      `Degree: ${applicationData.highestDegree || "N/A"}`,
      `Field: ${applicationData.fieldOfStudy || "N/A"}`,
      `Institution: ${applicationData.institution || "N/A"}`,
      `Graduation Year: ${applicationData.graduationYear || "N/A"}`,
      "",
      "💼 *Work Experience*",
      `Employer: ${applicationData.employer || "N/A"}`,
      `Position: ${applicationData.position || "N/A"}`,
      `Period: ${applicationData.startDate || "N/A"} – ${applicationData.endDate || "N/A"}`,
      "",
      "🛠 *Skills*",
      skills,
      "",
      `🔐 Security Clearance: ${applicationData.securityClearance || "N/A"}`,
      `📅 Availability: ${applicationData.availabilityDate || "N/A"}`,
      `🔗 Portfolio: ${applicationData.portfolioLink || "N/A"}`,
      "",
      "📝 *Why Interested*",
      applicationData.whyInterested || "N/A",
    ].join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      console.error("Telegram API error:", response.status);
      return false;
    }

    // Send resume document if provided
    if (applicationData.resume) {
      await sendDocumentToTelegram(
        botToken,
        chatId,
        applicationData.resume,
        `📄 Resume – ${applicationData.firstName} ${applicationData.lastName} (${applicationData.refNumber})`
      );
    }

    // Send cover letter document if provided
    if (applicationData.coverLetter) {
      await sendDocumentToTelegram(
        botToken,
        chatId,
        applicationData.coverLetter,
        `📄 Cover Letter – ${applicationData.firstName} ${applicationData.lastName} (${applicationData.refNumber})`
      );
    }

    return true;
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return false;
  }
}

async function sendDocumentToTelegram(botToken, chatId, file, caption) {
  try {
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("document", file, file.name);
    if (caption) {
      formData.append("caption", caption);
    }

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendDocument`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      console.error("Telegram sendDocument error:", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send document to Telegram:", error);
    return false;
  }
}
