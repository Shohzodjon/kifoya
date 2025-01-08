<script setup></script>
<template>
  <div class="card">
    <div class="card__img">
      <slot name="img" />
    </div>
    <span class="card__shape">
      <img src="@/assets/images/card_shape.png" alt="card shape" />
    </span>
  </div>
</template>
<style scoped lang="scss">
.card {
  background: var(--gray-300);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 45%;
  padding: 50px 30px;
  position: relative;
  overflow: hidden;
  &__img {
    height: 420px;
    background-color: var(--gray-300);
    border-radius: var(--border-radius);
    z-index: 999;
    overflow: hidden;

    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }
  }
  &__shape {
    position: absolute;
    top: 12%;
    left: 0;
  }

  @media (max-width: 1400px) {
    max-width: 45%;
    padding: 50px 30px;
  }

  @media (max-width: 1200px) {
    padding: 50px 20px;

    &__img {
      height: 500px;
      max-width: 95%;
      margin: 0 auto;
    }
  }

  @media (max-width: 1024px) {
    max-width: 70%;
    margin: 0 auto;
    &__img {
      max-width: 94%;
      margin: 0 auto;
      height: 520px;
    }
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
    max-width: 90%;
    &__img {
      max-width: 100%;
      height: 480px;
    }
  }
  @media (max-width: 576px) {
    padding: 20px 15px;
    max-width: 100%;
    &__img {
      max-width: 96%;
      height: 440px;
    }
  }
}
</style>
