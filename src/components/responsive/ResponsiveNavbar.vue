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
watch(
  () => counterStore.resnav,
  (newVal) => {
    if (newVal) {
      tl.from(".menu-bg span", {
        duration: 1,
        x: "100%",
        stagger: 0.2,
        ease: "Expo.easyInOut",
      });
      tl.from(".main-menu li a", {
        duration: 1.5,
        y: "100%",
        stagger: 0.1,
        ease: "Expo.easyInOut",
      });
    }
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
      <div class="menu-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul class="main-menu">
          <li>
            <a href="#about" @click="handleToggle">Biz haqimizda</a>
          </li>
          <li>
            <a href="#constraction" @click="handleToggle"
              >Bu qanday ishlaydi?</a
            >
          </li>
          <li>
            <a href="#team" @click="handleToggle">Bizning jamoa</a>
          </li>
          <li>
            <a href="#contact" @click="handleToggle">Biz bilan aloqa</a>
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
.menu-bg span {
  display: block;
  height: 25%;
  width: 100%;
  background: #0d1b2a;
  margin: 0;
}
nav {
  position: relative;
  z-index: 99;
}
nav li {
  overflow: hidden;
  transition: transform 300ms ease-in-out 0s;
}
nav li + li {
  margin-top: 30px;
}
nav li a {
  font-size: 3rem;
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
    font-size: 2.8rem;
  }
}
@media (max-width: 991px) {
    nav li + li {
  margin-top: 25px;
}
  nav li a {
    font-size: 2.5rem;
  }

}
@media (max-width: 768px) {
  .fullpage-menu-inner {
    padding: 20px;
  }
  nav li a {
    font-size: 2rem;
  }
}
</style>
