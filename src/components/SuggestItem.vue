<template>
  <li class="suggests__item">
    <router-link :to="'/' + props.manga.id" class="suggests__link">
      <img
        class="suggests__img"
        :src="props.manga.image"
        :alt="props.manga.name"
      />
      {{ manga.name }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { IManga } from "./../types/IManga";

const props = defineProps<{ manga: IManga }>();
</script>

<style scoped lang="scss">
.suggests {
  &__link {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background: #5648b2;
    }
  }

  &__img {
    width: 30px;
    height: 40px;
    object-fit: cover;
    border-radius: 3px;
  }
}
</style>
