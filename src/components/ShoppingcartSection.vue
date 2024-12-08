<template>
  <div class="shopping-cart-section">
    <div class="cart-title">
      <h1>購物車</h1>
    </div>

    <div class="cart-info">
      <div class="cart-product">
        <p>購物車內沒有商品</p>
      </div>
      <div class="cart-price">
        <div class="pricewithtax">
          <div class="pricewithtax-total">
            <p>商品合計</p>
            <p>$0</p>
          </div>
          <div class="pricewithdelivery">
            <p>運費</p>
            <p>$0</p>
          </div>
        </div>

        <div class="pricedetail">
          <div class="totalprice">
            <p>合計</p>
            <p>$0</p>
          </div>
          <div class="extracredit">
            <p>獲得點數：+0點（相當元）</p>
          </div>
        </div>

        <a href="" class="btn-save">內容保存繼續購物</a>
        <div class="stocknote">
          <p>※ 現在購物車裡的商品，可能有缺貨的狀況。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.shopping-cart-section {
  max-width: 80%;
  margin: 0 auto 60px auto;
  .cart-title {
    width: 100%;
    padding: 60px 0 13px;
    h1 {
      font-weight: 900;
      font-size: 30px;
    }
  }

  .cart-info {
    display: flex;
    justify-content: space-between;

    .cart-product {
      width: 60%;
      border-top: 1px solid #000;

      p {
        padding: 20px 0 34px;

        font-size: 14px;
      }
    }
    .cart-price {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 35%;
      // padding-top: 120px;
      .pricewithtax {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-top: 1px solid var(--bordercolor);
        border-bottom: 1px solid var(--bordercolor);
        padding: 20px 15px;
        .pricewithtax-total {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 5px 0;
          p {
            font-weight: 600;
          }
        }

        .pricewithdelivery {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 5px 0;

          p {
            font-weight: 600;
          }
        }
      }

      .pricedetail {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 20px 15px;
        .totalprice {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          p {
            font-weight: 600;
          }
        }

        .extracredit {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          padding: 20px 0px 20px 15px;

          p {
            font-size: 11px;
          }
        }
      }

      .btn-save {
        width: 100%;
        text-align: center;
        padding: 10px;
        border: 1px solid #000;
        text-decoration: none;
        color: #000;
        margin: 15px 0;
        &:hover {
          background-color: #000;
          color: #fff;
        }
      }

      .stocknote {
        width: 100%;

        p {
          font-size: 11px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .shopping-cart-section {
    max-width: 100%;
    padding: 0 10px;
    .cart-title {
      border-bottom: 1px solid #000;
      h1 {
        text-align: center;
        font-size: 20px;
      }
    }

    .cart-info {
      flex-direction: column;
      width: 100%;
      .cart-product {
        width: 100%;
        border: 0;

        p {
          text-align: center;
        }
      }

      .cart-price {
        width: 100%;
      }
    }
  }
}
</style>
