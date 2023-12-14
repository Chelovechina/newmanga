<template>
  <h1 v-if="store.state.currentChapter === undefined">Что-то пошло не так</h1>

  <div v-else>
    <ChapterHeader />
    <main class="main">
      <h1 class="main__title">
        {{ store.state.currentChapter.name }}
      </h1>
    </main>
  </div>
</template>

<script setup lang="ts">
import ChapterHeader from "@/components/ChapterHeader.vue";

import { onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

watch(
  () => route.params.chapterId,
  (newChapterId, oldChapterId) => {
    if (newChapterId !== oldChapterId) {
      store.commit("setCurrentChapter", +newChapterId);
    }
  }
);

onBeforeMount(() => {
  store.commit("setCurrentChapter", +route.params.chapterId);
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
