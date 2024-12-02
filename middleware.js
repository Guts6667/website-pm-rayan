import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing,{
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  ro
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*', "/((?!api|_next|_vercel|.*\\..*).*)"]
};