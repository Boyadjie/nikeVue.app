<script setup>
import WelcomeItem from '@/components/templates/WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Tooling</template>

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>
</template>
