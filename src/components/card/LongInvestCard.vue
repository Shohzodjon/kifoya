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
      <h2>{{ $t(`${title}`) }} </h2>
      <p v-html="$t(`${desc}`)"></p>
    </div>
    <div class="right">
      <p>{{ $t(`${desc_two}`) }}</p>
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
      color: #828282;
      font-weight: 400;
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
      font-weight: 400;
      font-style: italic;
    }
  }

  @media (max-width: 1024px) {
    padding: 32px 30px;

    .left {
      h2 {
        font-size: 28px;
        line-height: 30px;
      }
      p {
        font-size: 16px;
        line-height: 19px;
      }
    }
    .right {
      padding-left: 20px;
      p {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 25px 26px;
    gap: 10px;

    .left {
      max-width: 100%;
      h2 {
        font-size: 25px;
        line-height: 25px;
      }
      p {
        font-size: 16px;
      }
    }
    .right {
      width: 100%;
      max-width: 100%;
      padding-left: 0px;
      align-items: flex-start;
      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 20px;
    border-radius: 20px;
    gap: 10px;

    .left {
      h2 {
        font-size: 22px;
        line-height: 25px;
      }
      p {
        font-size: 14px;
      }
    }
    .right {
      p {
        font-size: 14px;
      }
    }
  }

}
</style>
