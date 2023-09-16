export default defineEventHandler( async (event) => {
    const { public: { API } } = useRuntimeConfig()
    
    const response = await $fetch(API + '/api/new', {
        method: 'POST',
        body: await readBody(event)
    })

    return response
})
  