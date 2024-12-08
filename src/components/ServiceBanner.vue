<template>
  <div class="service-banner">
    <div class="service-title">
      <h2>服務</h2>
      <p>明祥驗光所隨時提供顧客最高品質、最高水準的服務</p>
    </div>
  </div>
</template>

<style lang="scss">
.service-banner {
  width: 100%;
  height: 500px;
  background-image: url("../assets/img/pexels-wildlittlethingsphoto-27087002.jpg");
  background-size: cover;
  background-position: 50% 30%;

  .service-title {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 142px 0 0 40px;
    h2 {
      margin: 0;
      font-size: 40px;
      color: #ffffff;
    }

    p {
      color: #ffffff;
      font-size: 16px;
    }
  }
}

@media (max-width: 480px) {
  .service-banner {
    height: 250px;

    .service-title {
      padding: 92px 0 0 40px;

      h2 {
        font-size: 22px;
        font-weight: 900;
      }

      p {
        font-size: 13px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .service-banner {
    height: 300px;

    .service-title {
      padding: 92px 0 0 40px;

      h2 {
        font-size: 24px;
        font-weight: 900;
      }

      p {
        font-size: 18px;
      }
    }
  }
}
</style>
