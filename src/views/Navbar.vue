<template>
  <nav class="py-4 bg-gray-200 flex justify-center gap-4 w-100%">
    <router-link
      to="/projects"
      class="px-3 py-1 bg-blue-500 text-white rounded transition-all tranisition-duration-300 hover:bg-blue-700"
      active-class="bg-blue-700"
    >
      Projektek Listája
    </router-link>
    <router-link
      to="/projects/new"
      class="px-3 py-1 bg-green-500 text-white rounded transition-all tranisition-duration-300 hover:bg-green-700"
      active-class="bg-green-700"
    >
      Új Projekt Hozzáadása
    </router-link>
  </nav>
</template>
