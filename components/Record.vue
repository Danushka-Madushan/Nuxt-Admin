<template>
    <div class="flex justify-between text-lg p-2 text-gray-900 transition">
        <span class="w-[7%] hover:cursor-pointer font-fira text-base my-auto">{{ item.key }}</span>
        <span class="truncate w-[50%] font-sans font-thin my-auto hover:cursor-pointer selection:text-lblue">{{ item.destination }}</span>
        <span class="text-base font-thin my-auto">{{ String(index + 1).padStart(5, '0') }}</span>
    </div>
</template>

<script setup>
    const { item, index } = defineProps(['item', 'index'])
</script>
