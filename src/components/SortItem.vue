<template>
  <li class="sort__item">
    <button @click="handleClick" class="sort__btn" :class="isActive ? 'active' : ''">
      {{ props.genre.name }}
    </button>
  </li>
</template>

<script setup lang="ts">
import { IGenre } from "@/types/IGenre";
import { IState } from "@/types/IState";
import { useStore } from "vuex";

const props = defineProps<{ genre: IGenre; isActive: boolean }>();
const store = useStore<IState>();

const handleClick = () => {
  store.commit("toggleActiveGenres", props.genre.id);
};
</script>

<style scoped lang="scss">
.sort__btn {
  padding: 10px 16px;
  border-radius: 5px;
  background: #16151b;
  border: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background: #5648b2;
  }
}
</style>
