<script setup>
import { computed } from 'vue';
import { useMenuStore } from '../stores/MenuStore';
const { menu } = useMenuStore();

const menuActives = computed(() => {
  return menu.filter((x) => {
    return x.active;
  });
});
</script>
<template>
  <div
    class="absolute left-0 bottom-0 bg-green-800 min-h-16 min-w-16 w-full block"
  >
    <div class="w-full hover-bg-green-900" v-for="item in menuActives">
      {{ item }}
    </div>
  </div>
</template>
