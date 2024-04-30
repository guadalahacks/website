/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/registro',
                destination: 'https://forms.gle/kbcJrqut2H97w8fx6',
                permanent: false,
                basePath: false
            },
            {
                source: '/register',
                destination: 'https://forms.gle/kbcJrqut2H97w8fx6',
                permanent: false,
                basePath: false
            },
            {
                source: '/login',
                destination: 'https://forms.gle/kbcJrqut2H97w8fx6',
                permanent: false,
                basePath: false
            },
        ]
    }
}

module.exports = nextConfig
