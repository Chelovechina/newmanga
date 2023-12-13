<template>
  <div class="description">
    <h1 class="description__title">
      {{ props.manga.name }}
    </h1>
    <ul class="description__genres">
      <li class="description__genre" v-for="id in props.manga.genres" :key="id">
        {{ store.getters.getGenreById(id).name }}
      </li>
    </ul>
    <p class="description__text">
      {{ props.manga.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { IManga } from "@/types/IManga";
import { IState } from "@/types/IState";
import { useStore } from "vuex";

const props = defineProps<{ manga: IManga }>();
const store = useStore<IState>();
</script>

<style scoped lang="scss">
.description {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 45px;

  &__title {
    font-size: 36px;
    font-weight: 700;
  }

  &__genres {
    display: flex;
    gap: 10px;
    list-style: none;
  }

  &__genre {
    padding: 5px 8px;
    border-radius: 4px;
    background: #121117;
    font-size: 14px;
    font-weight: 600;
  }

  &__text {
    font-size: 14px;
  }
}
</style>
