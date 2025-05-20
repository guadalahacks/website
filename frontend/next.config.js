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
            {
                source: '/teams',
                destination: 'https://forms.gle/4h5D4P6GXoSUa9iXA',
                permanent: false,
                basePath: false
            },
            {
                source: '/equipo',
                destination: 'https://forms.gle/4h5D4P6GXoSUa9iXA',
                permanent: false,
                basePath: false
            },
            {
                source: '/team',
                destination: 'https://forms.gle/4h5D4P6GXoSUa9iXA',
                permanent: false,
                basePath: false
            },
            {
                source: '/equipos',
                destination: 'https://forms.gle/4h5D4P6GXoSUa9iXA',
                permanent: false,
                basePath: false
            },
            {
                source: '/whatsapp',
                destination: 'https://chat.whatsapp.com/ImVRvrLbgg3CaObjRWhiaQ',
                permanent: false,
                basePath: false
            }, 
            {
                source: '/wpp',
                destination: 'https://chat.whatsapp.com/ImVRvrLbgg3CaObjRWhiaQ',
                permanent: false,
                basePath: false
            },
            {
                source: '/anuncios',
                destination: 'https://chat.whatsapp.com/ImVRvrLbgg3CaObjRWhiaQ',
                permanent: false,
                basePath: false
            },
            {
                source: '/chat',
                destination: 'https://chat.whatsapp.com/ImVRvrLbgg3CaObjRWhiaQ',
                permanent: false,
                basePath: false
            },
            {
                source: '/devpost',
                destination: 'https://guadalahacks.devpost.com/',
                permanent: false,
                basePath: false
            },
            {
                source: '/projects24',
                destination: 'https://guadalahacks.devpost.com/project-gallery',
                permanent: false,
                basePath: false
            },
            {
                source: '/projects25',
                destination: 'https://guadalahacks-2025.devpost.com/project-gallery',
                permanent: false,
                basePath: false
            }
        ]
    }
}

module.exports = nextConfig
