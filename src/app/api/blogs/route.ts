import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/app/clients/supabase'
export async function POST(req: NextRequest) {
  const data = await req.json()
  console.log(data)
}
