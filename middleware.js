import { NextResponse } from 'next/server'
 
export function middleware(request) {
  console.log('middleware')
  let cookie = request.cookies.get('authToken')
  console.log(cookie)
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/signin', '/signup'],
}