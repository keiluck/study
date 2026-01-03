import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ 只在根路径 / 时重定向
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/zh', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
