'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  try {
    await resend.emails.send({
      from: 'ras@talhaali.xyz',
      to: 'alit83219@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return { message: 'Email sent successfully!' }
  } catch (error) {
    return { message: 'Error sending email. Please try again.', error: error}
  }
}