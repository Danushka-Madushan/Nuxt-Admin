export default defineEventHandler( async (event) => {
    const { public: { API, TOKEN } } = useRuntimeConfig()
    
    const response = await $fetch(API + '/api/panel/admins/create', {
        method: 'POST',
        body: await readBody(event),
        headers: {
            authorization: `Bearer ${ TOKEN }`
        }
    })

    return response
})
  