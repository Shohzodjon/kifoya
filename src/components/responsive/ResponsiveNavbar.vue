<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { gsap } from "gsap";
import { useMenuStore } from "@/stores/menu";
const route = useRoute();
const currentPath = ref(route.path);
const counterStore = useMenuStore();

const tl = gsap.timeline();
onMounted(async () => {});
watch(
  () => route.path,
  (newPath) => {
    counterStore.resnav = false;
  }
);

const handleToggle = () => {
  counterStore.toggleMenu();
};

const setActive = (id) => {};
</script>
<template>
  <section
    class="fullpage-menu"
    :class="[counterStore.resnav ? 'active-res-nav' : 'unactive-res-nav']"
  >
    <button @click="handleToggle" class="close-btn">
      <i class="icon-cancel"></i>
    </button>
    <div class="fullpage-menu-inner">
      <nav>
        <ul class="main-menu">
          <li>
            <a href="#about" @click="handleToggle">{{ $t('about') }}</a>
          </li>
          <li>
            <a href="#constraction" @click="handleToggle"
              >{{ $t('howWorked') }}</a
            >
          </li>
          <li>
            <a href="#team" @click="handleToggle">{{ $t('team') }}</a>
          </li>
          <li>
            <a href="#contact" @click="handleToggle">{{ $t('contact') }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
<style scoped>
.active-res-nav {
  transform: translateX(0%) !important;
}
.unactive-res-nav {
  transform: translateX(100%) !important;
}

.fullpage-menu {
  transition: transform 300ms ease-in-out 0s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  background: #0d1b2a;
}
.close-btn {
  border: none;
  background: none;
  position: relative;
  z-index: 10;
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  float: right;
  margin-right: 60px;
  font-size: 30px;
  color: #fff;
}
.fullpage-menu-inner {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 50px;
}
.menu-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

nav {
  position: relative;
  z-index: 99;
  background: #0d1b2a;
}
nav li {
  overflow: hidden;
  transition: transform 300ms ease-in-out 0s;
}
nav li + li {
  margin-top: 30px;
}
nav li a {
  font-size: 2.5rem;
  line-height: 130%;
  text-transform: uppercase;
  font-weight: 400;
  color: #fff;
  display: inline-block;
  font-family: "Hanken Grotesk", sans-serif;
}
nav li:hover {
  transform: translateX(50px);
}

@media (max-width:1800px) {
    .fullpage-menu{
    display: none;
    }
}

@media (max-width: 1024px) {
    .fullpage-menu{
        display: block;
    }
  nav li a {
    font-size: 2.2rem;
  }
}
@media (max-width: 991px) {
    nav li + li {
  margin-top: 25px;
}
  nav li a {
    font-size: 2rem;
  }

}
@media (max-width: 768px) {
  .fullpage-menu-inner {
    padding: 20px;
  }
  nav li a {
    font-size: 1.8rem;
  }
}
</style>
