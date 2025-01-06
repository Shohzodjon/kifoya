<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const gradientEnabled = computed(() => windowWidth.value >= 768);

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<template>
  <section class="home" id="about">
    <div class="container">
      <h2 class="home_title">
       {{ $t('homeTitle') }}
      </h2>
      <p class="home_desc">
       {{ $t('homeDesc') }}
      </p>

      <div class="home_btn_group">
        <a href="#contact" class="home_btn_left">{{ $t('contact') }}</a>
      </div>

      <Vue3Marquee
        :gradient="gradientEnabled"
        :pauseOnHover="true"
       
      >
        <div class="desc_item">
          <img src="@/assets/images/header_one.png" alt="" />
        </div>
        <div class="desc_item">
          <div class="desc_item_flex">
            <div>
              <img src="@/assets/images/header_two.png" alt="header" />
            </div>
            <div>
              <img src="@/assets/images/header_three.png" alt="" />
            </div>
            <div>
              <img src="@/assets/images/header_four.png" alt="" />
            </div>
          </div>
        </div>
        <div class="desc_item">
          <div style="margin: 12px 0; height: 70px">
            <img
              src="@/assets/images/header_five.png"
              alt=""
              style="height: 100%; width: 100%"
            />
          </div>
          <div>
            <img src="@/assets/images/header_six.png" alt="" />
          </div>
        </div>
        <div class="desc_item">
          <img src="@/assets/images/header_seven.png" alt="" />
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>
