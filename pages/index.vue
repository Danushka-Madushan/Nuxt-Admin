<template>
  <div class="shadow-lg p-6 rounded-md">
    <AssetManager @onResponse="(type, message) => $toast.show({ type: type, message: message })"/>
  </div>
</template>

<script setup>
useHead({
  title: 'Admin | Home'
})
</script>
