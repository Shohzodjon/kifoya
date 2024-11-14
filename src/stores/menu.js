import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
    const resnav = ref(false);
    //   const toggleMenu = computed(() => count.value * 2);
    const toggleMenu = () => {
        resnav.value = !resnav.value;
    };

    return { resnav, toggleMenu };
});