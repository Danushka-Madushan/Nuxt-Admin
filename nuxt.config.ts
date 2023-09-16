// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@tailvue/nuxt',
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
            API: 'http://localhost:8080'
        }
    }
})
