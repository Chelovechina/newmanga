<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link to="/" class="header__link">
          <img class="header__logo" src="./../../public/logo.svg" alt="Логотип" />
        </router-link>
        <SearchView />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchView from "./SearchView.vue";
</script>

<style scoped lang="scss">
.header {
  background: #121117;
  padding: 10px 0;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;
    background: #1c1b21;
  }

  &__logo {
    width: 28px;
    height: 20px;
  }

  &__input {
    width: 400px;
    background: #1c1b21;
    border: none;
    padding: 11px 16px;
    font-size: 14px;
    border-radius: 5px;
  }
}
</style>
