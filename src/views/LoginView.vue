<script setup>
import LoginSection from "../components/LoginSection.vue";
</script>
<template>
  <div class="topbar">
    <div class="logo">
      <router-link to="/">
        <h1>Bali <br />Optician's</h1>
      </router-link>
    </div>
    <div class="tp-opts" style="display: none">
      <router-link to="/glasses">眼鏡</router-link>
      <router-link to="/sunglasses">太陽眼鏡</router-link>
      <router-link to="/contactlens">隱形眼鏡</router-link>
      <router-link to="/accessories">配件</router-link>
    </div>
    <div class="tp-fn" style="display: none">
      <router-link to="/login" class="login" aria-label="登入"
        ><box-icon type="solid" name="user"></box-icon
      ></router-link>
      <router-link to="/favview" class="heart" aria-label="我的最愛"> <box-icon name="heart"></box-icon></router-link>
      <router-link to="/shoppingcartview" class="cart" aria-label="購物車"
        ><box-icon name="cart"></box-icon
      ></router-link>
    </div>
  </div>

  <LoginSection />
</template>
