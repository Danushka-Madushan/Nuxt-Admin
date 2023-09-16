<template>
    <div class="flex items-center justify-center h-screen bg-gray-200">
        <div class="flex flex-col items-center w-[30%] px-10 py-5 shadow-md rounded-xl bg-white">
            <span class="font-thin text-9xl">{{ error.statusCode }}</span>
            <span class="font-thin text-2xl text-center">Seems like you're lost</span>
            <button @click="onErrorClear" class="text-xl mt-4 border-2 border-lblue px-2 py-1 wierd-corners transition hover:bg-lblue hover:text-white active:text-lblue active:bg-white">Go Home</button>
        </div>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const onErrorClear = () => clearError({ redirect: '/'})
</script>

<style scoped>
    .wierd-corners {
        border-radius: 0.75rem 0 0.75rem 0;
    }
</style>
