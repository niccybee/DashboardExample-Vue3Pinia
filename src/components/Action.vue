<script setup>
import { useMenuStore } from "../stores/MenuStore";

const menu = useMenuStore();

let showTest = true;
</script>
<template>
  <Transition>
    <div v-if="menu.showAction" class="bg-white pt-16 h-full drop-shadow-lg w-2/6">
      <section
        class="bg-gray-100 p-2 pt-32 h-full drop-shadow-lg w-full flex flex-col justify-between"
      >
        <!-- <h2 class="text-blue-900">Progress</h2>
        <p>Cool I shold work right?</p>
        <p>{{ menu.showAction }}</p> -->
        <p v-show="!menu.activeItem">Click a menu item to show in the side bar</p>
        <component :is="menu.activeItem.component"></component>
      </section>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: width 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>
