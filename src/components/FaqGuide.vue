<script setup>
import WarrantyPolicy from "./WarrantyPolicy.vue";
</script>
<template>
  <div class="faq-guide-link">
    <ul>
      <li><router-link to="/warrantypolicy">安心保證</router-link></li>
      <li><router-link to="/productpolicy">商品</router-link></li>
      <li><router-link to="/cspolicy">售後服務</router-link></li>
      <li><router-link to="/onlineshoppingpolicy">關於線上購物</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
.faq-guide-link {
  width: 100%;
  background-color: #f4f4f4;
  padding: 30px 0;
  margin-top: 40px;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    li {
      list-style: none;
      margin: 0px 16px;

      a {
        text-decoration: none;
        font-size: 14px;
        color: #000;
      }
    }
  }
}
</style>
