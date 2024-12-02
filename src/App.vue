<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Navbar from "@/components/sections/Navbar.vue";
import router from "./router";
import Footer from "@/components/sections/Footer.vue";
import ResponsiveNavbar from "./components/responsive/ResponsiveNavbar.vue";



// router.beforeEach((to, from, next) => {
//   isLoading.value = true;
//   next();
// });





const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 100;
}

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
      <Navbar :class="{ scrolled: isScrolled }" />
      <ResponsiveNavbar />
    </div>
   <RouterView/>
    <Footer />
  </section>
</template>


