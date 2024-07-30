import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import IsAdmin from './IsAdmin'
export function middleware(request: NextRequest) {
  IsAdmin()
  if (false) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
export const config = {
  matcher: ['/blogPost/:path*', '/blogs/:path*/modify'],
}
