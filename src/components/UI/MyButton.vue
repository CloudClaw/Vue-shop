<template>
  <button class="generalBtn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.generalBtn {
  padding: 10px;
  background: none;
  border-radius: 10px;
  background: teal;
  color: white;
  border: none;
}
</style>
