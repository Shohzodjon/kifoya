<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Navbar from "@/components/sections/Navbar.vue";
// import Loader from '@/views/Loader.vue';
import Footer from "@/components/sections/Footer.vue";
import HomePage from "./views/HomePage.vue";
import PurposeDesc from "./components/card/PurposeDesc.vue";
import MainCard from "./components/card/MainCard.vue";
import InvestCard from "./components/card/InvestCard.vue";
import {
  DownOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons-vue";
import ConstructionCard from "./components/card/ConstructionCard.vue";

const isLoading = ref(true);
const isLoad = ref(false);
const router = useRouter();
const phone = ref("");
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 600);
});

onMounted(async () => {
  isLoad.value = true;
});

function formatPhone(value) {
  if (!value.startsWith("+998")) {
    phone.value = "+998";
  } else if (value.length > 13) {
    phone.value = value.slice(0, 13); // Limit to 17 characters
  }
}

const investData = [
  { title: "Uy sotib olish" },
  { title: "Mashina sotib olish" },
  { title: "Nafaqa yoshi uchun pul jamg’arish" },
  { title: "Haj yoki umra safari uchun pul jamg’arish" },
  {
    title:
      "Qimmatbaho maishiy texnikalarni (xolodilnik, televizor, gas plitasi, kir yuvish mashinasi va hokazolar) sotib olish",
  },
  { title: "Farzandlaringizning ta'limi uchun pul jamg’arish" },
  { title: "Tuy marosimlari uchun" },
  { title: "Boylikni samarali o’stirish" },
];

const constructionList = [
  {
    title: "Investitsiya kiriting",
    desc: "Daromad keltiradigan kuchmas mulklarga egalik qiladigan Mustaqil Moliya KMIT ga investitsiya kiriting. Investitsiyani 1 million so'mdan boshlab kiritishingiz mumkin.",
  },
  {
    title: "O’sish",
    desc: "Daromad keltiradigan kuchmas mulklarga egalik qiladigan Mustaqil Moliya KMIT ga investitsiya kiriting. Investitsiyani 1 million so'mdan boshlab kiritishingiz mumkin.",
  },
  {
    title: "Dividend",
    desc: "Daromad keltiradigan kuchmas mulklarga egalik qiladigan Mustaqil Moliya KMIT ga investitsiya kiriting. Investitsiyani 1 million so'mdan boshlab kiritishingiz mumkin.",
  },
];

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(""); // Initial open panel
</script>

