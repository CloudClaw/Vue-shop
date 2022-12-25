<template>
  <div>
    <header class="navbar">
      <img class="navbar__logo" src="../assets/shop.svg" alt="logo" />
      <div class="navbar__links">
        <my-button @click="$router.push('/')">Главная</my-button>

        <my-button @click="$router.push('/cart')">Корзина</my-button>

        <my-button @click="$router.push('/favourite')">Избранное</my-button>
      </div>
    </header>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
export default {
  components: { MyButton },
};
</script>

<style scop MyButtoned>
.navbar {
  height: 50px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.navbar__links {
  display: flex;
  justify-content: space-between;
  width: 250px;
}

.navbar__logo {
  width: 30px;
  height: 30px;
}
</style>
