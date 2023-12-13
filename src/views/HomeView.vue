<template>
  <HeaderView />
  <main class="main">
    <div class="container">
      <div class="main__wrapper">
        <CatalogView />
        <SortView />
      </div>
    </div>
  </main>
  <FooterView />
</template>

<script setup lang="ts">
import HeaderView from "@/components/HeaderView.vue";
import SortView from "@/components/SortView.vue";
import CatalogView from "@/components/CatalogView.vue";
import FooterView from "@/components/FooterView.vue";
</script>

<style lang="scss">
.main {
  padding: 32px 0;
  flex: 1;

  &__wrapper {
    display: flex;
    list-style: none;
    gap: 50px;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
