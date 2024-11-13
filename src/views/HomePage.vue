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
        Islom moliyasiga asoslangan kuchmas mulkka investitsiya
      </h2>
      <p class="home_desc">
        Mustaqil Moliya KMIT – sizga Uzbekistonning mulk bozoriga oson kirish
        imkonini beruvchi va raqobatbardosh daromad olish imkonini beruvchi va
        O’zbekistonda birinchi “ko'chmas mulk investitsiya trasti” (KMIT)
        hisoblanadi. Ta’kidlash lozimki, Mustaqil Moliya KMIT faoliyati Islom
        moliyasi tamoyillariga asoslangandir.
      </p>

      <div class="home_btn_group">
        <button class="home_btn_left">Biz bilan aloqa</button>
        <button class="home_btn_right">Biz bilan aloqa</button>
      </div>


      <Vue3Marquee :gradient="gradientEnabled" :pauseOnHover="true">
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

      <!-- <div class="desc_grid">
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
      </div> -->
    </div>
  </section>
</template>
