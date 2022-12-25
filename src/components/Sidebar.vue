<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <li>
        <my-button style="margin-top: 10px">Смартфоны</my-button>
      </li>
      <li>
        <my-button style="margin-top: 10px">Компьютеры</my-button>
      </li>
      <li>
        <my-button style="margin-top: 10px">Планшеты</my-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton },
};
</script>

<style scoped>
.sidebar {
  width: 15%;
  height: 100vh;
  background: grey;
  border-radius: 4px;
}

.sidebar__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
