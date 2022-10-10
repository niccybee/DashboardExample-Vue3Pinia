<script setup>
import { useMenuStore } from '../stores/MenuStore';

const item = useMenuStore();
</script>
<template>
  <div
    v-if="item.activeItem"
    @click="item.clearActive(item)"
    class="z-1 bg-yellow-500 w-full h-full absolute top-0 left-0 op-2"
  ></div>
  <div
    v-if="item.activeItem"
    :class="item.menuClass ? item.menuClass : 'w-128'"
    class="
      absolute
      top-18
      rounded-b-md
      text-grey-800
      right-1
      shadow-2
      bg-gray-300
      z-2
      min-w-36 min-h-1/2
      p-2
    "
  >
    <!-- {{ item.activeItem.component }} -->
    <!-- {{ activeItem.component }} -->
    <component :is="item.activeItem.component"></component>
  </div>
</template>
