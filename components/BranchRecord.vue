<template>
    <div class="flex justify-between text-lg p-2 text-gray-900 transition">
        <span class="w-[5%] selection:text-lblue font-fira text-base my-auto">{{ item.branchID }}</span>
        <span class="truncate font-sans w-[15%] font-thin hover:cursor-pointer selection:text-lblue">{{ item.name }}</span>
        <span class="truncate font-sans w-[40%] font-thin hover:cursor-pointer selection:text-lblue">{{ item.address }}</span>
        <span class="text-base font-thin my-auto">{{ String(index + 1).padStart(5, '0') }}</span>
    </div>
</template>

<script setup>
    const { item, index } = defineProps(['item', 'index'])
</script>
