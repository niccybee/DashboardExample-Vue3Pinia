<script setup>
import { useNotificationStore } from "../stores/NotificationStore";
const store = useNotificationStore();
let thisThing = "I am a thing";
</script>
<template>
  <div>
    <h2 class="text-gray-800 p-1">Notifications</h2>
    <div>
      <div
        v-for="n in store.notifications"
        class="bg-slate-100 hover:bg-slate-200 w-full divide-y my-1 rounded-md shadow-sm p-2 text-sm transistion-bg duration-1s"
      >
        <a :href="n.link" class="">
          <h4>{{ n.heading }}</h4>
          <p>{{ n.body }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
