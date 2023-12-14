<template>
  <HeaderView />
  <main class="main">
    <div class="container">
      <h1 v-if="store.state.currentManga === undefined">Что-то пошло не так</h1>

      <div v-else class="main__manga manga">
        <img class="manga__img" :src="store.state.currentManga.image" />
        <div class="manga__info">
          <MangaDescription :manga="store.state.currentManga" />
          <ChapterList :manga="store.state.currentManga" />
        </div>
      </div>
    </div>
  </main>
  <FooterView />
</template>

<script setup lang="ts">
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import MangaDescription from "@/components/MangaDescription.vue";
import ChapterList from "@/components/ChapterList.vue";

import { useStore } from "vuex";
import { IState } from "@/types/IState";
import { useRoute } from "vue-router";
import { onBeforeMount } from "vue";

const store = useStore<IState>();
const route = useRoute();

onBeforeMount(() => {
  store.commit("setCurrentManga", +route.params.id);
});
</script>

<style scoped lang="scss">
.container {
  max-width: 1100px;
}

.manga {
  display: flex;
  gap: 30px;

  &__img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
  }
}

@media (max-width: 990px) {
  .manga {
    margin: 0 auto;
    max-width: 600px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
