<script setup>
import EmployeeCard from "@/components/card/EmployeeCard.vue";
import chief from "@/assets/images/chief2.jpg";
import director from "@/assets/images/director.jpg";
import consultant from "@/assets/images/IT_consultant.jpg";
const chiefList = [
  {
    img: chief,
    title: "Bekzod Shamshiev",
    position: "councilChief",
    desc: "councilMember",
  },
];
const controlList = [
  {
    img: director,
    title: "Bexzod Muxamadiyev ",
    position: "generalDirector",
    desc: "manageMember",
  },
  {
    img: consultant,
    title: "Ro'ziyev Sherzod",
    position: "itConsultant",
    desc: "manageMember",
  },
];
</script>
<template>
  <section class="employee__section">
    <div class="container">
      <h2>{{ $t("chief") }}</h2>
      <div class="employee__flex">
        <EmployeeCard
          v-for="(item, i) in chiefList"
          :key="i"
          :title="item.title"
          :img="item.img"
          :desc="item.desc"
          :position="item.position"
        />
      </div>
      <h2>{{ $t("manageTeam") }}</h2>
      <div class="employee__flex">
        <EmployeeCard
          v-for="(item, i) in controlList"
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
