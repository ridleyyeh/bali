<template>
  <div class="detail-banner-bg">
    <div class="detail-banner">
      <div class="searchproduct">
        <p>搜尋商品</p>
        <ul class="ullist">
          <router-link to="/glasses" aria-label="眼鏡"> <li>眼鏡</li></router-link>
          <router-link to="/sunglasses" aria-label="太陽眼鏡"> <li>太陽眼鏡</li></router-link>
          <router-link to="/contactlens" aria-label="隱形眼鏡"> <li>隱形眼鏡</li></router-link>
          <router-link to="/accessories" aria-label="配件"> <li>配件</li></router-link>
        </ul>
      </div>
      <div class="aboutpurchase">
        <p>關於購買</p>
        <ul class="ullist">
          <router-link to="/aboutlens" aria-label="關於鏡片"><li>關於鏡片</li></router-link>
          <router-link to="/warranty" aria-label="安心保證"><li>安心保證</li></router-link>
        </ul>
      </div>

      <div class="aboutbali">
        <p>關於明祥驗光所</p>
        <ul class="ullist">
          <router-link to="/service" aria-label="服務一覽"><li>服務一覽</li></router-link>
          <router-link to="/" aria-label="鏡片更換"><li>鏡片更換</li></router-link>
        </ul>
      </div>

      <div class="customer-service">
        <p style="margin-right: 25px">支援服務</p>
        <ul class="ullist">
          <router-link to="/faq" aria-label="常見問題"><li>常見問題</li></router-link>
          <router-link to="/register" aria-label="註冊為新會員"><li>註冊為新會員</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.detail-banner-bg {
  background-color: #f4f4f4;
  width: 100%;
  .detail-banner {
    max-width: 90%;
    margin: 0 auto;
    padding: 50px 0px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .searchproduct,
    .aboutpurchase,
    .aboutbali,
    .customer-service {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 150px;
      &:nth-child(2) {
        p {
          // height: 50px;
        }
      }
      p {
        color: #000;
        font-size: 12px;
        margin: 0;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
        a {
          text-decoration: none;
          color: #999999;
          padding: 3px 0;
          cursor: pointer;
          li {
            list-style: none;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
