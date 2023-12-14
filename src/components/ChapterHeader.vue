<template>
  <header class="header">
    <router-link to="/">
      <img class="header__logo" src="./../../public/logo.svg" alt="Логотип" />
    </router-link>
    <nav class="header__nav">
      <router-link
        class="header__link"
        :to="`/read/${store.state.currentChapter.id - 1}`"
        :class="store.state.currentChapter.id <= 1 ? 'disabled' : ''"
      >
        <img
          class="header__arrow"
          src="./../assets/arrow-left.svg"
          alt="Назад"
        />
      </router-link>
      <router-link
        class="header__link"
        :to="`/read/${store.state.currentChapter.id + 1}`"
        :class="
          store.state.currentChapter.id >= store.state.totalChapters
            ? 'disabled'
            : ''
        "
      >
        <img
          class="header__arrow"
          src="./../assets/arrow-right.svg"
          alt="Вперед"
        />
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #121117;

  &__logo {
    height: 32px;
    width: 32px;
  }

  &__nav {
    display: flex;
    gap: 5px;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;
    background: #1c1b21;

    &.disabled {
      background: inherit;
      opacity: 0.5;
      text-decoration: none;
      pointer-events: none;
    }
  }

  &__arrow {
    width: 24px;
    height: 24px;
  }
}
</style>
