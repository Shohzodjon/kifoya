<script setup>
import { ref, onMounted, watch } from "vue";
import { lang } from "@/uitiles/currentLang";
import { RouterLink, useRoute } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import ru from "../../assets/images/ru.png";
import oz from "../../assets/images/uz.png";
import en from "../../assets/images/en.png";
import { MenuOutlined } from "@ant-design/icons-vue";
import $i18n from "@/plugins/i18n";
const locale = ref("oz");
const langFlag = ref(oz);
const menuStore =useMenuStore();

const handleClick = (event) => {
    let element = event.target;
    if (element.value == locale) return;
    $i18n.global.locale.value = element.value;
    localStorage.setItem('locale', element.value)
    // window.location.reload();
}

onMounted( () => {
locale.value=localStorage.getItem('locale')
});

watch(locale, (old, newVal) => {
  switch (old) {
    case "oz": {
      langFlag.value = oz;
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
            <a href="#about">{{ $t('about') }}</a>
          </li>
          <li>
            <a href="#constraction">{{ $t('howWorked') }}</a>
          </li>
          <li>
            <a href="#team">{{ $t('team') }}</a>
          </li>
          <li>
            <a href="#contact">{{ $t('contact') }}</a>
          </li>
        </ul>

        <div class="navbar-lang">
          <div class="lang-box">
            <span><img :src="langFlag" alt="flag" /></span>
            <select name="" id="" v-model="locale" @change="handleClick">
              <option value="oz">O'zbek</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
          <!-- <button class="">{{ $t('contact') }}</button> -->
          <button class="menu_btn" @click="toggle"><MenuOutlined /></button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>


</style>
