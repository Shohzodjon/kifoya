<script setup>
import { ref, onMounted, watch } from "vue";
import { lang } from "@/uitiles/currentLang";
import { RouterLink, useRoute } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import ru from "../../assets/images/ru.png";
import oz from "../../assets/images/uz.png";
import en from "../../assets/images/en.png";
import { MenuOutlined, DownOutlined } from "@ant-design/icons-vue";
import $i18n from "@/plugins/i18n";
const locale = ref("oz");
const langFlag = ref(oz);
const menuStore = useMenuStore();
const handleClick = (event) => {
  let element = event.target;
  if (element.value == locale) return;
  $i18n.global.locale.value = element.value;
  localStorage.setItem("locale", element.value);
};

onMounted(() => {
  locale.value = localStorage.getItem("locale");
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

const toggle = () => {
  menuStore.toggleMenu();
};
</script>
<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-flex">
        <RouterLink :to="`/`" class="navbar-logo">
          <div class="navbar-logo__img">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
        </RouterLink>

        <ul class="navbar-list">
          <li>
            <RouterLink :to="`/`">{{ $t("about") }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="`/`">{{ $t("howWorked") }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="`/long-term`">Uzoq muddatli investitsiyalar</RouterLink>
          </li>
          <li>
            <RouterLink :to="`/short-term`">Qisqa muddatli investitsiyalar</RouterLink>
          </li>
          <li>
            <a-dropdown>
              <a class="ant-dropdown-link">
                {{ $t("team") }}
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <RouterLink :to="`/board`">{{ $t("board") }}</RouterLink>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <RouterLink :to="`/council`">
                      {{ $t("councilLink") }}</RouterLink
                    >
                  </a-menu-item>
                  <a-menu-item>
                    <RouterLink :to="`/managment`">{{
                      $t("managmentSenior")
                    }}</RouterLink>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </li>
          <li>
            <RouterLink :to="`/`">{{ $t("contact") }}</RouterLink>
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
          <button class="menu_btn" @click="toggle"><MenuOutlined /></button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
.ant-dropdown-trigger {
  z-index: 9999999999 !important;
}
.ant-dropdown-menu-vertical {
  box-shadow: none !important;
  background: #ebf1eb !important;
}
.ant-dropdown-menu-title-content {
  font-size: 1.5rem !important;
  font-weight: 400 !important;
  line-height: 19px !important;
}
</style>
