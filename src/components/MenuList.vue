<script setup>
import MenuItem from './MenuItem.vue';
import { useMenuStore } from '../stores/MenuStore';

const menu = useMenuStore();
</script>
<template>
  <nav
    class="
      flex
      justify-center
      items-center
      min-w-1/2
      text-3
      hover:text-gray-100
    "
  >
    <!-- @blur="menu.clearActive(item)" -->
    <MenuItem v-for="item in menu.menu" @click="menu.setActive(item)">
      <div v-html="item.body"></div>
      <span class="uppercase text-white">{{ item.text }}</span>
    </MenuItem>
  </nav>
</template>
