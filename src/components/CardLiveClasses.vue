<script setup>
import { ref } from "vue";
import dayjs from "dayjs";

const classes = ref([
  {
    date: "2022-10-13",
    expand: true,
    events: [
      { title: "Pronounciation", free: true, link: "/reg" },
      { title: "IELTS Writing Task 1", free: false, link: "/reg" },
    ],
  },
  {
    date: "2022-10-14",
    expand: true,
    events: [
      { title: "Pronounciation", free: true, link: "/reg" },
      { title: "IELTS Writing Task 1", free: false, link: "/reg" },
    ],
  },
  {
    date: "2022-10-15",
    expand: true,
    events: [
      { title: "Pronounciation", free: true, link: "/reg" },
      { title: "IELTS Writing Task 1", free: false, link: "/reg" },
    ],
  },
  {
    date: "2022-10-16",
    expand: true,
    events: [
      { title: "Pronounciation", free: true, link: "/reg" },
      { title: "IELTS Writing Task 1", free: false, link: "/reg" },
    ],
  },
  {
    date: "2022-10-17",
    expand: true,
    events: [
      { title: "Pronounciation", free: true, link: "/reg" },
      { title: "IELTS Writing Task 1", free: false, link: "/reg" },
    ],
  },
  { date: "2022-10-18", expand: true, events: [] },
  { date: "2022-10-19", expand: true, events: [] },
]);
</script>
<template>
  <section class="h-full flex flex-col">
    <div class="w-full px-4 py-2 rounded-t-md text-sm text-center border-b-slate-200">
      Registered live classes remaining: 0/4
    </div>
    <div class="overflow-y-auto rounded-b-md h-full mb-4 pb-16">
      <div v-for="c in classes" class="p-2" @click="c.expand = !c.expand">
        <div
          class="text-center bg-slate-400 text-white p-2 rounded-sm shadow-sm hover:shadow-lg cursor-pointer shadow-slate-200 flex justify-between items-center overflow-y"
        >
          <span></span>
          <h5>{{ dayjs(c.date).format("dddd, DD MMMM YYYY") }}</h5>
          <span>{{ c.expand ? "–" : "+" }}</span>
        </div>
        <div class="divide-y divide-slate-300" v-show="c.expand">
          <p v-for="e in c.events" class="p-2 flex justify-between items-center">
            <span>{{ e.title }}</span
            ><a class="text-xs uppercase" :href="e.link">Register</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
/* lines I added */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
