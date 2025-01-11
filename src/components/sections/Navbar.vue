<script setup>
import { ref, onMounted, watch } from "vue";
import { lang } from "@/uitiles/currentLang";
import { RouterLink, useRoute } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import { MenuOutlined } from "@ant-design/icons-vue";
import $i18n from "@/plugins/i18n";

const menuStore = useMenuStore();
const route = useRoute();
const selectedLanguage = ref("oz");

onMounted(() => {
  if (lang != null) {
    selectedLanguage.value = localStorage.getItem("locale");
  }
});

const toggle = () => {
  menuStore.toggleMenu();
};

const isActiveLink = (link) => {
  if (route.path === "/" && !route.hash && link === "#about") {
    return true;
  }
  return route.path === link || route.hash === link;
};

const options = ref([
  {
    value: "oz",
    label: "O'zbek",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
  },
  {
    value: "ru",
    label: "Русский",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  },
  {
    value: "en",
    label: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
]);



const handleChange = (lang) => {
  $i18n.global.locale.value = lang.value;
  localStorage.setItem("locale", lang.value);
};
</script>
<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-flex">
        <RouterLink :to="`/`" class="navbar-logo">
          <h2>Kifoya</h2>
          <span>Investments</span>
        </RouterLink>

        <ul class="navbar-list">
          <li>
            <a href="#about" :class="{ active: route.hash === '#about' }">{{
              $t("about")
            }}</a>
          </li>
          <li>
            <a
              href="#constraction"
              :class="{ active: route.hash === '#constraction' }"
              >{{ $t("howWorked") }}</a
            >
          </li>
          <li>
            <RouterLink
              :to="`/long-term`"
              :class="{ active: isActiveLink('/long-term') }"
              >{{ $t("longInvest") }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="`/short-term`"
              :class="{ active: isActiveLink('/short-term') }"
              >{{ $t("shortInvest") }}</RouterLink
            >
          </li>
          <!-- <li>
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
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
          </li> -->
          <li>
            <a href="#contact" :class="{ active: route.hash === '#contact' }">{{
              $t("contact")
            }}</a>
          </li>
        </ul>

        <div class="navbar-lang">
          
          <a-select
            v-model:value="selectedLanguage"
            label-in-value
            style="width: 130px"
            @change="handleChange"
           
          >
            <a-select-option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              <img
                :src="option.flag"
                alt="flag"
                style="width: 20px; height: 20px; margin-right: 8px; border-radius: 50%;"
              />
              {{ option.label }}
            </a-select-option>
          </a-select>
          <button class="menu_btn" @click="toggle"><MenuOutlined /></button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.active {
  color: #04896c;
}
</style>
