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
    <img
      src="https://picsum.photos/300/300"
      alt=""
      class="rounded-full max-w-45 w-full p-2"
    />
    <div>
      <p><strong>FirstName LastName</strong></p>
      <p>Lorem ipsum dolor, sit</p>
    </div>
  </div>
</template>
