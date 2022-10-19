<script setup>
import { ref } from "vue";
import NavUserProfile from "./NavUserProfile.vue";
import { useMenuStore } from "../stores/MenuStore.js";

import UpgradeIcon from "../assets/icons/Checkout_v3.svg";
import ShopIcon from "../assets/icons/Shop_v3.svg";

let largeMenu = ref(false);

const menu = useMenuStore();
</script>
<template>
  <nav
    :class="largeMenu ? 'w-64' : 'w-16'"
    class="h-full bg-white flex flex-col justify-start p-2 overflow-y overscroll-contain drop-shadow-sm pt-18 pt-16 col-span-4 tranlate-z0 relative transition ease-in-out delay-150"
  >
    <button @click.prevent="largeMenu = !largeMenu">{{ largeMenu ? "-" : "+" }}</button>
    <NavUserProfile v-if="largeMenu" />
    <div class="pb-32 flex flex-col justify-center h-full">
      <ul class="list-none" :class="largeMenu ? 'text-left' : 'text-center'">
        <li
          v-for="item in menu.nav"
          class="hover-border-blue-600 last:fixed last:bottom-0 last:left-2 last:w-full last:pr-4 last:mb-2"
          :class="largeMenu ? 'border-l-4 border-l-white hover-border-l-4 pl-2' : ''"
        >
          <a
            class="flex hover-bg-blue-100 rounded-md items-center text-blue-900 hover-text-blue-800 hover:transition-all hover:duration-200"
            :href="item.link"
            :class="largeMenu ? 'px-2 py-3' : 'my-2 p-1'"
          >
            <component
              :is="item.icon"
              class="mr-3 w-5"
              :class="largeMenu ? '' : 'w-full m0'"
            />
            <!-- <img class="w-6 mr-2" :src="item.icon" alt=" " />  -->
            <span v-if="largeMenu">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- <ul class="fixed bottom-0 left-0 bg-white w-64">
      <hr />
      <li
        class="border-l-4 border-l-white hover-border-l-4 pl-2 ml-2 pr-2 hover-border-green-600 w-full my-2"
      >
        <a
          class="flex px-2 py-3 hover-bg-green-200 rounded-md items-center text-green-900 hover-text-green-800 hover:transition-all hover:duration-200"
          href="#"
          ><img :src="UpgradeIcon" class="w-6 mr-2" alt="" />Upgrade</a
        >
      </li>
      <li
        class="border-l-4 border-l-white hover-border-l-4 pl-2 ml-2 pr-2 hover-border-green-600 w-full mb-2"
      >
        <a
          class="flex px-2 py-3 bg-green-100 hover-bg-green-200 rounded-md items-center text-green-900 hover-text-green-800 hover:transition-all hover:duration-200"
          href="#"
          ><img :src="ShopIcon" class="w-6 mr-2" alt="" />Shop</a
        >
      </li>
    </ul> -->
  </nav>
</template>
<style>
/* .shop-menu {
  width: inherit;
} */
.tranlate-z0 {
  transform: translateZ(0);
}
@media screen and (max-height: 789px) {
  #user-profile {
    display: none;
  }
}
</style>
