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
    desc: "shortWorkOneDesc",
  },
  {
    title: "shortWorkThree",
    desc: "shortWorkThreeDesc",
  },
  {
    title: "divident",
    desc: "shortWorkFourDesc",
  }
];
const benefitList=[
{
    title: "serviceType",
    desc: "serviceTypeDesc",
  },
  {
    title: "allInvest",
    desc: "allInvestDesc",
  },
  {
    title: "riskManagment",
    desc: "riskManagmentDesc",
  },
  {
    title: "stableIncome",
    desc: "stableIncomeDesc",
  }
]
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
        <h2 class="title" v-html="$t('shortTerm')"></h2>
        <LongInvestCard
          title="investTitle"
          desc="investDescThree"
          desc_two="investDescFive"
        />

        <div class="invest__flex">
          <div class="invest__desc">
            <h3>{{ $t("investPurpose") }}</h3>
            <p class="invest__info">
              {{ $t("investDescFour") }}
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
                <img src="@/assets/picture/img4.png" alt="" />
              </div>
            </template>
          </MainCard>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="main__item">
          <h2>{{ $t("howWorked") }}</h2>
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
          <h2>{{ $t("kifoyaInvest") }}</h2>
          <a-carousel
            :slides-to-show="slidesToShow"
            :after-change="onChange"
            :dots="false"
            draggable
            loop
            autoplay
          >
            <ConstructionCard
              v-for="(item, i) in benefitList"
              :key="i"
              :title="$t(item.title)"
              :desc="$t(item.desc)"
            />
          </a-carousel>
        </div>
        <div class="main__item">
          <h2>{{ $t("shortInvestTool") }}</h2>
          <a-collapse
            v-model:activeKey="activeKey"
            ghost="false"
            class="custom-collapse"
          >
            <a-collapse-panel key="1">
              <template #header>
                <span>{{ $t("longFaqOne") }}</span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('1') }"
                />
              </template>
              <p>{{ $t("shortFaqOneDesc") }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="2">
              <template #header>
                <span>{{ $t("shortFaqTwo") }}</span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('2') }"
                />
              </template>
              <p>{{ $t("shortFaqTwoDesc") }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3">
              <template #header>
                <span>{{ $t("shortFaqThree") }} </span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('3') }"
                />
              </template>
              <p>
                {{ $t("shortFaqThreeDesc") }}
              </p>
            </a-collapse-panel>
            <a-collapse-panel key="4">
              <template #header>
                <span>{{ $t("shortFaqFour") }} </span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('4') }"
                />
              </template>
              <p>
                {{ $t("shortFaqFourDesc") }}
              </p>
            </a-collapse-panel>
            <a-collapse-panel key="5">
              <template #header>
                <span>{{ $t("shortFaqFive") }} </span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('4') }"
                />
              </template>
              <p>
                {{ $t("shortFaqFiveDesc") }}
              </p>
            </a-collapse-panel>
            <a-collapse-panel key="6">
              <template #header>
                <span>{{ $t("shortFaqSix") }} </span>
                <DownOutlined
                  style="font-size: 16px; color: #23b123"
                  :class="{ 'rotate-icon': activeKey.includes('4') }"
                />
              </template>
              <p>
                {{ $t("shortFaqSixDesc") }}
              </p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </main>
  </section>
</template>
<style lang="scss">
.short__term {
  position: absolute !important;
  z-index: 20;
  height: calc(100% - 104px);
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: 350px;
  transform: translateX(-50%);
  img {
    width: 100%;
    height: 100%;
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
  .short__term {
      height: calc(100% - 110px);
      max-width: 300px;
    }
}
@media (max-width: 576px) {
  .short__term {
    height: calc(100% - 70px);
    max-width: 290px;
  }
}
@media (max-width: 450px) {
  .short__term {
    max-width: 280px;
  }
}
</style>
<style scoped>
:deep(.slick-slide > div) {
  margin: 0 10px;
  height: 200px;
}
</style>
