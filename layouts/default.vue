<template>
    <div>
        <header class="shadow-md bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="text-2xl">Branch Manager</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="text-xl">Home</NuxtLink></li>
                    <li><NuxtLink to="/about" class="text-xl">About</NuxtLink></li>
                    <li><NuxtLink to="/administrators" class="text-xl">Admins</NuxtLink></li>
                    <li><NuxtLink to="/branches" class="text-xl btn">Branches</NuxtLink></li>
                </ul>
            </nav>
        </header>
    
        <!-- Content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <!-- Content -->
    </div>
</template>

<style scoped>
    .router-link-active {
        color: #1d4fcd;
    }
</style>
