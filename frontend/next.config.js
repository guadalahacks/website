/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/registro',
                destination: 'https://forms.gle/yMHsQxuhGWurALVL9',
                permanent: false,
                basePath: false
            },
            {
                source: '/register',
                destination: 'https://forms.gle/yMHsQxuhGWurALVL9',
                permanent: false,
                basePath: false
            },
            {
                source: '/login',
                destination: 'https://forms.gle/yMHsQxuhGWurALVL9',
                permanent: false,
                basePath: false
            },
        ]
    }
}

module.exports = nextConfig
