<script>
import ProductHeading from '../components/ProductHeading.vue';

export default {
    mounted() {
        document.querySelector("body").classList.add("women");
    },
    unmounted() {
        document.querySelector("body").classList.remove("women");
    },
    components: { ProductHeading }
}
</script>

<template>
  <div class="women">
    <div>
      <ProductHeading/>
    </div>
  </div>
</template>

