<script setup>
import { ref, onMounted, watch } from "vue";
import { lang } from "@/uitiles/currentLang";
import { RouterLink, useRoute } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import ru from "../../assets/images/ru.png";
import uz from "../../assets/images/uz.png";
import en from "../../assets/images/en.png";
import { MenuOutlined } from "@ant-design/icons-vue";
const locale = ref("uz");
const langFlag = ref(uz);
const menuStore =useMenuStore();



onMounted(async () => {});

watch(locale, (old, newVal) => {
  switch (old) {
    case "uz": {
      langFlag.value = uz;
      return;
    }
    case "en": {
      langFlag.value = en;
      return;
    }
    case "ru": {
      langFlag.value = ru;
      return;
    }
  }
});

const toggle=()=>{
  menuStore.toggleMenu();
}


</script>
<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-flex">
        <RouterLink :to="`/${lang}`" class="navbar-logo">
          <div class="navbar-logo__img">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
        </RouterLink>

        <ul class="navbar-list">
          <li>
            <a href="#about">Biz haqimizda</a>
          </li>
          <li>
            <a href="#constraction">Bu qanday ishlaydi?</a>
          </li>
          <li>
            <a href="#team">Bizning jamoa</a>
          </li>
          <li>
            <a href="#contact">Biz bilan aloqa</a>
          </li>
        </ul>

        <div class="navbar-lang">
          <div class="lang-box">
            <span><img :src="langFlag" alt="flag" /></span>
            <select name="" id="" v-model="locale">
              <option value="uz">O'zbek</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
          <button class="">Biz bilan aloqa</button>
          <button class="menu_btn" @click="toggle"><MenuOutlined /></button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>


</style>
