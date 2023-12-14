<template>
  <div class="chapters">
    <h2 class="chapters__title">Список глав</h2>
    <ul class="chapters__list">
      <li
        class="chapters__item"
        v-for="chapterId in props.manga.chapters"
        :key="chapterId"
      >
        <router-link
          class="chapters__link"
          :to="'/read/' + chapterId.toString()"
        >
          {{ $store.getters.getChapterById(chapterId).name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IManga } from "@/types/IManga";

const props = defineProps<{ manga: IManga }>();
</script>

<style scoped lang="scss">
.chapters {
  &__title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }

  &__link {
    text-decoration: none;
    display: flex;
    width: 600px;
    padding: 15px 50px;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    background: #121117;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background: #5648b2;
    }
  }
}

@media (max-width: 670px) {
  .chapters {
    &__link {
      width: 400px;
    }
  }
}

@media (max-width: 430px) {
  .chapters {
    &__link {
      width: 300px;
    }
  }
}
</style>
