<script setup>
import { ref } from "vue";
import EmployeeCard from "@/components/card/EmployeeCard.vue";
import { Modal } from "ant-design-vue";
import chief from "@/assets/images/chief2.jpg";
import director from "@/assets/images/director.jpg";
import consultant from "@/assets/images/IT_consultant.jpg";

const chiefList = [
  {
    img: chief,
    title: "Bekzod Shamshiev",
    position: "councilChief",
    desc: "councilMember",
    info: "employeeInfoOne",
  },
];
const controlList = [
  {
    img: director,
    title: "Bexzod Muxamadiyev ",
    position: "generalDirector",
    desc: "manageMember",
    info: "employeeInfoTwo",
  },
  {
    img: consultant,
    title: "Ro'ziyev Sherzod",
    position: "itConsultant",
    desc: "manageMember",
    info: "employeeInfoThree",
  },
];

// Modal state
const isModalVisible = ref(false);
const modalContent = ref({
  title: "",
  info: "",
});

const showModal = (item) => {
  modalContent.value = item;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <section class="employee__section">
    <div class="container">
      <h2>{{ $t("chief") }}</h2>
      <div class="employee__flex">
        <EmployeeCard
          v-for="(item, i) in chiefList"
          :key="i"
          :img="item.img"
          :position="item.position"
          :title="item.title"
          @cardClick="showModal(item)"
        >
         
        </EmployeeCard>
      </div>
      <h2 class="second__title">{{ $t("manageTeam") }}</h2>
      <div class="employee__flex">
        <EmployeeCard
          v-for="(item, i) in controlList"
          :key="i"
          :title="item.title"
          :img="item.img"
          :position="item.position"
          @cardClick="showModal(item)"
        >
       
        </EmployeeCard>
      </div>
    </div>
    <a-modal
      v-model:visible="isModalVisible"
      @cancel="closeModal"
      :bodyStyle="{ maxHeight: '900px' }"
    >
      <h3 class="user__name">{{ modalContent.title }}</h3>
      <p class="user__info">{{ $t(`${modalContent.info}`) }}</p>
    </a-modal>
  </section>
</template>
<style>
.ant-modal {
  width: 100%;
  word-wrap: break-word;
  background: #fff;
  padding: 10px 15px;
  border-radius: 10px;
}

.ant-modal-body {
  max-height: 400px;
}
.user__name {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.user__info {
  font-size: 14px;
  color: #333;
  width: 100%;
  font-weight: 500;
  word-wrap: break-word;
  white-space: pre-wrap;
  max-width: 90%;
  line-height: 150%;
}
.employee__btn {
  font-size: 2.4rem;
  line-height: 29px;
  font-weight: 700;
  text-align: center;
  border: none;
  background: none;
  cursor: pointer;
}

@media (max-width: 992px) {
  .employee__btn {
    font-size: 2rem;
    line-height: 25px;
  }
}
@media (max-width: 660px) {
  .employee__btn {
    font-size: 1.8rem;
    line-height: 20px;
  }
}
@media (max-width: 576px) {
  .ant-modal {
    width: 80% !important;
  }
  .user__name {
    font-size: 14px;
  }
  .user__info {
    font-size: 13px;
  }
}
</style>
