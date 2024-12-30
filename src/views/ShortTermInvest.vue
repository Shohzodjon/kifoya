<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LongInvestCard from "@/components/card/LongInvestCard.vue";
import MainCard from "@/components/card/MainCard.vue";
import InvestCard from "@/components/card/InvestCard.vue";
import ConstructionCard from "@/components/card/ConstructionCard.vue";
import { DownOutlined } from "@ant-design/icons-vue";

const activeKey = ref("");
const slidesToShow = ref(3);
const investData = [
  { title: "buyHouse" },
  { title: "buyCar" },
  { title: "pension" },
];

const constructionList = [
  {
    title: "investTwo",
    desc: "investDescTwo",
  },
  {
    title: "grow",
    desc: "growDesc",
  },
  {
    title: "divident",
    desc: "dividentDesc",
  },
  {
    title: "investTwo",
    desc: "investDescTwo",
  },
  {
    title: "grow",
    desc: "growDesc",
  },
  {
    title: "divident",
    desc: "dividentDesc",
  },
];
const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore minima veritatis maxime, sed incidunt aut hic vitae unde ipsum amet nobis sunt, quo commodi illum quia magni neque nihil! Eveniet.`;

const updateSlidesToShow = () => {
  const width = window.innerWidth;
  slidesToShow.value = width > 1024 ? 3 : width > 768 ? 2 : 1;
};

onMounted(() => {
  updateSlidesToShow();
  window.addEventListener("resize", updateSlidesToShow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlidesToShow);
});
</script>
<template>
  <section class="long__term">
    <header>
      <div class="container">
        <h2 class="title">
          Qisqa muddatli jamg'arish <br />
          va investitsiya instrumenti:
        </h2>
        <LongInvestCard
          title='Shirkat: "Kifoya Investments Kommandit Shirkati" Kommandit shirkati'
          desc="Investitsiya boshlanish sanasi: 01.01.2025 <br/>
          Investitsiya hajmi: 10 000 000 000 (o'n milliard) so'm <br/>
           Muddati: kamida 5 yil"
          desc_two="Ushbu Shirkat – sizga O'zbekistonning mulk bozoriga qulay tarzda kirish imkoni ta'minlaydi. Bunda, Investor har oyda ma'lum miqdorda Shirkatga pul kiritib boradi va Shirkatda jamlangan pul mablag'lari kuchmas mulkka investitsiya qilinadi."
        />

        <div class="invest__flex">
          <div class="invest__desc">
            <h3>Investitsiya maqsadlari</h3>
            <p class="invest__info">
              Ushbu instrument asosan quyidagi maqsadlarda pul jamg'arish
              imkoniyatini beradi:
            </p>
            <div>
              <InvestCard
                v-for="(item, i) in investData"
                :title="$t(item.title)"
                :order="i + 1"
                :key="i"
              />
            </div>
          </div>
          <MainCard>
            <template #img>
              <div class="short__term">
                <img src="@/assets/images/img4.png" alt="" />
              </div>
            </template>
          </MainCard>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="main__item">
          <h2>Bu qanday ishlaydi</h2>
          <a-carousel
            :slides-to-show="slidesToShow"
            :after-change="onChange"
            :dots="false"
            draggable
            loop
            autoplay
          >
            <ConstructionCard
              v-for="(item, i) in constructionList"
              :key="i"
              :title="$t(item.title)"
              :desc="$t(item.desc)"
            />
          </a-carousel>
        </div>
        <div class="main__item">
          <h2>Kifoya Investments bilan investitsiya manfaatlari</h2>
          <a-carousel
            :slides-to-show="slidesToShow"
            :after-change="onChange"
            :dots="false"
            draggable
            loop
            autoplay
          >
            <ConstructionCard
              v-for="(item, i) in constructionList"
              :key="i"
              :title="$t(item.title)"
              :desc="$t(item.desc)"
            />
          </a-carousel>
        </div>
        <div class="main__item">
          <h2>Qisqa muddatli jamg'arish va investitsiya instrumenti</h2>
          <a-collapse
            v-model:activeKey="activeKey"
            ghost="false"
            class="custom-collapse"
          >
            <a-collapse-panel key="1">
              <template #header>
                <span>{{ $t("serviceType") }}</span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('1') }"
                />
              </template>
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="2">
              <template #header>
                <span>{{ $t("allInvest") }}</span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('2') }"
                />
              </template>
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3">
              <template #header>
                <span>{{ $t("safeInvest") }}</span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('3') }"
                />
              </template>
              <p>{{ text }}</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </main>
  </section>
</template>
<style lang="scss">
.short__term {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 86%;
  }
}
.custom-collapse .ant-collapse-header-text {
  display: flex;
  justify-content: space-between;
  background-color: var(--gray-300);
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
}
.custom-collapse .ant-collapse-header-text span:nth-child(1) {
  font-size: 2rem;
  color: var(--dark-blue);
  font-weight: 600;
  line-height: 28.64px;
}
.custom-collapse .ant-collapse-item .ant-collapse-content-active {
  padding: 0 !important;
}
.custom-collapse .ant-collapse-item .ant-collapse-content-box {
  background: var(--gray-300);
  max-width: 100%;
  margin: 0 auto;
  margin-left: 13px !important;
}

.custom-collapse .ant-collapse-arrow {
  order: 1;
  margin-left: auto;
}
.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

@media (max-width: 1200px) {
  .custom-collapse .ant-collapse-header-text {
    padding: 18px 25px;
  }
}

@media (max-width: 1024px) {
  .custom-collapse .ant-collapse-item .ant-collapse-content-box {
    background: var(--gray-300);
    max-width: 99%;
    margin: 0 auto;
    margin-left: 8px !important;
  }
  .custom-collapse .ant-collapse-header-text {
    padding: 18px 25px;
  }
}
@media (max-width: 992px) {
  .custom-collapse .ant-collapse-header-text {
    padding: 18px 25px;
  }
  .custom-collapse .ant-collapse-header-text span:nth-child(1) {
    font-size: 2rem;
    line-height: 25px;
  }
}
@media (max-width: 768px) {
  .custom-collapse .ant-collapse-header-text {
    padding: 15px 20px;
  }
  .custom-collapse .ant-collapse-header-text span:nth-child(1) {
    font-size: 1.7rem;
    line-height: 20px;
  }
}
</style>
<style scoped>
:deep(.slick-slide > div) {
  margin: 0 10px;
  height: 200px;
}
</style>
