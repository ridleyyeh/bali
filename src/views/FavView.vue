<script setup>
import TopBar from "../components/TopBar.vue";
import FavSection from "../components/FavSection.vue";
</script>

<template>
  <TopBar />
  <div class="navigation-bar">
    <router-link to="/" class="nb-1">
      <p>明祥驗光所首頁</p>
    </router-link>

    <p>></p>
    <router-link to="/fav" class="nb-2">
      <p>我的最愛</p>
    </router-link>
  </div>
  <FavSection />
</template>

<style></style>
