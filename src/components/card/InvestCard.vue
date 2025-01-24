<script setup>
defineProps({
  order: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="invest__card">
    <span>{{ order }}</span>
    <p>{{ title }}</p>
  </div>
</template>
<style scoped lang="scss">
.invest__card {
  display: flex;
  align-items: center !important;
  gap: 20px;
  margin: 12px 0;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--green-200);
    border-radius: 100%;
    font-size: 1.5rem;
    line-height: 18px;
    font-weight: 600;
    color: #008000;
  }
  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 18px;
    color: var(--dark-blue);
    max-width: 88%;
    height: max-content !important;
  }

  @media (max-width: 1200px) {
    span {
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
    }
  
  }

  @media (max-width: 576px) {
    span {
      width: 40px;
      height: 40px;
      font-size: 1.4rem;
      line-height: 18px;
    }
    p {
      font-size: 1.6rem;
      line-height: 20px;
      max-width: 80%;
    }
  }
}
</style>
