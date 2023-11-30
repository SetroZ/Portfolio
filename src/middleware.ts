import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import IsAdmin from './IsAdmin'
export function middleware(request: NextRequest) {
  if (IsAdmin() == false) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/blogPost/:path*',
}
