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
            title: '360 Tools',
            meta: [
                {
                    name: 'description',
                    content: 'Amazing web tools from 360 to boost your daily life'
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
