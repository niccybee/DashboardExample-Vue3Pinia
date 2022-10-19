<script setup>
import { useHelpStore } from "../stores/HelpStore";
const { kb, searchInput, recentSearches, handleInput } = useHelpStore();
</script>
<template>
  <div>
    <h2 class="mb-4">Help Component</h2>
    <p>{{ searchInput }}</p>
    <div class="border-box flex flex-col justify-between h-full bg-slate-100">
      <div>
        <input
          class="max-w-full w-full p-2 rounded-md border-1 border-solid"
          type="text"
          placeholder="Search for help topic"
          @input="handleInput"
        />
      </div>
      <a
        v-for="h in kb"
        target="_blank"
        :href="h"
        class="p-2 bg-white hover:bg-blue-100 shadow-sm cursor-pointer rounded-md my-1 text-gray-600"
      >
        {{ h.title }}
      </a>
    </div>
    <div>
      <h3 class="pt-2">Recent Searches</h3>
      <div>
        <p v-for="search in recentSearches" @click="searchInput = search"></p>
      </div>
    </div>
  </div>
</template>
