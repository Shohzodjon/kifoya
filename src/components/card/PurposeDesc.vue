<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="purpose_card">
    <h2>{{ title }}</h2>
    <p v-if="desc">{{ desc }}</p>
    <slot name="content" />
  </div>
</template>
<style scoped lang="scss">
.purpose_card {
  h2 {
    font-size: 2rem;
    line-height: 25px;
    font-weight: 800;
    color: var(--dark-blue);
    margin-bottom: 5px;
  }
  p {
    font-size: 1.6rem;
    color: var(--dark-blue);
    line-height: 24px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      line-height: 22px;
 
    }
    p {
      font-size: 1.4rem;
      line-height: 20px;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.8rem;
      line-height: 20px;
    }
    p {
      font-size: 1.4rem;
      line-height: 20px;
    }
  }
}
</style>
