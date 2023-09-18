<template>
    <div class="container flex flex-col">
        <div class="mb-4 mx-2">
            <span class="text-xl font-thin">Add new Branch</span>
        </div>
        <div class="container flex gap-4 w-[50%]">
            <input @input="({ target }) => setValue((target as HTMLInputElement).value, 'branch_name')" type="text"
                class="w-80 p-3 my-2 text-lg font-thin outline-none border border-slate-300 rounded-lg focus:border-lblue transition-[border] selection:bg-none selection:text-lblue"
                placeholder="Branch Name">
            <input @input="({ target }) => setValue((target as HTMLInputElement).value, 'branch_admin')" type="text"
                class="w-80 p-3 my-2 text-lg font-thin outline-none border border-slate-300 rounded-lg focus:border-lblue transition-[border] selection:bg-none selection:text-lblue"
                placeholder="Admin">
        </div>
        <div class="container flex gap-4 w-[50%]">
            <input @input="({ target }) => setValue((target as HTMLInputElement).value, 'branch_address')" type="text"
            class="w-[100%] p-3 my-2 text-lg font-thin outline-none border border-slate-300 rounded-lg focus:border-lblue transition-[border] selection:bg-none selection:text-lblue"
            placeholder="Address">
        </div>
        <button @click="onShortRequest('branch')" class="my-2 px-5 py-2 bg-lblue text-white text-lg w-fit rounded-lg">Add</button>
    </div>
    <div class="container flex flex-col">
        <div class="my-4 mx-2">
            <span class="text-xl font-thin">Add new Admin</span>
        </div>
        <div class="container flex gap-4 w-[50%]">
            <input @input="({ target }) => setValue((target as HTMLInputElement).value, 'admin_name')" type="text"
                class="w-80 p-3 my-2 text-lg font-thin outline-none border border-slate-300 rounded-lg focus:border-lblue transition-[border] selection:bg-none selection:text-lblue"
                placeholder="Full Name">
            <input @input="({ target }) => setValue((target as HTMLInputElement).value, 'admin_phone')" type="text"
                class="w-80 p-3 my-2 text-lg font-thin outline-none border border-slate-300 rounded-lg focus:border-lblue transition-[border] selection:bg-none selection:text-lblue"
                placeholder="Phone">
        </div>
        <div class="container flex gap-4 w-[50%]">
            <input @input="({ target }) => setValue((target as HTMLInputElement).value, 'admin_nic')" type="text"
            class="w-80 p-3 my-2 text-lg font-thin outline-none border border-slate-300 rounded-lg focus:border-lblue transition-[border] selection:bg-none selection:text-lblue"
            placeholder="NIC">
        </div>
        <button @click="onShortRequest('admin')" class="my-2 px-5 py-2 bg-lblue text-white text-lg w-fit rounded-lg">Add</button>
    </div>
</template>

<script lang="ts" setup>
const Emit = defineEmits(['onResponse'])

type iFrom = "branch_name" | "branch_address" | "branch_admin" | "admin_name" | "admin_phone" | "admin_nic"
const DataMap: Map<iFrom, string> = new Map()

const setValue = (string: string, from: iFrom) => {
    DataMap.set(from, string)
}

const onShortRequest = async (type: "admin" | "branch") => {
    switch (type) {
        case "admin": {
            const name = DataMap.get('admin_name')
            const phone = DataMap.get('admin_phone')
            const nic = DataMap.get('admin_nic')

            if (!name) {
                return Emit('onResponse', 'danger', 'Name is Empty')
            }

            if (!phone) {
                return Emit('onResponse', 'danger', 'Phone is Empty')
            }

            if (!nic) {
                return Emit('onResponse', 'danger', 'NIC is Empty')
            }

            const { data: response } = await useFetch('/api/admin', {
                method: 'POST',
                body: {
                    "name": name,
                    "mobile": phone,
                    "nic": nic
                }
            })

            if (!response.value) {
                return Emit('onResponse', 'danger', 'Request Failed')
            }

            return Emit('onResponse', 'success', 'Success')
        }
        case "branch": {
            const name = DataMap.get('branch_name')
            const address = DataMap.get('branch_address')
            const admin = DataMap.get('branch_admin')

            if (!name) {
                return Emit('onResponse', 'danger', 'Name is Empty')
            }

            if (!address) {
                return Emit('onResponse', 'danger', 'Address is Empty')
            }

            if (!admin) {
                return Emit('onResponse', 'danger', 'Admin is Empty')
            }

            const { data: response } = await useFetch('/api/branch', {
                method: 'POST',
                body: {
                    "name": name,
                    "address": address,
                    "admin": admin
                }
            })

            if (!response.value) {
                return Emit('onResponse', 'danger', 'Request Failed')
            }

            return Emit('onResponse', 'success', 'Success')
        }
    }
}
</script>
