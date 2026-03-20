'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  organization: string;
  requirement: string;
  quantity: string;
  contactDetails: string;
}) {
  const { name, organization, requirement, quantity, contactDetails } = formData;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Wellness Healthcare <onboarding@resend.dev>',
      to: ['support@wellnesscorporatehealthcare.in'], // This is where you receive inquiries
      subject: `New Inquiry from ${name} - ${organization}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #002147;">Requirement</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Requirement:</strong> ${requirement}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Contact Details:</strong> ${contactDetails}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">This email was sent from the Wellness Healthcare website contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, message: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Server Action Error:', err);
    return { success: false, message: err.message || 'Failed to send email' };
  }
}
