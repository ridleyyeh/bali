<template>
  <div class="navigation-bar">
    <a href="./index.html" class="nb-1">
      <p>明祥驗光所首頁</p>
    </a>
    <p>></p>
    <a href="" class="nb-2">
      <p>眼鏡商品一覽</p>
    </a>
  </div>
</template>

<style lang="scss">
.navigation-bar {
  display: flex;
  align-items: center;
  max-height: 30px;
  padding: 12px 42px;
  border-bottom: 1px solid var(--bordercolor);
  .nb-1,
  .nb-2 {
    text-decoration: none;
    color: #999999;
    &:nth-of-type(2) {
      color: #000000;
      font-weight: 500;
      font-size: 12px;
    }

    p {
      font-size: 11px;
    }
  }
  p {
    font-size: 11px;
    padding: 0 3px;
  }
}

@media (max-width: 480px) {
  .navigation-bar {
    padding: 8px 32px;
  }
}
</style>
