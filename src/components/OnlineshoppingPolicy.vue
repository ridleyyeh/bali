<script setup>
import { ref } from "vue";

const questions = ref([
  {
    title: "可以在線上購物進行更換鏡片服務嗎？",
    answer: "很抱歉，線上購物無受理更換鏡片服務。",
  },
  {
    title: "線上購物可以使用優惠券嗎？",
    answer: " 非常抱歉，線上購物恕無法使用優惠券。 <br />優惠券僅限於實體門市使用。",
  },
  {
    title: "不確定自己的度數該怎麼辦？",
    answer: "請於門市辦理。",
  },
]);

const activeIndex = ref(null);
const toggleExpand = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
<template>
  <div class="expand-section">
    <div class="expand-title">
      <h2>關於線上購物</h2>
    </div>

    <div class="expand-block" v-for="(question, index) in questions" :key="index">
      <div class="expand-question">
        <h3>{{ question.title }}</h3>
        <span class="plus" :class="{ active: activeIndex === index }" @click.stop="toggleExpand(index)"></span>
      </div>
      <div class="expand-answer" :class="{ show: activeIndex === index }">
        <p v-html="question.answer"></p>
      </div>
    </div>
  </div>
</template>
