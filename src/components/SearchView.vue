<template>
  <div class="search">
    <input @input="handleChange" :value="store.state.searchValue" type="text" class="search__input"
      placeholder="Поиск..." />
    <ul class="search__suggests suggests">
      <SuggestItem v-for="manga in store.getters.getSearchSuggestions" :manga="manga" :key="manga.id" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import SuggestItem from "./SuggestItem.vue";

const store = useStore();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  store.commit("setSearchValue", target.value);
};
</script>

<style scoped lang="scss">
.search {
  position: relative;

  &__input {
    width: 400px;
    background: #1c1b21;
    border: none;
    padding: 11px 16px;
    font-size: 14px;
    border-radius: 5px;
  }

  &__input:focus+&__suggests {
    color: green;
    display: block;
  }
}

.suggests {
  width: 400px;
  position: absolute;
  top: 50px;
  left: 0;
  background: #1c1b21;
  list-style: none;
  border-radius: 5px;
  display: none;
  overflow: hidden;

  &:hover {
    display: block;
  }
}

@media (max-width: 490px) {
  .search__input {
    width: 300px;
  }

  .suggests {
    width: 300px;
  }
}
</style>
