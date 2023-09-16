<template>
  <div class="shadow-lg p-6 rounded-md">
    <Shortener @onResponse="(type, message) => $toast.show({ type: type, message: message })"/>
  </div>
</template>

<script setup>
useHead({
  title: '360 Tools | Home'
})
</script>
