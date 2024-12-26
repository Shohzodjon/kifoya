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
  desc_two: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="card">
    <div class="left">
      <h2>{{ title }}</h2>
      <p v-html=" desc"></p>
    </div>
    <div class="right">
      <p>{{ desc_two }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  background: #ebf1eb;
  display: flex;
  justify-content: flex-start;
  border-radius: 30px;
  padding: 42px 40px;

  .left {
    width: 100%;
    max-width: 50%;
    h2 {
      font-size: 32px;
      line-height: 38.9px;
      font-weight: 600;
      color: #045140;
    }
    p {
      font-size: 16px;
      line-height: 19.09px;
      color: #263238;
      font-weight: 500;
    }
  }
  .right {
    width: 100%;
    max-width: 50%;
    padding-left: 22px;
    display: flex;
    align-items: flex-end;
    p {
      font-size: 16px;
      line-height: 19.09px;
      color: #263238;
      font-weight: 600;
    }
  }
}
</style>
