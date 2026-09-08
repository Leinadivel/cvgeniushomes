import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      trade,
      location,
      education,
      experience,
      reason,
    } = body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !trade ||
      !location ||
      !education ||
      !reason
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeTrade = escapeHtml(trade);
    const safeLocation = escapeHtml(location);
    const safeEducation = escapeHtml(education);
    const safeExperience = escapeHtml(experience || "None provided");
    const safeReason = escapeHtml(reason);

    const { error } = await resend.emails.send({
      from: "CVGeniusHomes Training <onboarding@resend.dev>",

      to: [
        "levidanielchinwendu@gmail.com",
        "hello@cvgeniushomes.com.ng",
      ],

      replyTo: String(email),

      subject: `New Training Application - ${String(trade)}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 680px;
          margin: 0 auto;
          color: #20252b;
        ">

          <div style="
            background:#17202a;
            padding:28px;
          ">
            <h1 style="
              margin:0;
              color:#f5b800;
              font-size:24px;
            ">
              CVGeniusHomes
            </h1>

            <p style="
              color:#ffffff;
              margin:7px 0 0;
            ">
              New Training Institute Application
            </p>
          </div>

          <div style="
            padding:30px;
            border:1px solid #dddddd;
            border-top:0;
          ">

            <h2 style="
              margin-top:0;
              color:#20252b;
            ">
              ${safeFullName}
            </h2>

            <div style="
              background:#fff7df;
              padding:18px;
              margin-bottom:25px;
              border-left:4px solid #f5b800;
            ">
              <strong>Preferred Trade</strong>

              <div style="
                font-size:20px;
                margin-top:6px;
                color:#b98500;
              ">
                ${safeTrade}
              </div>
            </div>

            <p>
              <strong>Email:</strong><br>
              ${safeEmail}
            </p>

            <p>
              <strong>Phone:</strong><br>
              ${safePhone}
            </p>

            <p>
              <strong>Location:</strong><br>
              ${safeLocation}
            </p>

            <p>
              <strong>Education Level:</strong><br>
              ${safeEducation}
            </p>

            <p>
              <strong>Previous Construction Experience:</strong>
            </p>

            <div style="
              padding:16px;
              background:#f7f8f9;
              line-height:1.6;
            ">
              ${safeExperience}
            </div>

            <p style="margin-top:25px;">
              <strong>Why the applicant wants to learn this trade:</strong>
            </p>

            <div style="
              padding:16px;
              background:#f7f8f9;
              line-height:1.6;
            ">
              ${safeReason}
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to submit your application at the moment. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("Training application error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}