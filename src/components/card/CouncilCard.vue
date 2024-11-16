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
  <div class="council__card">
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>
  </div>
</template>
<style scoped>
.council__card {
  background: #ebf1eb;
  padding: 24px 30px;
  border-radius: 10px;

  h4 {
    font-size: 2.4rem;
    line-height: 29px;
    color: #000;
  }
  p {
    font-size: 1.6rem;
    line-height: 19.36px;
    color: #000;
  }

  @media (max-width: 1024px) {
    padding: 18px 20px;
  }

  @media (max-width: 991px) {
    padding: 15px 20px;
    h4 {
      font-size: 2rem;
      line-height: 25px;
    }
    p {
      font-size: 1.4rem;
      line-height: 16px;
    }
  }
  @media (max-width: 768px) {
    padding: 10px 16px;
    h4 {
      font-size: 1.8rem;
      line-height: 22px;
    }
    
  }
}
</style>
