<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import PurposeDesc from "@/components/card/PurposeDesc.vue";
import MainCard from "@/components/card/MainCard.vue";
import InvestCard from "@/components/card/InvestCard.vue";
import {
  DownOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons-vue";
import ConstructionCard from "@/components/card/ConstructionCard.vue";
import HomeSection from "@/components/sections/HomeSection.vue";

const isLoading = ref(true);
// const router = useRouter();
const phone = ref("");
const activeKey = ref("");

// router.beforeEach((to, from, next) => {
//   isLoading.value = true;
//   next();
// });

// router.afterEach(() => {
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 600);
// });

const investData = [
  { title: "buyHouse" },
  { title: "buyCar" },
  { title: "pension" },
  { title: "umra" },
  { title: "technology" },
  { title: "education" },
  { title: "wedding" },
  { title: "wealth" },
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
];

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

const userData = ref({
  name: "",
  phone: "",
  description: "",
  agree: false,
});

const errors = ref({
  name: null,
  phone: null,
  description: null,
  agree: null,
});

const formatPhone = (event) => {
  let input = event.target.value;

  input = input.replace(/[^\d+]/g, "");

  if (!input.startsWith("+998")) {
    input = "+998";
  }

  if (input.length > 17) {
    input = input.slice(0, 17);
  }

  userData.value.phone = input;
};

const handleClick = () => {
  errors.value = validateForm();
  if (Object.values(errors.value).every((error) => !error)) {
    try {
      axios.post(
        "https://kifoyainvestments.uz/api/v1/site/contact/form/create/",
        userData.value
      );
    } catch (error) {
      console.log(error, "error");
    }
  }
};

const validateForm = () => {
  const uzbekPhoneRegex = /^\+998\d{9}$/; // +998 bilan boshlanadigan 9 ta raqam bo'lishi kerak

  const newErrors = {
    name: userData.value.name ? null : "Name is required",
    phone: uzbekPhoneRegex.test(userData.value.phone)
      ? null
      : "Valid Uzbekistan phone number is required",
    description: userData.value.description ? null : "Message is required",
    agree: userData.value.agree ? null : "You must agree to the privacy policy",
  };

  return newErrors;
};

