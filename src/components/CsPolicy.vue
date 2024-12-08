<script setup>
import { ref } from "vue";

const questions = ref([
  {
    title: "請告訴我有關售後服務的內容。",
    answer: "有關已購買的眼鏡， 我們皆提供免費零件更換（鼻墊更換、螺絲更換、調整）。",
  },
  {
    title: "鏡片有所損傷該怎麼辦？",
    answer: "鏡片並無法做損傷修理。 <br />在確認鏡框的狀態後，以更換鏡片方式處理。",
  },
  {
    title: "其他公司的鏡框也可以做調整嗎？",
    answer: "只要是本店內的商品皆提供免費調整服務。",
  },
  {
    title: "鼻墊的螺絲或是鏡腳的螺絲掉了，可以做更換嗎？",
    answer: "若是螺絲鬆落情形即可免費更換零件。",
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
      <h2>售後服務</h2>
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
