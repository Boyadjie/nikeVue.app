<script>
import Shoes from '@/components/templates/Shoes.vue';
import ProductHeading from '@/components/ProductHeading.vue';
import BigButton from '@/components/buttons/big-button.vue';

  export default {
    components: { Shoes, ProductHeading, BigButton },
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

    <div class="top">
      <div>
        <ProductHeading />
      </div>
  
      <div>
        <Shoes>
          <template #shoe>
            <img src="@/assets/img/nike-h.png" alt="Nike Men">
          </template>
  
          <template #name>
            Vapor Cage 4 Rafa
          </template>
        </Shoes>
      </div>
    </div>

    <div class="bot">
      <BigButton />
    </div>
  </div>
</template>

<style scoped>
.men .top {
  display: flex;
}
</style>