<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <img class="footer__logo" src="./../../public/logo.svg" alt="Логотип" />
        <p class="footer__text">© 2023 Zhumashov Kubanych</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  background: #121117;
  padding: 50px 0;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  &__logo {
    width: 60px;
    height: 30px;
  }

  &__text {
    color: #484848;
    font-size: 14px;
  }
}
</style>
