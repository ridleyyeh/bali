<script setup>
import { ref } from "vue";

// 問題與答案數據
const questions = ref([
  {
    title: "請告訴我有關商品的保固期間與保固內容。",
    answer: '有關商品的保固期間與保固內容請參考 <a href="">「安心保證」</a>頁面。',
  },
  {
    title: "請告訴我有關鏡框的保固內容。",
    answer: "自取件日起1年內，在正常使用下如發生商品損壞情形，將提供維修或免費更換商品服務。",
  },
  {
    title: "若超過保固期間，還有保固權限嗎？",
    answer: "保固期間將無法延長。",
  },
  {
    title: "遺失了購買的眼鏡，有在保固範圍內嗎？",
    answer: "商品遺失的情況即不在保固範圍之內。",
  },
  {
    title: "若有度數不合的情況也可以做更換服務嗎？",
    answer: "自取件日起1年內，如有配戴不合適的情形，將提供免費1次的度數更換服務。",
  },
  {
    title: "鏡片若有損傷也在保固範圍之內嗎？",
    answer:
      " 鏡片若有損傷的情形即不在保固範圍之內， 將以另外付費的鏡片更換服務作為處理。 <br /> 薄型非球面鏡片（含度數）更換服務，一副2,000元起。 <br /> 自取件日起1年內即可以鏡片更換價格的半價優惠更換鏡片。",
  },
  {
    title: "覺得鏡片太厚，可選擇較薄的鏡片嗎？",
    answer: "我們將依照顧客的度數提供給最合適的鏡片，請洽詢購買門市。",
  },
  {
    title: "若已購買一般近視用眼鏡，可變更成遠近兩用漸變焦鏡片嗎？",
    answer:
      " 於保固期間內變更成遠近兩用漸變焦鏡片將需要2000元的製作費用。 <br />  （保固期間內的變更僅限一次） <br /> 製作完成至交件將需要10個以上工作天。",
  },
  {
    title: "若已購買遠近兩用眼鏡，可變更回一般的老花眼鏡嗎？",
    answer: "遠近兩用漸變焦鏡片如有配戴不合適的情形，自取件日起兩個月內可免費更換成近視或遠視用薄型非球面普通鏡片。",
  },
  {
    title: "為什麼選擇使用現在的眼鏡度數去製作而成的眼鏡會覺得不適應？",
    answer:
      "因鏡框形狀及配戴方式的改變，將有影響適應度的情形發生。 <br />若有適應不良的情形請攜帶商品與保證卡至鄰近門市做再次確認及調整。",
  },
]);

// 當前展開的問題索引
const activeIndex = ref(null);

// 切換展開或收起
const toggleExpand = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="expand-section">
    <div class="expand-title">
      <h2>安心保證</h2>
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
