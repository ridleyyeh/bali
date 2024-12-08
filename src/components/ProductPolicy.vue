<script setup>
import { ref } from "vue";

const questions = ref([
  {
    title: "可以只購買鏡框嗎？",
    answer:
      '門市現場販售的度數眼鏡可以鏡框上的標示價格折扣1000元的優惠價格單純購入鏡框。<a href="">「安心保證」</a>頁面。',
  },
  {
    title: "有提供薄型非球面鏡片嗎？",
    answer: "我們皆以追加費用0元的服務，提供客人適合度數的薄型 ( 1.60 ) ～ 超薄型 ( 1.74 ) 非球面鏡片。",
  },
  {
    title: "散光需要追加費用嗎？",
    answer: "無論任何度數及散光，薄型非球面鏡片皆無需任何追加費用。",
  },
  {
    title: "可以製作老花眼鏡嗎？",
    answer: "只需負擔鏡框上標示價格即可製作合適的老花眼鏡。",
  },
  {
    title: "有抗UV的鏡片嗎？",
    answer: "可阻擋99%以上的紫外線（紫外線波長280nm~400nm）。",
  },
  {
    title: "可以製作遠近兩用及中近兩用的眼鏡嗎？",
    answer: "只需於鏡框上標示價格追加2000元即可變更成遠近兩用及中近兩用的鏡片。",
  },
  {
    title: "可以製作偏光眼鏡嗎？",
    answer: "只需於鏡框上標示價格追加3000元即可變更成偏光鏡片。",
  },
  {
    title: "可以製作調光變色眼鏡嗎？",
    answer: "只需於鏡框上標示價格追加3000元即可變更成調光變色鏡片。",
  },
  {
    title: "可以製作斜視用眼鏡嗎？",
    answer: "目前無提供相關配鏡服務，不便之處敬請見諒。",
  },
  {
    title: "可製作成無度數的眼鏡嗎？",
    answer: "可以的。鏡片皆使用抗UV、防汙鍍膜鏡片。",
  },
  {
    title: "有孩童用鏡框嗎？",
    answer: "有的。",
  },
  {
    title: "其他公司的鏡框也可以更換鏡片嗎？",
    answer:
      "非於本店購買的鏡框鏡片更換基本費用為2,000元，更換成遠近兩用漸變焦鏡片也只需4,000元。 <br />欲更換成抗藍光鏡片、染色鏡片等特製鏡片的情況則需另外追加費用。",
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
      <h2>商品</h2>
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
