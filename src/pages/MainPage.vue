<template>
  <div class="main">
    <search-form :products="products" />
    <div class="main__products" v-for="product in products" :key="product.id">
      <product :product="product" />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import SearchForm from '@/components/SearchForm.vue';
export default {
  components: { Product, SearchForm },
  data() {
    return {
      products: [
        { id: 1, name: 'iPhone', price: '50000', type: 'phone' },
        { id: 2, name: 'iMac', price: '100000', type: 'pc' },
        { id: 3, name: 'iPad', price: '60000', type: 'pad' },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  padding: 0 10px;
  width: 100%;
  height: 100%;
}

.main__products {
  width: 100%;
  height: 100%;
}
</style>
