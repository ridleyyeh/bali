<template>
  <div class="main-banner">
    <h1>關於鏡片</h1>
    <p>明祥驗光所除了提供無需追加費用的薄型非球面鏡片，也提供多樣特製鏡片種類</p>
  </div>
</template>

<style lang="scss">
.main-banner {
  width: 100%;
  height: 450px;
  background-image: url("../assets/img/pexels-368309890-14461331.jpg");
  // background-position: 30%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    color: #ffffff;
  }
  p {
    font-size: 17px;
    color: white;
  }
}

@media (max-width: 480px) {
  .main-banner {
    height: 300px;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }
  }
}
</style>
