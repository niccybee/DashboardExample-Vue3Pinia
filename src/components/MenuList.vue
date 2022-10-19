<script setup>
import MenuItem from "./MenuItem.vue";
import { useMenuStore } from "../stores/MenuStore";

const menu = useMenuStore();
</script>
<template>
  <nav class="flex justify-end items-center min-w-1/2 text-3 hover:text-gray-100">
    <!-- @blur="menu.clearActive(item)" -->
    <MenuItem>
      <div
        class="bg-blue-500 hover:text-white text-white px-4 py-2 rounded-md hover:bg-blue-400"
      >
        Upgrade Account
      </div>
    </MenuItem>
    <MenuItem v-for="item in menu.menu" @click="menu.setActive(item)" :item="item">
      <div v-html="item.body"></div>
      <!-- <img v-if="item.icon" :src="item.icon" class="w-6" alt="" /> -->
      <component :is="item.icon" class="fill-white w-4 icon-fix" />
      <span class="uppercase text-white">{{ item.text }}</span>
    </MenuItem>
    <MenuItem @click="menu.showAction = !menu.showAction" v-if="menu.showAction"
      ><p>{{ !menu.showAction ? "Show" : "Hide" }} Action</p></MenuItem
    >
  </nav>
</template>

<style>
.icon-fix * {
  fill: white !important;
}
</style>
