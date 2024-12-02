<script setup>
import CouncilCard from "@/components/card/CouncilCard.vue";
import MainCard from "@/components/card/MainCard.vue";
const councilList = [
  {
    title: "Prof Dr Ashraf Md Hashim",
    desc: "Chairman",
  },
  {
    title: "Prof Dr Ashraf Md Hashim",
    desc: "Chairman",
  },
  {
    title: "Prof Dr Ashraf Md Hashim",
    desc: "Chairman",
  },
];
</script>
<template>
     <section class="council">
      <div class="container">
        <div class="council__flex">
          <div class="left__side">
            <h2>{{ $t("council") }}</h2>
            <div class="list__flex">
              <CouncilCard
                v-for="(item, i) in councilList"
                :key="i"
                :title="item.title"
                :desc="item.desc"
              />
            </div>
          </div>
          <MainCard>
            <template #img>
              <img
                src="@/assets/images/employee.jfif"
                alt="img"
                style="width: 100%; height: 100%;position: relative;z-index: -1;"
              />
            </template>
          </MainCard>
        </div>
      </div>
    </section>
</template>