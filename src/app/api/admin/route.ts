import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const password = await req.json()
  
  try {
    cookies().set({
      name: 'password',
      value: password,
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    })
    return NextResponse.json({ message: true })
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
