<script setup>
defineProps({
  img: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    default: "",
  },
  position: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["cardClick"]);
</script>
<template>
  <div class="employee__card"  @click="emit('cardClick')">
    <div class="employee__img">
      <img :src="img" alt="employee img" />
    </div>
    <div class="employee__info">
      <h3>{{ title }}</h3>
      <h6>{{ $t(`${position}`) }}</h6>
      <p v-if="desc">{{ $t(`${desc}`) }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.employee__card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 13px;
  transition: all linear 0.4s;
  border-radius: 10px;
  width: 100%;
  border: 1px solid rgba(128, 128, 128, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  .employee__img {
    width: 140px;
    height: 140px;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .employee__info {
    h3 {
      font-size: 2.4rem;
      line-height: 29px;
      font-weight: 700;
      text-align: center;
    }
    h6 {
      font-size: 1.6rem;
      line-height: 19.36px;
      font-weight: 400;
      color: #000;
      text-align: center;
    }
    p {
      font-size: 1.6rem;
      line-height: 19.36px;
      font-weight: 400;
      color: #045140;
      text-align: center;
    }
  }

  @media (max-width: 992px) {
    width: 45% !important;
    .employee__info {
      h3 {
        font-size: 2rem;
        line-height: 25px;
      }
    }
  }

  @media (max-width: 660px) {
    width: 50% !important;
    margin: 0 auto;
    .employee__img {
      width: 120px;
      height: 120px;
    }
    .employee__info {
      h3 {
        font-size: 1.8rem;
        line-height: 20px;
      }
      h6 {
        font-size: 1.4rem;
        line-height: 16px;
      }
      p {
        font-size: 1.4rem;
        line-height: 16px;
      }
    }
  }
  @media (max-width: 567px) {
    width: 70% !important;
  }
  @media (max-width: 450px) {
    width: 80% !important;
  }
}
</style>
