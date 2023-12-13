<template>
  <section class="main__catalog catalog">
    <h2 class="main__title catalog__title">Каталог</h2>
    <MangaList />
  </section>
</template>

<script setup lang="ts">
import MangaList from "@/components/MangaList.vue";
</script>

<style scoped lang="scss">
.catalog {
  width: 100%;

  &__title {
    margin-bottom: 20px;
  }
}

.catalog__title {
  margin-bottom: 20px;
}
</style>
