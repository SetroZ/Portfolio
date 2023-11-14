import { NextRequest, NextResponse } from 'next/server'

import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: NextRequest) {
  const data = await req.json()
  const { message, sender, title, name } = data
  try {
    // const data = await resend.emails.send({
    //   from: name + ' ' + `<${sender}>`,
    //   to: 'joemosabry@gmail.com',
    //   subject: title,
    //   text: message,
    // })
    return NextResponse.json({message:true})
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
