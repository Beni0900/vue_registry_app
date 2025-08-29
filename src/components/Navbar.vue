<template>
  <nav class="p-4 bg-gray-200 flex justify-center gap-4">
    <button
      @click="$emit('navigate', 'list')"
      class="px-3 py-1 bg-blue-500 text-white rounded"
    >
      Projektek Listája
    </button>
    <button
      @click="$emit('navigate', 'form')"
      class="px-3 py-1 bg-green-500 text-white rounded"
    >
      Új Projekt Hozzáadása
    </button>
  </nav>
</template>
