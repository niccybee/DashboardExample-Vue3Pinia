<script setup>
import MenuItem from './MenuItem.vue';
import MenuList from './MenuList.vue';
import MenuActive from './MenuActive.vue';

let activeItem = '';
function onMenuClick(event) {
  console.log(event.target);
  activeItem.value = event.target;
}
</script>
<template>
  <div
    id="top-menu"
    class="
      fixed
      top-0
      left-0
      w-screen
      bg-blue-900
      flex
      p-1
      justify-between
      h-16
      z-2
    "
  >
    <img class="rounded-md" src="https://picsum.photos/60" alt="logo" />
    <MenuList />
  </div>
  <MenuActive />
</template>
