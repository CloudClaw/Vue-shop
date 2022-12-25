<template>
  <div class="product">
    <div class="product__data">
      <img src="" alt="product" />
      <span class="product__name">Наименование: {{ product.name }}</span>
      <span class="product__price">Цена: {{ product.price }} рублей</span>
    </div>
    <span class="product__like"></span>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 100%;
  border: 1px solid teal;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
}

.product__data {
  display: flex;
  flex-direction: column;
}

.product__like {
  width: 20px;
  height: 20px;
  background: url('@/assets/heart.svg') no-repeat center;
  background-size: contain;
  align-self: center;
}
</style>