const handleCheck = () => {
  userData.value.agree = !userData.value.agree;
};
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
      <HomeSection />
    </div>
    <div class="purpose_section">
      <div class="container">
        <div class="purpose_flex">
          <ul class="purpose_list">
            <li>
              <div class="list_img">
                <img src="@/assets/images/ambition.png" alt="abition" />
              </div>
              <PurposeDesc
                :title="$t('ambition')"
                :desc="$t('ambitionDesc')"
                class="list_desc"
              />
            </li>
            <li>
              <div class="list_img">
                <img src="@/assets/images/mission.png" alt="mission" />
              </div>
              <PurposeDesc
                :title="$t('mission')"
                :desc="$t('missionDesc')"
                class="list_desc"
              />
            </li>
            <li>
              <div class="list_img">
                <img src="@/assets/images/values.png" alt="value" />
              </div>
              <PurposeDesc class="list_desc" :title="$t('value')">
                <template #content>
                  <ul class="sub_list">
                    <li>
                      {{ $t("honest") }}
                    </li>
                    <li>{{ $t("innovation") }}</li>
                    <li>{{ $t("profession") }}</li>
                  </ul>
                </template>
              </PurposeDesc>
            </li>
          </ul>

          <MainCard>
            <template #img>
              <div class="home__img">
                <img src="@/assets/picture/img3.png" alt="home img" />
              </div>
            </template>
          </MainCard>
        </div>
        <div class="invest__flex">
          <MainCard>
            <template #img>
              <div class="home__img2">
                <img src="@/assets/picture/img2.png" alt="home img" />
              </div>
            </template>
          </MainCard>

          <div class="invest__desc">
            <h3 v-html="$t('invest')"></h3>
            <p class="invest__info">
              {{ $t("investDesc") }}
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
        </div>
        <div class="finance_flex">
          <div class="finance_left">
            <h2 v-html="$t('financeTitle')"></h2>
            <!-- <div class="accordion_box"> -->
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
                <p>
                  {{ $t("serviceDesc") }}
                </p>
              </a-collapse-panel>
              <a-collapse-panel key="2">
                <template #header>
                  <span> {{ $t("honestInvest") }}</span>
                  <DownOutlined
                    style="font-size: 16px; color: #23b123"
                    :class="{ 'rotate-icon': activeKey.includes('2') }"
                  />
                </template>
                <p>
                  {{ $t("honestInvestDesc") }}
                </p>
              </a-collapse-panel>
              <a-collapse-panel key="3">
                <template #header>
                  <span>{{ $t("smartInvest") }}</span>
                  <DownOutlined
                    style="font-size: 16px; color: #23b123"
                    :class="{ 'rotate-icon': activeKey.includes('3') }"
                  />
                </template>
                <p>
                  {{ $t("smartInvestDesc") }}
                </p>
              </a-collapse-panel>
              <a-collapse-panel key="4">
                <template #header>
                  <span>{{ $t("stableIncome") }} </span>
                  <DownOutlined
                    style="font-size: 16px; color: #23b123"
                    :class="{ 'rotate-icon': activeKey.includes('4') }"
                  />
                </template>
                <p>
                  {{ $t("stableIncomeDesc") }}
                </p>
              </a-collapse-panel>
            </a-collapse>
            <!-- </div> -->
          </div>

          <div class="finance_img">
            <span class="shape">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 694 760"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="364.36"
                  cy="673.332"
                  r="464.914"
                  transform="rotate(-47.2933 364.36 673.332)"
                  stroke="#008000"
                />
                <circle
                  cx="359.406"
                  cy="549.668"
                  r="464.914"
                  transform="rotate(-47.2933 359.406 549.668)"
                  stroke="#008000"
                />
              </svg>
            </span>
            <div>
              <img src="@/assets/picture/img.png" alt="finance img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="construction_section" id="constraction">
      <div class="container">
        <h2 class="title">{{ $t("howWorked") }}</h2>
        <div class="construction_flex">
          <ConstructionCard
            v-for="(item, i) in constructionList"
            :key="i"
            :title="$t(item.title)"
            :desc="$t(item.desc)"
          />
        </div>
      </div>
    </div> -->
    <section class="order_section" id="contact">
      <div class="container">
        <main>
          <div class="order_desc">
            <h2>{{ $t("callBack") }}</h2>
            <p>
              {{ $t("callBackDesc") }}
            </p>
          </div>

          <form action="" class="order_form" @submit.prevent="handleClick">
            <div>
              <input
                type="text"
                placeholder="Name"
                class="custom_input input"
                v-model="userData.name"
              />
              <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>
            <div>
              <input
                type="tel"
                class="custom_input input"
                v-model="userData.phone"
                @input="formatPhone"
                maxlength="17"
                placeholder="+998 (__) ___ __ __"
              />
              <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
            </div>
            <div>
              <textarea
                rows="5"
                class="custom_input custom_text"
                v-model="userData.description"
                placeholder="Message"
              ></textarea>
              <span v-if="errors.description" class="error">{{
                errors.description
              }}</span>
            </div>
            <div class="form_flex">
              <a-checkbox
                name="type"
                v-model="userData.agree"
                @click="handleCheck"
              ></a-checkbox>
              <p>{{ $t("warming") }}</p>
              <span v-if="errors.agree" class="error">{{ errors.agree }}</span>
            </div>
            <button class="form_btn" type="submit">
              {{ $t("submit") }}
            </button>
          </form>
        </main>
        <div class="order_bottom">
          <p>{{ $t("social") }}</p>
          <ul>
            <li>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9453 2.76466C21.506 2.40034 20.9022 2.30659 20.3731 2.52052L2.45606 9.75392C1.66791 10.0783 1.292 10.9802 1.6164 11.7683C1.78418 12.1759 2.11817 12.4923 2.53418 12.6377L6.39942 13.9815L8.49414 20.9072C8.49835 20.9213 8.51129 20.9299 8.51673 20.9435C8.53839 20.9987 8.57007 21.0496 8.61005 21.0934C8.62494 21.111 8.64118 21.1276 8.65851 21.1428C8.7107 21.1862 8.7713 21.2182 8.83649 21.2369C8.84644 21.2398 8.85309 21.2487 8.86322 21.251L8.86908 21.2507L8.87201 21.252C8.9054 21.2594 8.93946 21.263 8.97357 21.2627C9.01819 21.2611 9.06244 21.2534 9.10492 21.2398C9.11316 21.2376 9.12146 21.2382 9.12952 21.2355C9.20209 21.2099 9.26764 21.1679 9.32105 21.1126C9.32727 21.1063 9.33673 21.1052 9.34272 21.0986L12.3564 17.7734L16.7529 21.1777C17.02 21.3866 17.3494 21.5001 17.6884 21.5C18.4218 21.4999 19.0549 20.9862 19.206 20.2686L22.4688 4.25099C22.5818 3.69691 22.3806 3.12562 21.9453 2.76466ZM9.58789 15.2949L8.99995 21L7.40583 13.8539L17.3662 8.10478L9.72364 15.042C9.65454 15.1112 9.60736 15.1991 9.58789 15.2949ZM18.2266 20.0674C18.1882 20.2515 18.0569 20.4024 17.8799 20.4658C17.7069 20.5324 17.5116 20.5027 17.3662 20.3877L12.6025 16.6992C12.3963 16.5396 12.1019 16.5655 11.9268 16.7588L9.83112 19.071L10.5371 15.6436L17.7256 8.45411C17.921 8.2591 17.9213 7.9427 17.7263 7.74738C17.572 7.59278 17.3353 7.55628 17.1416 7.65724L6.77826 13.0539L2.86133 11.6924C2.64783 11.6221 2.50263 11.424 2.5 11.1992C2.48969 10.9729 2.62366 10.7648 2.83399 10.6807L20.7481 3.44825C20.9352 3.36884 21.1511 3.40211 21.3057 3.53419C21.4595 3.65833 21.5302 3.85859 21.4883 4.05177L18.2266 20.0674Z"
                    stroke="black"
                  />
                </svg>
                <span>Kifoya investments</span>
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramOutlined style="font-size: 20px" />
                <span>Kifoya investments</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.046 5.865V8.613H7.032V11.973H9.046V21.959H13.18V11.974H15.955C15.955 11.974 16.215 10.363 16.341 8.601H13.197V6.303C13.197 5.96 13.647 5.498 14.093 5.498H16.347V2H13.283C8.943 2 9.046 5.363 9.046 5.865Z"
                    fill="black"
                  />
                </svg>

                <span>Kifoya investments</span>
              </a>
            </li>
            <li>
              <a href="#">
                <YoutubeFilled style="font-size: 20px" />
                <span>Kifoya investments</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="app_section">
      <div class="container">
        <div class="app_box">
          <h2 v-html="$t('app')"></h2>

          <div class="app_group">
            <a href="https://www.apple.com/app-store/" target="_blank"><img src="@/assets/images/app.png" alt="app" /></a>
            <a href="https://play.google.com/store/apps?hl=en" target="_blank"><img src="@/assets/images/play.png" alt="app" /></a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<style lang="scss">
.error {
  color: red;
  text-wrap-style: balance;
  display: inline-block;
  margin-top: 5px;
}
.home__img {
  position: absolute !important;
  z-index: 20;
  height: calc(100% - 104px);
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: 335px;
  transform: translateX(-50%);
  img {
    width: 100%;
    height: 100%;
  }
}
.home__img2 {
  position: absolute !important;
  z-index: 20;
  height: calc(100% - 104px);
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: 335px;
  transform: translateX(-50%);
  img {
    width: 100%;
    height: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.navbar__section.hidden {
  transform: translateY(-100%);
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
  font-weight: 400;
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
  .home__img,
  .home__img2 {
    height: calc(100% - 100px);
    max-width: 300px;
  }
}
@media (max-width: 576px) {
  .home__img,
  .home__img2 {
    height: calc(100% - 70px);
    max-width: 290px;
  }
}

@media (max-width: 450px) {
  .home__img,
  .home__img2 {
    max-width: 280px;
  }
}
</style>
