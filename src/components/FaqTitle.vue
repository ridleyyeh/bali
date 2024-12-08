<template>
  <div class="faq-title">
    <h1>FAQ | 明祥驗光所</h1>
    <p>明祥驗光所相關常見問題頁面。</p>
    <p>若有任何問題請前往</p>
    <p><router-link to="/">聯絡我們</router-link>頁面。</p>
  </div>
</template>

<style lang="scss">
.faq-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;

  h1 {
    font-size: 40px;
    color: #000000;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #666666;
    gap: 5px;

    a {
      text-decoration: none;
      color: var(--linkcolor);
    }
  }
}
</style>
