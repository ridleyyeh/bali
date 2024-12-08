<script setup>
import TopBar from "../components/TopBar.vue";
import AboutlensBanner from "../components/AboutlensBanner.vue";
import DetailBanner from "../components/DetailBanner.vue";
import CopyrightSection from "../components/CopyrightSection.vue";
</script>
<template>
  <TopBar />
  <AboutlensBanner />
  <div class="lens-intro">
    <div class="lens-title">
      <h2>鏡片介紹</h2>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>薄型非球面鏡片</h3>
        <h4>+ NT$0</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>只需負擔鏡框上標示價格即可擁有高品質薄型非球面鏡片</h4>
          <p>
            使用與世界知名頂級品牌共同研發所製抗UV、防汙鍍膜薄型非球面鏡片。 <br />
            非球面鏡片比起球面鏡片可減低影像扭曲現象使其更加輕薄，因此可製作出相較以往更加輕盈的眼鏡。無論你是高度近視、遠視還是散光，無論任何度數皆以0元提供給你最適合的薄型非球面鏡片。
          </p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>特徵</h3>
          </div>
          <ul>
            <li>抗UV 99%以上</li>
            <li>抗反射鍍膜</li>
            <li>耐磨鍍膜</li>
            <li>防汙鍍膜</li>
          </ul>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67, 1.74</p>
        </div>
      </div>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>薄型雙面非球面鏡片</h3>
        <h4>+ NT$2,000</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>可降低影像扭曲現象的高品質薄型雙非球面鏡片</h4>
          <p>
            日本知名品牌，菲律賓製作。鏡片使用雙面非球面設計，雙非球面設計比起單非球面設計、球面設計，更可降低影像扭曲現象，表現最佳光學品質，度數研磨精密，同時達到輕和薄，配戴上舒適度高。<br />
            另外，日本品牌鏡片使用的特殊鍍膜能夠大大提升鏡片透光度、抗壓與耐磨程度。
          </p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>特徵</h3>
          </div>
          <ul>
            <li>抗UV 99%以上</li>
            <li>抗反射鍍膜</li>
            <li>耐磨鍍膜</li>
            <li>防汙鍍膜</li>
          </ul>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67, 1.74</p>
        </div>
      </div>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>抗藍光鏡片</h3>
        <h4>+ NT$1,000</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>可濾除電腦、智慧型手機螢幕所產生出的刺眼藍光</h4>
          <p>可減輕藍光所造成的眼睛疲勞症狀。愛護眼睛，從抗藍光鏡片開始！</p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>使用場合</h3>
          </div>
          <p style="padding: 12px 0px 0px 10px">電腦・智慧型手機</p>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67, 1.74</p>
        </div>
      </div>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>染色鏡片</h3>
        <h4>+ NT$1,000</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>能夠更加享受時尚流行，可配合喜歡的鏡框來製作自己喜愛的太陽眼鏡</h4>
          <p>提供多種染色鏡片，可配合喜歡的鏡框製作屬於自己的太陽眼鏡，更加享受時尚流行展現魅力！</p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>使用場合</h3>
          </div>
          <p style="padding: 12px 0px 0px 10px">釣魚・滑雪・戶外活動</p>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67</p>
        </div>
      </div>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>CLC高清鍍膜鏡片</h3>
        <h4>+ NT$1,000</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>只需負擔鏡框上標示價格即可擁有高品質薄型非球面鏡片</h4>
          <p>
            使用與世界知名頂級品牌共同研發所製抗UV、防汙鍍膜薄型非球面鏡片。 <br />
            非球面鏡片比起球面鏡片可減低影像扭曲現象使其更加輕薄，因此可製作出相較以往更加輕盈的眼鏡。無論你是高度近視、遠視還是散光，無論任何度數皆以0元提供給你最適合的薄型非球面鏡片。
          </p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>特徵</h3>
          </div>
          <ul>
            <li>薄型非球面鏡片</li>
            <li>抗UV 99%以上</li>
            <li>耐磨鍍膜</li>
            <li>防汙鍍膜</li>
          </ul>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67</p>
        </div>
      </div>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>Anti Scratch 鍍膜鏡片</h3>
        <h4>+ NT$2,000</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>耐刮優異高品質的鍍膜鏡片，適用於任何情境。</h4>
          <p>
            客戶關心鏡片是否容易有刮痕。OWNDAYS新販售的Anti
            Scratch鍍膜鏡片，提升了鏡片表面的硬度，更提高了抗刮損能力，易於清潔的特性可以維持鏡片的品質，適合各種不同情境的需求。相較一般標準的奈米膜層，有更好的耐用性。
          </p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>使用場合</h3>
          </div>
          <p style="margin: 10px 5px">任何場合</p>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67, 1.74</p>
        </div>
      </div>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>偏光鏡片</h3>
        <h4>+ NT$3,000</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>阻隔來自水面上等的反光感，適合使用於戶外活動</h4>
          <p>
            可阻隔來自路面、水面、雪面上的反光感及汽車、大樓玻璃反射太陽光帶來的刺眼感，讓視野更加清晰。偏光鏡片與減輕眩光的太陽眼鏡不同之處在於鏡片之間加入特殊濾膜，可過濾紫外線與太陽反射光，使只對眼睛舒適的可見光通過。適用於釣魚、高爾夫、兜風、滑雪等戶外活動。
          </p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>使用場合</h3>
          </div>
          <p style="padding: 12px 0px 0px 10px">釣魚・滑雪・戶外活動</p>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67</p>
        </div>
      </div>
    </div>

    <div class="lens-block">
      <div class="lens-price">
        <h3>舒壓鏡片</h3>
        <h4>+ NT$2,000</h4>
      </div>
      <div class="lens-content">
        <div class="lens-description">
          <h4>舒緩長時間看近所造成的視覺疲勞</h4>
          <p>
            現代人相較以往生活習慣改變，看近需求增加，舒壓鏡片可有效減輕長時間看近造成的眼睛疲勞 <br />
            在鏡片的上半部設計了明視區（能看清楚遠距離），並在下半部設計了度數舒壓區（舒適地看近距離物件）。
          </p>
        </div>
        <div class="lens-symbol">
          <div class="lens-symbol-title">
            <h3>使用場合</h3>
          </div>
          <p style="padding: 12px 0px 0px 10px">長時間看近・筆記型電腦・智慧型手機</p>
        </div>
        <div class="lens-refraction">
          <div class="lens-refraction-title">
            <h3>折射率</h3>
          </div>
          <p>1.60, 1.67</p>
        </div>
      </div>
    </div>
  </div>
  <DetailBanner />
  <CopyrightSection />
