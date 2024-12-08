<script setup>
import TopBar from "../components/TopBar.vue";
import ProductSearch from "../components/ProductSearch.vue";
import DetailBanner from "@/components/DetailBanner.vue";
import CopyrightSection from "@/components/CopyrightSection.vue";
</script>

<template>
  <TopBar />
  <div class="navigation-bar">
    <router-link to="/" class="nb-1"><p>明祥驗光所首頁</p></router-link>
    <p>></p>
    <router-link to="/sunglasses" class="nb-2">
      <p>太陽眼鏡商品一覽</p>
    </router-link>
  </div>

  <div class="product-title">
    <h1>太陽眼鏡 商品一覽</h1>
    <p>眼鏡・太陽眼鏡皆搭配抗UV、防汙鍍膜薄型非球面鏡片。</p>
    <p>隨時提供給你最合適的鏡框。</p>
  </div>

  <ProductSearch />
  <DetailBanner />
  <CopyrightSection />
</template>

<style></style>
