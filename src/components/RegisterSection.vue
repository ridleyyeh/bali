<script setup></script>
<template>
  <div class="login-section">
    <div class="login-title">
      <h2>註冊新會員</h2>
    </div>
    <div class="login-block">
      <div class="login-left">
        <h2>以電子信箱註冊</h2>
        <form action="">
          <input type="email" placeholder="請輸入電子信箱" />
          <input type="password" placeholder="請輸入密碼" />
          <input type="password" placeholder="再度確認密碼" />
          <p>＊半形字母符號8至32個字元（大小寫混合）</p>
          <div class="policy">
            <input type="checkbox" />
            <router-link to="#">同意使用規範</router-link>
          </div>
          <button disabled="disabled">註冊會員</button>
        </form>

        <hr />
        <div class="recaptcha"></div>
        <div class="login-register">
          <h3>▶︎已是明祥驗光所會員</h3>
          <router-link to="/login">登入</router-link>
        </div>
      </div>

      <div class="login-providers">
        <h2>使用其他的帳號來註冊</h2>
        <div class="providers-btns">
          <a href="" class="social-line"></a>
          <a href="" class="social-face"></a>
          <a href="" class="social-goo"></a>
        </div>
      </div>
    </div>
  </div>

  <div class="login-copyright">
    <a href="">會員隱私權規範</a>
    <p>COPYRIGHT (C) 明祥驗光所 co., ltd. ALL RIGHTS RESERVED.</p>
  </div>
</template>
