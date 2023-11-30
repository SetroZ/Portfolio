import { cookies } from 'next/headers'
const key = process.env.POST_BLOG_SECRET
export default function IsAdmin(): boolean {
  if (cookies().get('password')?.value == key) {
    return true
  } else {
    return false
  }
}
