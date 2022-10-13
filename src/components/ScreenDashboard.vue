<script setup>
import CardLiveClasses from "./CardLiveClasses.vue";
import Card from "./Card.vue";
</script>

<template>
  <main
    class="grid grid-cols-2 gap-2 grid-rows-4 w-full h-full p-2 box-border overflow-y overflow-auto"
  >
    <section class="p-2 row-span-3">
      <h2>Live Classes</h2>
      <Card>
        <CardLiveClasses />
      </Card>
    </section>
    <div class="row-span-3 p-2 flex flex-col">
      <h2>Study Planner</h2>
      <div class="w-full h-full rounded-md bg-white drop-shadow-sm"></div>
    </div>
    <!-- <div class="col-span-2 m-2 p-2 flex w-full h-full rounded-md bg-white drop-shadow-sm">
      <img src="https://picsum.photos/300" class="h-full rounded-md" alt="" />
      <div class="w-full h-full rounded-md bg-white drop-shadow-sm"></div>
    </div> -->
    <!-- <div class="row-span-1 p-2 flex flex-col">
      <h2>Announcements</h2>
      <div class="w-full h-full rounded-md bg-white drop-shadow-sm"></div>
    </div> -->
  </main>
</template>
