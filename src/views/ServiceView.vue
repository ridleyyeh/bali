<script setup>
import TopBar from "../components/TopBar.vue";
import ServiceBanner from "../components/ServiceBanner.vue";
import DetailBanner from "../components/DetailBanner.vue";
import CopyrightSection from "../components/CopyrightSection.vue";
</script>
<template>
  <TopBar />
  <ServiceBanner />

  <div class="service-item">
    <div class="service-item-img">
      <img src="../assets/img/pexels-wildlittlethingsphoto-27086834.jpg" alt="" />
    </div>
    <div class="service-item-description">
      <h2>單一價格</h2>
      <h3>無論任何度數，鏡片追加費用NT$0 鏡框標示價格</h3>
      <p>
        無論任何度數，薄型非球面鏡片追加費用NT$0。
        明祥驗光所提供無論任何度數不需任何追加費用即可擁有適合自己的薄型非球面鏡片之服務，實現【鏡框標示價格】即可製作的單一價格設定。
      </p>
    </div>
  </div>

  <div class="service-item">
    <div class="service-item-img">
      <img src="../assets/img/pexels-maksgelatin-9929047.jpg" alt="" />
    </div>
    <div class="service-item-description">
      <h2>鏡片</h2>
      <h3>無論任何度數，皆使用可減低影像扭曲高品質薄型非球面鏡片</h3>
      <p>使用與世界知名頂級品牌共同研發所製抗UV、防汙鍍膜薄型非球面鏡片。</p>
    </div>
  </div>

  <div class="service-item">
    <div class="service-item-img">
      <img src="../assets/img/pexels-asim-razan-343720.jpg" alt="" />
    </div>
    <div class="service-item-description">
      <h2>鏡框</h2>
      <h3>在 門市內所擺設的眼鏡皆為本公司親手企劃・設計・製作的獨創品牌</h3>
      <p>眼鏡皆由全手工加工製作而成，將零件一件件慎重地組合完成。</p>
    </div>
  </div>

  <div class="service-item">
    <div class="service-item-img">
      <img src="../assets/img/pexels-fauxels-3184416.jpg" alt="" />
    </div>
    <div class="service-item-description">
      <h2>人員</h2>
      <h3>高服務品質與專業技術</h3>
      <p>
        為了能提供最合適客人的流行風格以及添增生活風格風彩的一副眼鏡，我們將傾聽每一位客人的需求，提供最合適的鏡框、眼鏡的使用方法等。
      </p>
    </div>
  </div>

  <DetailBanner />
  <CopyrightSection />
</template>

<style lang="scss">
.service-item {
  max-width: 90%;
  margin: 100px auto;
  background-color: var(--servicebgcolor);
  display: flex;
  align-items: stretch;

  .service-item-img {
    max-width: 60%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .service-item-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3%;
    h2 {
      font-size: 16px;
      color: #000000;
    }

    h3 {
      font-size: 16px;
      color: #000000;
      font-weight: 400;
      padding: 15px 0 0;
    }
    p {
      font-size: 14px;
      color: #666;
      margin: 10px 0 0;
    }
  }
}

@media (max-width: 480px) {
  .service-item {
    flex-direction: column;
    .service-item-img {
      max-width: 100%;
      img {
        object-fit: cover;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .service-item {
    flex-direction: column;
    .service-item-img {
      max-width: 100%;
      img {
        object-fit: cover;
      }
    }
  }
}
</style>
