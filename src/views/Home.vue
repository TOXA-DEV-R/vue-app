<script lang="ts">
import { defineComponent } from 'vue';
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProductSummaryCard
  }
});
</script>
<template>
  <div class="home">
    <div class="product-card-container">

    </div>
  </div>
</template>

<style lang="scss">
.product-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>