<template>
  <section>
    <div class="page__header">
      <Navbar />
      <!-- <HomePage /> -->
    </div>
    <!-- <div class="purpose_section">
      <div class="container">
        <div class="purpose_flex">
          <ul class="purpose_list">
            <li>
              <div class="list_img">
                <img src="@/assets/images/ambition.png" alt="abition" />
              </div>
              <PurposeDesc
                title="Oliy maqsad"
                desc="Dunyoning yetakchi, barqaror va islom moliyasi tamoyillariga asoslangan moliyaviy hizmatlarni taqdim etadigan moliya tashkiloti bo'lish."
                class="list_desc"
              />
            </li>
            <li>
              <div class="list_img">
                <img src="@/assets/images/mission.png" alt="mission" />
              </div>
              <PurposeDesc
                title="Missiya"
                desc="Doimiy tarzda jamiyatimiz uchun barqarorlikka asoslangan qiymat yaratish."
                class="list_desc"
              />
            </li>
            <li>
              <div class="list_img">
                <img src="@/assets/images/values.png" alt="value" />
              </div>
              <PurposeDesc class="list_desc" title="Qadriyatlar : ">
                <template #content>
                  <ul class="sub_list">
                    <li>
                      Halollik va holislikka asoslangan moliyaviy tashkilot
                    </li>
                    <li>Innovatsion tashkilot</li>
                    <li>Malakali mutaxassislar jamoasi</li>
                    <li>
                      Islom moliyasi tamoyillariga asoslangan barqaror moliyaviy
                      xizmatlar
                    </li>
                  </ul>
                </template>
              </PurposeDesc>
            </li>
          </ul>
          <MainCard />
        </div>
        <div class="invest__flex">
          <MainCard />
          <div class="invest__desc">
            <h3>Invstitsiya <span>maqsadlari</span></h3>
            <p class="invest__info">
              Mustaqil Moliya KMIT – ko’pgina maqsadlar uchun jamg’arish
              imkoniyatini taqdim etadi:
            </p>
            <div>
              <InvestCard
                v-for="(item, i) in investData"
                :title="item.title"
                :order="i + 1"
                :key="i"
              />
            </div>
          </div>
        </div>
        <div class="finance_flex" id="team">
          <div class="finance_left">
            <h2>Mustaqil Moliya bilan investitsiya <span>manfaatlari</span></h2>
            <div class="accordion_box">
              <a-collapse
                v-model:activeKey="activeKey"
                ghost="false"
                class="custom-collapse"
              >
                <a-collapse-panel key="1">
                  <template #header>
                    <span>This is panel header 1</span>
                    <DownOutlined
                      style="font-size: 16px; color: #23b123"
                      :class="{ 'rotate-icon': activeKey.includes('1') }"
                    />
                  </template>
                  <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="2">
                  <template #header>
                    <span>This is panel header 2</span>
                    <DownOutlined
                      style="font-size: 16px; color: #23b123"
                      :class="{ 'rotate-icon': activeKey.includes('2') }"
                    />
                  </template>
                  <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="3">
                  <template #header>
                    <span>This is panel header 3</span>
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
          <div class="finance_img"></div>
        </div>
      </div>
    </div> -->
    <!-- <div class="construction_section" id="constraction">
      <div class="container">
        <h2 class="title">Bu qanday ishlaydi</h2>
        <div class="construction_flex">
          <ConstructionCard
            v-for="(item, i) in constructionList"
            :key="i"
            :title="item.title"
            :desc="item.desc"
          />
        </div>
      </div>
    </div> -->

    <!-- <section class="order_section" id="contact">
      <div class="container">
        <main>
          <div class="order_desc">
            <h2>Заказать обратный звонок</h2>
            <p>
              Заполните форму, и мы с радостью проконсультируем вас и поможем
              сделать выбор.
            </p>
          </div>
          <form action="" class="order_form">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                class="custom_input input"
              />
            </div>
            <div>
              <vue-tel-input
                v-model="phone"
                class="custom_input"
                :input-options="{ maxlength: 13 }"
                @input="formatPhone"
              ></vue-tel-input>
            </div>
            <div>
              <textarea
                name=""
                id=""
                rows="5"
                class="custom_input custom_text"
              ></textarea>
            </div>
            <div class="form_flex">
              <a-checkbox value="1" name="type"></a-checkbox>
              <p>Я соглашаюсь с Политикой конфиденциальности</p>
            </div>
            <button class="form_btn" type="button">Отправить</button>
          </form>
        </main>
        <div class="order_bottom">
          <p>Подписывайтесь на наши соц сетях и будьте в курсе о новостях</p>
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

                <span>User name</span>
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramOutlined style="font-size: 20px" />
                <span>User name</span>
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

                <span>User name</span>
              </a>
            </li>
            <li>
              <a href="#">
                <YoutubeFilled style="font-size: 20px" />
                <span>User name</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section> -->
    <!-- <section class="app_section">
      <div class="container">
        <div class="app_box">
          <h2>
            <span>Kifoya ilovasini</span> yuklab oling va kelajagingizga sarmoya
            kiriting
          </h2>

          <div class="app_group">
            <a href="#"><img src="@/assets/images/app.png" alt="app"></a>
            <a href="#"><img src="@/assets/images/play.png" alt="app"></a>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <Footer /> -->
  </section>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.active__loader {
  opacity: 1;
  display: block;
}
.custom-collapse .ant-collapse-header-text {
  display: flex;
  justify-content: space-between;
  background-color: var(--gray-300);
  align-items: center;
  padding: 24px 30px;
  border-radius: 10px;
}
.custom-collapse .ant-collapse-header-text span:nth-child(1) {
  font-size: 2.4rem;
  color: var(--dark-blue);
  font-weight: 400;
  line-height: 28.64px;
}
.custom-collapse .ant-collapse-item .ant-collapse-content-active {
  padding: 0 !important;
}
.custom-collapse .ant-collapse-item .ant-collapse-content-box {
  background: var(--gray-300);
  max-width: 93%;
  margin: 0 auto;
  margin-left: 30px !important;
}

.custom-collapse .ant-collapse-arrow {
  order: 1;
  margin-left: auto;
}
.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>
