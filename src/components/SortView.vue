<template>
  <button @click="handleOpen" class="sort__btn">
    <img src="@/assets/filter.svg" alt="Фильтр" />
  </button>
  <div @click="handleClose" class="cover" :class="store.state.isModalActive ? 'active' : ''" />
  <section class="main__sort sort" :class="store.state.isModalActive ? 'active' : ''">
    <div class="sort__header">
      <h2 class="main__title">Жанры</h2>
      <button @click="store.commit('clearActiveGenres')" class="sort__clear">
        Сбросить
      </button>
    </div>
    <ul class="sort__list">
      <SortItem v-for="genre in store.state.genres" :genre="genre" :key="genre.id"
        :isActive="store.state.activeGenres.includes(genre.id)" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { IState } from "@/types/IState";
import { useStore } from "vuex";
import SortItem from "./SortItem.vue";

const store = useStore<IState>();

const handleOpen = () => {
  store.commit("setIsModalActive", true);
};
const handleClose = () => {
  store.commit("setIsModalActive", false);
};
</script>

<style scoped lang="scss">
.sort__btn {
  position: fixed;
  background: #5648b2;
  border: none;
  border-radius: 5px;
  padding: 10px;
  display: none;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  left: 20px;
}

.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: none;
}

.sort {
  max-width: 350px;
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__clear {
    color: #e93c39;
    font-size: 14px;
    padding: 6px 10px;
    border-radius: 3px;
    background: inherit;
    border: none;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      background: #1e1419;
    }
  }

  &__list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    list-style: none;
  }
}

@media (max-width: 880px) {
  .sort__btn {
    display: flex;
  }

  .cover.active {
    display: block;
  }

  .sort {
    position: fixed;
    right: -500px;
    top: 0;
    bottom: 0;
    background: #121117;
    padding: 30px 15px;
    transition: right 0.3s ease-in-out;

    &.active {
      right: 0;
    }
  }
}

@media (max-width: 500px) {
  .sort {
    max-width: 300px;
  }
}
</style>
