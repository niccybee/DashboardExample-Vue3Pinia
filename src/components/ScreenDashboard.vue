<script setup>
import { ref } from "vue";
import CardLiveClasses from "./CardLiveClasses.vue";
import Card from "./Card.vue";

let showBanner = ref(true);
</script>

<template>
  <main
    class="grid grid-cols-2 gap-2 grid-rows-4 w-full h-full p-2 overflow-y overflow-auto"
  >
    <section class="p-2 row-span-3">
      <h2>Live Classes</h2>
      <Card>
        <CardLiveClasses />
      </Card>
    </section>
    <section class="row-span-3 p-2 flex flex-col">
      <h2>Study Planner</h2>
      <div class="w-full h-full rounded-md bg-white drop-shadow-sm"></div>
    </section>
    <section
      class="col-span-2 p-2 flex w-full h-full rounded-md bg-white drop-shadow-sm"
      v-if="showBanner"
    >
      <img src="https://picsum.photos/300" class="h-full rounded-md" alt="" />
      <div class="w-full h-full rounded-md bg-white drop-shadow-sm p-4">
        <div
          @click="showBanner = !showBanner"
          class="w-4 h4 bold cursor-pointer rounded-full outline absolute top-0 right-0 text-xs flex items-center justify-center"
        >
          x
        </div>
        <h3>Have you tried our other product?</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur veritatis
          officia est, aut voluptatum ipsam eaque corrupti!
        </p>
        <button class="bg-blue-900 text-white hover:bg-blue-700 px-4 py-2 text-sm mt-2">
          Launch
        </button>
      </div>
    </section>
    <!-- <div class="row-span-1 p-2 flex flex-col">
      <h2>Announcements</h2>
      <div class="w-full h-full rounded-md bg-white drop-shadow-sm"></div>
    </div> -->
  </main>
</template>
