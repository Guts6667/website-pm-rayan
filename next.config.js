const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
              },
              {
                source: '/:locale(en|fr)/about',
                destination: '/:locale/about',
                permanent: true,
              },
        ]
    }
};
 
module.exports = withNextIntl(nextConfig);