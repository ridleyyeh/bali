<script setup>
import TopBar from "../components/TopBar.vue";
import FaqTitle from "../components/FaqTitle.vue";
import FaqGuide from "../components/FaqGuide.vue";
import DetailBanner from "../components/DetailBanner.vue";
import CopyrightSection from "../components/CopyrightSection.vue";
</script>
<template>
  <TopBar />
  <div class="navigation-bar">
    <router-link to="/" class="nb-1">
      <p>明祥驗光所首頁</p>
    </router-link>

    <p>></p>
    <router-link to="/accessories" class="nb-2">
      <p>常見問題一覽</p>
    </router-link>
  </div>
  <FaqTitle />
  <FaqGuide />
  <router-view></router-view>
  <DetailBanner />
  <CopyrightSection />
</template>

<style lang="scss"></style>
