<script setup>
import NavUserProfile from './NavUserProfile.vue';
import { useMenuStore } from '../stores/MenuStore.js';

let largeMenu = true;

const menu = useMenuStore();
</script>
<template>
  <nav
    class="
      h-full
      bg-white
      w-64
      flex flex-col
      justify-start
      p-2
      overflow-y overflow-auto
      overscroll-contain
      drop-shadow-md
      pt-18 pt-16
      col-span-4
      tranlate-z0
      relative
    "
  >
    <NavUserProfile />
    <div class="pb-32 flex flex-col justify-center h-full">
      <ul class="list-none text-left">
        <li
          v-for="item in menu.nav"
          class="
            border-l-4 border-l-white
            hover-border-l-4
            pl-2
            hover-border-blue-600
          "
        >
          <a
            class="
              flex
              px-2
              py-3
              hover-bg-blue-100
              rounded-md
              items-center
              text-blue-900
              hover-text-blue-800 hover:transition-all hover:duration-200
            "
            :href="item.link"
            ><img
              class="mr-2 rounded-md"
              src="https://picsum.photos/30"
              alt=""
            />{{ item.text }}</a
          >
        </li>
      </ul>
    </div>
    <ul class="fixed bottom-0 left-0 bg-white w-64">
      <hr />
      <li
        class="
          border-l-4 border-l-white
          hover-border-l-4
          pl-2
          ml-2
          pr-2
          hover-border-green-600
          w-full
          my-2
        "
      >
        <a
          class="
            flex
            px-2
            py-3
            hover-bg-green-200
            rounded-md
            items-center
            text-green-900
            hover-text-green-800 hover:transition-all hover:duration-200
          "
          href="#"
          ><img
            class="mr-2 rounded-md"
            src="https://picsum.photos/30"
            alt=""
          />Upgrade</a
        >
      </li>
      <li
        class="
          border-l-4 border-l-white
          hover-border-l-4
          pl-2
          ml-2
          pr-2
          hover-border-green-600
          w-full
          mb-2
        "
      >
        <a
          class="
            flex
            px-2
            py-3
            bg-green-100
            hover-bg-green-200
            rounded-md
            items-center
            text-green-900
            hover-text-green-800 hover:transition-all hover:duration-200
          "
          href="#"
          ><img
            class="mr-2 rounded-md"
            src="https://picsum.photos/30"
            alt=""
          />Shop</a
        >
      </li>
    </ul>
  </nav>
</template>
<style>
/* .shop-menu {
  width: inherit;
} */
.tranlate-z0 {
  /* transform: translateZ(0); */
}
@media screen and (max-height: 789px) {
  #user-profile {
    display: none;
  }
}
</style>
