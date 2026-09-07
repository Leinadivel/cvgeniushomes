import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      enquiryType,
      location,
      message,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !enquiryType ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "CVGeniusHomes Website <onboarding@resend.dev>",

      // CHANGE THIS LATER TO THE CLIENT'S EMAIL
      to: ["levidanielchinwendu@gmail.com"],

      replyTo: email,

      subject: `New CVGeniusHomes Enquiry - ${enquiryType}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          padding: 30px;
          color: #20252b;
        ">

          <div style="
            background: #20252b;
            padding: 25px;
            border-radius: 8px 8px 0 0;
          ">
            <h1 style="
              margin: 0;
              color: #f5b800;
              font-size: 24px;
            ">
              CVGeniusHomes
            </h1>

            <p style="
              margin: 7px 0 0;
              color: #ffffff;
            ">
              New Website Enquiry
            </p>
          </div>

          <div style="
            padding: 30px;
            border: 1px solid #dddddd;
            border-top: none;
          ">

            <h2 style="margin-top: 0;">
              ${firstName} ${lastName}
            </h2>

            <p>
              <strong>Enquiry Type:</strong><br />
              ${enquiryType}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Phone:</strong><br />
              ${phone}
            </p>

            <p>
              <strong>Project / Preferred Location:</strong><br />
              ${location || "Not provided"}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div style="
              background: #f7f8f9;
              padding: 20px;
              border-radius: 6px;
              line-height: 1.6;
            ">
              ${message}
            </div>

          </div>

        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}