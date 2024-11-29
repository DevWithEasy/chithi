import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request) {
  const cookie = request.cookies.get('authToken')
  const isPath = request.nextUrl.pathname

  // Check if user is already on signin or signup page
  if (!cookie) {
    if (isPath === '/signin' || isPath === '/signup') {
      return NextResponse.next(); // Allow access to these pages
    }
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secret);

    // Redirect authenticated users away from signin/signup
    if (isPath === '/signin' || isPath === '/signup') {
      return NextResponse.redirect(new URL(`/me/${payload.id}`, request.url));
    }
    
  } catch (error) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next(); // Allow other requests to proceed
}

// Configuration for matching paths
export const config = {
  matcher: [
    '/signin', 
    '/signup',
    '/me/:id*',
    '/me/mail/:id*'
  ],
}