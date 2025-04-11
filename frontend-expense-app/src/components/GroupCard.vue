<template>
  <div class="card">
    <h2>{{ group.name }}</h2>
    <router-link :to="`/groups/${group.id}`">Details</router-link>
  </div>
</template>

<script setup>
defineProps(['group'])
</script>
