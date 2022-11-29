<script>
import Shoes from '@/components/templates/Shoes.vue';
import ProductHeading from '@/components/ProductHeading.vue';

  export default {
    components: { Shoes, ProductHeading },
    mounted() {
      document.querySelector('body').classList.add("men")
    },
    unmounted() {
      document.querySelector('body').classList.remove("men")
    },
  }
</script>

<template>
  <div class="men">
    <div>
      <ProductHeading />
    </div>

    <div>
      <Shoes>
        <template #shoe>
          <img src="@/assets/img/nike-h.png" alt="Nike Men">
        </template>

        <template #name>
          
        </template>
      </Shoes>
    </div>
  </div>
</template>

<style scoped>
</style>