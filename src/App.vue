<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2 class="m-0">{{ $t('company') }}</h2>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer class="mx-auto text-center">
    <p>Leonel Lopez &copy; 2023</p>
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </footer>
</template>

<style>
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

header {
  min-height: 50px;
  margin: 0 10px;
}

footer {
  width: calc(100vw - 10px);
  min-height: 90px;
  margin: 0 10px;
}

main {
  margin: 0 10px;
  min-height: calc(100vh - 200px);
}
</style>