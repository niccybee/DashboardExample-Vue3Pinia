<script setup>
defineProps({
  item: Object,
});
</script>
<template>
  <div
    class="
      bg-yellow-100
      text-yellow-900
      px-4
      py-2
      border-yellow-200 border
      rounded-md
      mt-2
      flex
      justify-between
      drop-shadow-sm
    "
  >
    <p class="text-yellow-900" v-html="item.text"></p>
    <a @click="dismissItem" class="link-underline cursor-pointer">Dismiss</a>
  </div>
</template>
<style scoped>
a {
  color: brown !important;
}
</style>
