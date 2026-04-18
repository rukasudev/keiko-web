import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const defaultLocale = 'en'
const locales = ['pt', 'en']

function getLocale(request: NextRequest): string {
  try {
    const acceptedLanguage = request.headers.get('accept-language')
    if (!acceptedLanguage) return defaultLocale

    const headers = { 'accept-language': acceptedLanguage }
    const languages = new Negotiator({ headers }).languages()
    const filteredLanguages = languages.filter((lang) => lang !== '*')

    if (filteredLanguages.length === 0) return defaultLocale

    return match(filteredLanguages, locales, defaultLocale)
  } catch {
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.includes('.')) {
    return NextResponse.next()
  }

  if (pathname.includes('api')) {
    return NextResponse.next()
  }

  if (pathname.includes('/invite')) {
    return NextResponse.redirect(
      new URL('/v1/invite', 'https://api.keikobot.com'),
    )
  }

  if (pathname.includes('/support')) {
    return NextResponse.redirect(
      new URL('/v1/support', 'https://api.keikobot.com'),
    )
  }

  // /en → redirect 301 to / (eliminated as a standalone route)
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/^\/en/, '') || '/'
    return NextResponse.redirect(url, 301)
  }

  // /pt → serve PT content
  if (pathname === '/pt' || pathname.startsWith('/pt/')) {
    return NextResponse.next()
  }

  // / → detect language and route accordingly
  if (pathname === '/') {
    const locale = getLocale(request)
    if (locale !== defaultLocale) {
      const url = request.nextUrl.clone()
      url.pathname = `/${locale}`
      return NextResponse.redirect(url, 308)
    }
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}`
    return NextResponse.rewrite(url)
  }

  // Any other path without locale → redirect to detected locale
  const locale = getLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
