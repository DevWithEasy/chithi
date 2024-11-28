import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request) {
  const cookie = request.cookies.get('authToken')

  if (cookie) {
    try {
      const isPath = request.nextUrl.pathname

      const secret = new TextEncoder().encode(process.env.JWT_SECRET)
      const { payload } = await jwtVerify(cookie.value, secret)
      if(isPath=== '/signin' || isPath=== '/signup'){
        return NextResponse.redirect(new URL(`/me/${payload.id}`, request.url))
      }
      
    } catch (error) {
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  } else {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

// Configuration for matching paths
export const config = {
  matcher: [
    '/signin', 
    '/signup',
    '/me/:id'
  ],
}
