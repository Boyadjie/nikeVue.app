<script>
import Shoes from '@/components/templates/Shoes.vue';

export default {
    components: { Shoes }
}
</script>

<template>
  <div class="men">
    <div>
      <h1>JUST<br>DO<br/>IT</h1>
      <p>Innovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most.</p>
    </div>

    <div>
      <Shoes>
        <template #shoe>
          <img src="@/assets/img/nike-h.png" alt="Nike Men">
        </template>
      </Shoes>
    </div>
  </div>
</template>

<style scoped>
html {
  background-color: linear-gradient(145deg, #d1e821 5%, #9b7c17 25%, #c1380e 45%, #4f0f0f ) ;
}
</style>