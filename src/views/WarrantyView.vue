<script setup>
import TopBar from "../components/TopBar.vue";
import WarrantyBanner from "@/components/WarrantyBanner.vue";
import DetailBanner from "@/components/DetailBanner.vue";
import CopyrightSection from "@/components/CopyrightSection.vue";
</script>

<template>
  <TopBar />
  <div class="navigation-bar">
    <router-link to="/" class="nb-1">
      <p>明祥驗光所首頁</p>
    </router-link>

    <p>></p>
    <router-link to="/accessories" class="nb-2">
      <p>安心保證</p>
    </router-link>
  </div>

  <WarrantyBanner />

  <div class="guarantee-section">
    <h2>換貨保固</h2>
    <div class="guarantee-block">
      <div class="guarantee-number">
        <p>WARRANTY 01</p>
      </div>
      <div class="guarantee-detail">
        <p class="detail-time">1month</p>
        <h3>若對購買商品不滿意，自取件日起1個月內可辦理換貨服務</h3>
        <p class="attention">若對購買商品不滿意，自取件日起1個月內無需任何理由即可辦理換貨服務。</p>
        <ul>
          <li>"商品不滿意"等非不良品的換貨因素，一人僅限1次換貨服務。</li>
          <li>僅限於原購買門市辦理換貨服務，並且商品必須保持完整無損。</li>
          <li>部分商品如單購買鏡框、無度數太陽眼鏡、抗藍光眼鏡、特價商品、眼鏡配件等不在換貨服務範圍之內。</li>
          <li>辦理換貨服務時需提供保證卡與購買發票等收據憑證並填寫問卷調查。</li>
          <li>換貨價格高於原本價格的情形需自行負擔差額。</li>
          <li>換貨價格低於原本價格的情形恕不退還差額。</li>
          <li>單換鏡片不適用於換貨服務內,若需更換度數可使用度數安心保證。</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="guarantee-section">
    <h2>度數保證</h2>
    <div class="guarantee-block">
      <div class="guarantee-number">
        <p>WARRANTY 02</p>
      </div>
      <div class="guarantee-detail">
        <p class="detail-time">1year</p>
        <h3>鏡片自取件日起，度數保固1年</h3>
        <p class="attention">自取件日起1年內，如有配戴不合適的情形，將提供免費1次的度數更換服務。</p>
        <ul>
          <li>依據指定度數製成的眼鏡皆不在保固範圍內。</li>
          <li>請務必攜帶原商品至OWNDAYS門市，供門市人員確認後進行回收。</li>
        </ul>
      </div>
    </div>

    <div class="guarantee-block">
      <div class="guarantee-number">
        <p>WARRANTY 03</p>
      </div>
      <div class="guarantee-detail">
        <p class="detail-time">2months</p>
        <h3>遠近兩用漸變焦鏡片如有配戴不合適的情形可免費更換成薄型非球面普通鏡片</h3>
        <!-- <p class="attention">自取件日起1年內，如有配戴不合適的情形，將提供免費1次的度數更換服務。</p> -->
        <ul>
          <li>遠近兩用漸變焦鏡片如有配戴不合適的情形，自取件日起兩個月內可免費更換成薄型非球面普通鏡片。</li>
          <li>請務必攜帶原商品至門市，供門市人員確認後進行回收。</li>
        </ul>
      </div>
    </div>

    <div class="guarantee-block">
      <div class="guarantee-number">
        <p>WARRANTY 04</p>
      </div>
      <div class="guarantee-detail">
        <p class="detail-time">2months</p>
        <h3>染色鏡片如有配戴不合適的情形可免費更換成薄型非球面普通鏡片</h3>
        <p class="attention">染色鏡片如有配戴不合適的情形，自取件日起兩個月內可免費更換成薄型非球面普通鏡片。</p>
        <ul>
          <li>無法提供變更染色鏡片顏色及深淺度的服務。</li>
          <li>請務必攜帶原商品至門市，供門市人員確認後進行回收。</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="guarantee-section">
    <h2>品質保證</h2>
    <div class="guarantee-block">
      <div class="guarantee-number">
        <p>WARRANTY 05</p>
      </div>
      <div class="guarantee-detail">
        <p class="detail-time">1year</p>
        <h3>鏡框自取件日起，品質保固1年</h3>
        <p class="attention">自取件日起1年內，在正常使用下如發生商品損壞情形，將提供維修或免費更換商品服務。</p>
        <ul>
          <li>（品質保固範圍外）・故意、過失等人為損壞　・商品遺失　・特價折扣商品</li>
          <li>將有部分商品如無度數的太陽眼鏡、抗藍光眼鏡、眼鏡配件等即不在保固範圍之內。</li>
          <li>請務必攜帶原商品至門市，供門市人員確認後進行回收。</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="guarantee-section">
    <h2>意外保證</h2>
    <div class="guarantee-block">
      <div class="guarantee-number">
        <p>WARRANTY 06</p>
      </div>
      <div class="guarantee-detail">
        <p class="detail-time">1year</p>
        <h3>人為因素造成的商品損壞可以半價優惠更換相同商品</h3>
        <p class="attention">因人為因素造成的商品損壞，自取件日起1年內可以半價優惠更換相同商品。</p>
        <ul>
          <li>請務必攜帶原商品至門市，供門市人員確認後進行回收。</li>
          <li>若無相同商品之庫存時將提供等值商品的半價優惠服務。</li>
          <li>半價優惠服務僅限1次。</li>
          <li>半價優惠服務將依商品定價做計算。</li>
          <li>將有部分商品如無度數的太陽眼鏡、抗藍光眼鏡、特價折扣商品、眼鏡配件等即不在保固範圍之內。</li>
        </ul>
      </div>
    </div>
  </div>

  <DetailBanner />
  <CopyrightSection />
</template>

<style lang="scss">
.guarantee-section {
  max-width: 70%;
  margin: 60px auto;

  h2 {
    text-align: center;
    font-size: 18px;
    margin: 40px 0;
    font-weight: 500;
  }

  .guarantee-block {
    width: 100%;
    border: 1px solid var(--bordercolor);
    padding: 20px 20px 20px 130px;
    display: flex;
    margin: 30px 0;
    position: relative;
    .guarantee-number {
      &::before {
        content: " ";
        height: 100%;
        width: 1px;
        position: absolute;
        top: 0;
        left: 110px;
        border-left: 1px dashed var(--bordercolor);
      }
      p {
        font-size: 14px;
        transform: rotate(-90deg);
        position: absolute;
        top: 50%;
        left: 10px;
      }
    }

    .guarantee-detail {
      .detail-time {
        color: #c7002e;
        font-size: 14px;
        font-weight: 900;
      }

      h3 {
        font-size: 16px;
      }

      .attention {
        font-size: 11px;
        padding-top: 5px;
      }

      ul {
        padding: 0;
        margin: 10px;
        li {
          font-size: 11px;
          color: #999999;
          list-style: square;
        }
      }
    }
  }
}
</style>
