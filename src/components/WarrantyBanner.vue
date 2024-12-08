<template>
  <div class="warranty-bg">
    <h1>明祥驗光所安心保證</h1>
    <p>
      為了讓眼鏡隨時處於良好狀態，定期維修保固眼鏡是最重要的。 <br />
      明祥驗光所提供了眼鏡業界首創完善商品保固服務為你的眼鏡提供最完善的維護。
    </p>
  </div>
</template>

<style lang="scss">
.warranty-bg {
  width: 100%;
  height: 500px;
  background-image: url("../assets/img/promise.jpg");
  background-size: cover;
  background-position: 25% 25%;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 15px 0px 50px;
    font-size: 45px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    color: #262626;
  }
}

@media (max-width: 480px) {
  .warranty-bg {
    height: 250px;
    background-position: 25% 50%;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 12px;
      color: #000;
    }
  }
}
</style>
