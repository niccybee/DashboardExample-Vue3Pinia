<script setup>
import { computed } from "vue";
import { useMenuStore } from "../stores/MenuStore";
const menu = useMenuStore();

let currentScreen = menu.activeScreen;
</script>
<template>
  <nav
    class="w-full bg-white drop-shadow-sm h-16 flex text-xs uppercase divide-x divide-slate-300"
  >
    <a
      class="w-36 max-w-48 text-center hover:border-b-4 hover:border-blue-500 divide-slate-50 flex items-center justify-center"
      href=""
      v-for="item in menu.nav[0].subItems"
      ><span class="">{{ item.title }}</span></a
    >
  </nav>
</template>
<style scoped>
a:hover span {
  transform: translateY(3px);
}
</style>