</template>
<style lang="scss">
.lens-intro {
  max-width: 80%;
  margin: 80px auto;
  .lens-title {
    text-align: center;
    h2 {
      font-size: 32px;
      font-weight: 300;
    }
  }

  .lens-block {
    border: 2px solid var(--bordercolor);
    min-width: 50px;
    margin: 40px 0;
    .lens-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 38px;
      border-bottom: 2px solid var(--bordercolor);

      h4 {
        color: var(--pricecolor);
        font-weight: 900;
        font-size: 16px;
      }
    }

    .lens-content {
      width: 100%;
      .lens-description {
        padding: 30px;
        border-bottom: 2px solid var(--bordercolor);

        p {
          color: #666666;
        }
      }

      .lens-symbol {
        display: flex;
        width: 100%;
        border-bottom: 2px solid var(--bordercolor);
        .lens-symbol-title {
          border-right: 2px solid var(--bordercolor);
          padding: 10px 14px;
          width: 12%;
          min-width: 12%;

          h3 {
            text-align: center;
          }
        }

        ul {
          list-style: square;
          display: flex;
          align-items: center;
          width: 30%;
          flex-wrap: wrap;
          position: relative;
          margin: 0;

          li {
            width: 48%;
            margin: 2px;
            // &::before {
            //   width: 15px;
            //   height: 15px;
            //   content: "";
            //   position: absolute;
            //   display: block;
            //   left: 20px;
            //   top: 4px;
            //   background: url("./img/bx-check.svg");
            //   background-size: 15px;
            // }
          }
        }
      }

      .lens-refraction {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .lens-refraction-title {
          padding: 10px 0;
          border-right: 2px solid var(--bordercolor);
          width: 12%;
          min-width: 12%;

          h3 {
            text-align: center;
            font-weight: 800;
          }
        }

        p {
          padding: 1%;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .lens-intro {
    .lens-block {
      .lens-content {
        .lens-description {
          h4 {
            font-size: 15px;
            margin: 5px 0;
          }
          p {
            font-size: 12px;
          }
        }

        .lens-symbol {
          .lens-symbol-title {
            width: 20%;

            h3 {
              font-size: 14px;
              margin-top: 10px;
            }
          }

          ul {
            width: 60%;
            padding: 0 0 0 20px;

            li {
              font-size: 11px;
            }
          }

          p {
            font-size: 11px;
            margin: 20px 5px !important;
            padding: 8px 0;
          }
        }

        .lens-refraction {
          .lens-refraction-title {
            width: 20%;

            h3 {
              font-size: 14px;
            }
          }

          p {
            font-size: 11px;
          }
        }
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .lens-intro {
    .lens-block {
      .lens-content {
        .lens-description {
        }

        .lens-symbol {
          .lens-symbol-title {
            // padding: 30px 14px;
          }

          ul {
            width: 80%;
            padding: 0 0 0 20px;
            li {
              font-size: 16px;
            }
          }

          p {
            margin: 40px 10px !important;
          }
        }
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .lens-intro {
    .lens-block {
      .lens-content {
        .lens-description {
        }

        .lens-symbol {
          .lens-symbol-title {
            padding: 30px 14px;
          }

          ul {
            width: 40%;
            padding: 0 0 0 20px;
            li {
              font-size: 15px;
            }
          }

          p {
            margin: 40px 10px !important;
          }
        }
      }
    }
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .lens-intro {
    .lens-block {
      .lens-content {
        .lens-description {
        }

        .lens-symbol {
          .lens-symbol-title {
            padding: 30px 14px;
          }

          ul {
            width: 40%;
            li {
              font-size: 16px;
            }
          }

          p {
            margin: 40px 10px !important;
          }
        }
      }
    }
  }
}
</style>
