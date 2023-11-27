import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
const key = process.env.POST_BLOG_SECRET
export function middleware(request: NextRequest) {
  if (cookies().get('password').value != key) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/blogPost/:path*',
}
