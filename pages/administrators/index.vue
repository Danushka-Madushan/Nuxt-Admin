<template>
    <div class="flex flex-col gap-4 shadow-lg p-6 rounded-md">
        <div class="container flex flex-col">
            <div class="flex gap-4">
                <input type="text" placeholder="ID" class="sm:w-[35%] w-[100%] text-xl font-thin p-3 my-2 border focus:border-lblue rounded-lg outline-none transition">
                <input type="text" placeholder="Domain" class="sm:w-[35%] w-[100%] text-xl font-thin p-3 my-2 border focus:border-lblue rounded-lg outline-none transition">
            </div>
            <button class="w-fit p-3 bg-lblue rounded-lg text-white text-lg">Lookup</button>
        </div>
        <div class="container">
            <RecordTitles/>
            <span v-if="pending" class="flex justify-center text-lg px-2">Loading...</span>
            <div v-else v-for="(item, index) in directory.data">
                <Record :item="item" :index="index"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Admin | Branch Managers'
    })

    const { public: { API } } = useRuntimeConfig()

    const { data: directory, pending } = await useLazyFetch(API + '/api/directory')
</script>
