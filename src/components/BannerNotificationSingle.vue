<script setup>
defineProps({
  item: Object,
});
</script>
<template>
  <Transition name="fade">
    <div
      v-show="item.active"
      class="bg-yellow-100 text-yellow-900 px-4 py-2 border-yellow-200 border rounded-md mt-2 flex justify-between drop-shadow-sm gap-8"
    >
      <p class="text-yellow-900" v-html="item.text"></p>
      <a v-if="item" @click="$emit('dismiss')" class="hover:underline cursor-pointer"
        >Dismiss</a
      >
    </div>
  </Transition>
</template>
<style scoped>
a {
  color: brown !important;
}

.fade-enter-active,
fade-leave-active {
  transition: all 0.4s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>
