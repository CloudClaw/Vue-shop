<template>
  <div class="search">
    <input
      class="search__input"
      type="text"
      placeholder="Поиск"
      v-bind:value="searchValue"
      @input="getValueFromInput"
    />
    <span class="search__icon" @click="searchProduct"></span>
    <h1></h1>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    getValueFromInput(e) {
      this.searchValue = e.target.value;
    },
    searchProduct() {
      products.filter((product) => {
        product = product.name.include(searchValue);
      });
    },
  },
};
</script>

<style scoped>
.search {
  position: relative;
}

.search__input {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid teal;
  border-radius: 4px;
  padding: 5px;
}

.search__icon {
  position: absolute;
  top: calc(50% - 15px);
  right: 10px;
  display: block;
  width: 20px;
  height: 20px;
  background: url('../assets/search.png') no-repeat center;
  background-size: contain;
}
</style>
