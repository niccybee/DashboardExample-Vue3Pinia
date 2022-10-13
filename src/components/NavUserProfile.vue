<script setup>
defineProps({
  user: Object,
});
</script>
<template>
  <div
    id="user-profile"
    class="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-sm"
  >
    <div class="w-36 h-36 rounded-full bg-slate-300 m-2">
      <img
        src="https://picsum.photos/300/300"
        alt=""
        class="rounded-full max-w-36 w-full"
      />
    </div>
    <div>
      <p><strong>FirstName LastName</strong></p>
      <p>Lorem ipsum dolor, sit</p>
    </div>
  </div>
</template>
