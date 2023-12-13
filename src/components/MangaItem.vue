<template>
  <li class="manga">
    <router-link class="manga__link" :to="'/' + props.manga.id">
      <img class="manga__img" :src="props.manga.image" :alt="props.manga.name" />
      <p class="manga__name">{{ props.manga.name }}</p>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { IManga } from "@/types/IManga";

const props = defineProps<{ manga: IManga }>();
</script>

<style scoped lang="scss">
.manga {
  max-width: 165px;

  &__link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 5px;
    background: #121117;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out;
    height: 100%;

    &:hover {
      background: #5648b2;
    }
  }

  &__img {
    height: 250px;
  }

  &__name {
    padding: 10px;
    font-size: 12px;
  }
}
</style>
