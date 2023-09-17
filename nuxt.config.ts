// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@tailvue/nuxt',
        'nuxt-headlessui'
    ],
    app: {
        head: {
            title: 'Admin',
            meta: [
                {
                    name: 'description',
                    content: 'DP Education branch management panel'
                }
            ]
        }
    },
    runtimeConfig: {
        public: {
            API: 'https://api.xtream360.com',
            TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiQWRtaW4iLCJpYXQiOjE2OTQ5ODQ0MTUsImV4cCI6MTY5NTA3MDgxNX0.gHp82rLiteVqi7SC2-T5CQrwsgGY2xrKMV6PbScPuDo'
        }
    }
})
