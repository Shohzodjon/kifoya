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
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </div>
</template>
<style scoped lang="scss">
.card {
  background: var(--gray-300);
  padding: 36px 30px;
  border-radius: 10px;
  // height: 100% !important;
  width:100%;

  h3 {
    font-size: 2.4rem;
    line-height: 28.64px;
    font-weight: 500;
    color: #000;
    text-wrap-style: balance;
  }
  p {
    font-size: 1.6rem;
    line-height: 24px;
    color: #676767;
    font-weight: 400;
    text-wrap-style: balance;
    display: -webkit-box; 
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
  overflow: hidden; 
  text-overflow: ellipsis;
  }

  @media (max-width: 1024px) {
    padding: 25px 20px;

    h3 {
      font-size: 2rem;
      line-height: 28px;
    }
    p {
      font-size: 1.4rem;
      line-height: 22px;
    }
  }

  @media (max-width: 991px) {
    padding: 25px 20px;
    width:33%;
  }
  @media (max-width: 768px) {
    padding: 25px 20px;
    width:100%;
  }
}
</style>
