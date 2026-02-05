import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if user is authenticated
  const isAuthenticated = request.cookies.get('auth')?.value === 'true'
  
  // Allow access to auth page and static files
  if (
    request.nextUrl.pathname.startsWith('/auth') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname === '/favicon.ico' ||
    request.nextUrl.pathname === '/logo.png' ||
    request.nextUrl.pathname === '/icon' ||
    request.nextUrl.pathname === '/apple-icon'
  ) {
    return NextResponse.next()
  }
  
  // Redirect to auth if not authenticated
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
