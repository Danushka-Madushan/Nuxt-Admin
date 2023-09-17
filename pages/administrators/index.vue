<template>
    <div class="flex flex-col gap-4 shadow-lg p-6 rounded-md">
        <div class="container flex flex-col">
            <div class="flex gap-4">
                <input type="text" placeholder="ID" class="sm:w-[35%] w-[100%] text-xl font-thin p-3 my-2 border focus:border-lblue rounded-lg outline-none transition">
                <input type="text" placeholder="Name" class="sm:w-[35%] w-[100%] text-xl font-thin p-3 my-2 border focus:border-lblue rounded-lg outline-none transition">
            </div>
            <button class="w-fit p-3 bg-lblue rounded-lg text-white text-lg">Lookup</button>
        </div>
        <div class="container">
            <div class="flex justify-between text-xl mb-4 px-2 font-thin text-lblue my-2">
                <span>@ ID</span>
            </div>
            <span v-if="pending" class="flex justify-center text-lg px-2">Loading...</span>
            <div v-else v-for="(item, index) in admins.data">
                <AdminRecord :item="item" :index="index"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Admin | Branch Admins'
    })

    const { public: { API, TOKEN } } = useRuntimeConfig()

    const { data: admins, pending } = await useLazyFetch(API + '/api/panel/admins', {
        headers: {
            authorization: `Bearer ${ TOKEN }`
        }
    })
</script>
