<template>
  <div>
    <navbar />
    <div class="app">
      <sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Sidebar from './components/Sidebar.vue';
export default {
  components: { Navbar, Sidebar },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style-type: none;
}

.app {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
}
</style>
