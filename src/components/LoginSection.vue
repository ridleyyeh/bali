<template>
  <div class="login-section">
    <div class="login-title">
      <h2>登入</h2>
    </div>
    <div class="login-block">
      <div class="login-left">
        <h2>帳戶登入</h2>
        <form action="">
          <input type="email" placeholder="請輸入電子信箱" />
          <input type="password" placeholder="請輸入密碼" />
          <div class="forgot-password">
            <router-link to="./reset"> 忘記密碼?</router-link>
          </div>
          <button disabled="disabled">登入</button>
        </form>

        <hr />
        <div class="recaptcha"></div>
        <div class="login-register">
          <h3>▶︎尚未註冊會員的人</h3>
          <router-link to="/register" aria-label="註冊新會員">註冊新會員</router-link>
        </div>
      </div>

      <div class="login-providers">
        <h2>使用其他的帳號來登入</h2>
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
