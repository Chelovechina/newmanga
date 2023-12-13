<template>
  <div v-if="store.getters.getSortedMangas.length === 0" class="manga__empty empty">
    <img class="empty__img" src="@/assets/sleeping_cat.png" alt="Спящая кошка" />
    <p class="empty__text">По вашему запросу ничего не найдено</p>
  </div>

  <ul v-else class="manga__list">
    <MangaItem v-for="manga in store.getters.getSortedMangas" :manga="manga" :key="manga.id" />
  </ul>
</template>

<script setup lang="ts">
import { IState } from "@/types/IState";
import { useStore } from "vuex";
import MangaItem from "./MangaItem.vue";

const store = useStore<IState>();
</script>

<style scoped lang="scss">
.manga__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
}

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}

@media (max-width: 1100px) {
  .manga__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 880px) {
  .manga__list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 750px) {
  .manga__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 560px) {
  .manga__list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
