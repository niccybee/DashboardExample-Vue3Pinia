<script setup>
import MenuActive from "./MenuActive.vue";
const props = defineProps({
  text: String,
});
</script>
<template>
  <a
    href="#"
    class="h-full flex items-center justify-center px-4 hover-bg-blue-800 border-r border-blue-700 text-uppercase text-white"
  >
    <slot></slot>
    <span class="text-white" v-if="props.text">{{ props.text }}</span>
  </a>
</template>
