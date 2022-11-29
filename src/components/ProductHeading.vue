<script>
  import { heading } from '@/data/heading.js'

  export default {
    data() {
      return {
        heading
      }
    },
  }
</script>

<template>
  <h1>{{ heading.title }}</h1>
  <p>{{ heading.description }}</p>
</template>