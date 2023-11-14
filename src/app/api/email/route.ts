import { NextRequest, NextResponse } from 'next/server'

import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND)
export async function POST(req: NextRequest) {
  const data = await req.json()
  const { text, sender, subject, name } = data
  try {
    const data = await resend.emails.send({
      from: name + ' ' + sender,
      to: 'joemosabry@gmail.com',
      subject: subject,
      text: text,
    })
  } catch {
    return new NextResponse('Error')
  }
}

