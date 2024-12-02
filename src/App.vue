<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Navbar from "@/components/sections/Navbar.vue";
import Footer from "@/components/sections/Footer.vue";
import ResponsiveNavbar from "./components/responsive/ResponsiveNavbar.vue";
import NavbarSecond from "./components/sections/NavbarSecond.vue";
const isScrolled = ref(false);
const router = useRoute();
function handleScroll() {
  isScrolled.value = window.scrollY > 100;
}

console.log(router.name);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <section>
    <div class="page__header">
      <Navbar :class="{ scrolled: isScrolled }" v-if="router.name == 'home'" />
      <NavbarSecond :class="{ scrolled: isScrolled }" v-else />
      <ResponsiveNavbar />
    </div>
    <RouterView />
    <Footer />
  </section>
</template>
