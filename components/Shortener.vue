<template>
    <div class="container flex flex-col">
        <input @input="(e) => setValue((e.target as HTMLInputElement).value)" type="text"
            class="w-[100%] p-3 my-2 text-xl font-thin outline-none border rounded-lg focus:border-lblue transition-[border] selection:bg-none selection:text-lblue"
            placeholder="https://long-link.com/shorten-it">
        <button @click="onShortRequest" class="p-3 bg-lblue text-white text-lg w-fit rounded-lg">Shorten URL</button>
    </div>
</template>

<script lang="ts" setup>
const Emit = defineEmits(['onResponse'])

const DataMap: Map<string, string> = new Map()

const setValue = (string: string) => {
    DataMap.set('url', string)
}

const onShortRequest = async () => {
    const urlString = DataMap.get('url')

    if (!urlString) {
        return Emit('onResponse', 'danger', 'Link Field is Empty')
    }

    const { data: response } = await useFetch('/api/new', {
        method: 'POST',
        body: { url: urlString }
    })

    if (!response.value) {
        return Emit('onResponse', 'danger', 'Request Failed')
    }

    return Emit('onResponse', 'success', 'Success')
}
</script>
