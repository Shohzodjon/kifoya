<script setup>
import EmployeeCard from '@/components/card/EmployeeCard.vue';
import img from "@/assets/images/employee.jfif";
const employeeList = [
  {
    img: img,
    title: "Bekzod Shamshiev",
    position: "Chairman of the Board",
    desc: "CEO and Co-founder of Mustaqil Moliya",
  },
  {
    img: img,
    title: "Bekzod Shamshiev",
    position: "Chairman of the Board",
    desc: "CEO and Co-founder of Mustaqil Moliya",
  },
  {
    img: img,
    title: "Bekzod Shamshiev",
    position: "Chairman of the Board",
    desc: "CEO and Co-founder of Mustaqil Moliya",
  },
  {
    img: img,
    title: "Bekzod Shamshiev",
    position: "Chairman of the Board",
    desc: "CEO and Co-founder of Mustaqil Moliya",
  },
];
</script>
<template>
      <section class="employee__section" >
      <div class="container">
        <h2>{{ $t("chief") }}</h2>
        <div class="employee__flex">
          <EmployeeCard
            v-for="(item, i) in employeeList"
            :key="i"
            :title="item.title"
            :img="item.img"
            :desc="item.desc"
            :position="item.position"
          />
        </div>
      </div>
    </section>
</template>