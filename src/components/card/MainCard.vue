<script setup></script>
<template>
  <div class="card">
    <div class="card__img"></div>
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
  max-width: 50%;
  padding: 99px 40px;
  position: relative;
  overflow: hidden;
  &__img {
    height: 562px;
    background-color: var(--gray-800);
    border-radius: var(--border-radius);
    position: relative;
    z-index: 999;
  }
  &__shape {
    position: absolute;
    top: 12%;
    left: 0;
  }
}
</style>
