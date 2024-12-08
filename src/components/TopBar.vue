<template>
  <div class="topbar">
    <div class="logo">
      <router-link to="/">
        <h1>Bali <br />Optician's</h1>
      </router-link>
    </div>
    <div class="tp-opts">
      <router-link to="/glasses">眼鏡</router-link>
      <router-link to="/sunglasses">太陽眼鏡</router-link>
      <router-link to="/contactlens">隱形眼鏡</router-link>
      <router-link to="/accessories">配件</router-link>
    </div>
    <div class="tp-fn">
      <router-link to="/login" class="login" aria-label="登入"
        ><box-icon type="solid" name="user"></box-icon
      ></router-link>
      <router-link to="/fav" class="heart" aria-label="我的最愛"> <box-icon name="heart"></box-icon></router-link>
      <router-link to="/shoppingcart" class="cart" aria-label="購物車"><box-icon name="cart"></box-icon></router-link>
    </div>
  </div>
</template>

<style lang="scss">
.topbar {
  max-width: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: #fff;
  border-bottom: 1px solid var(--bordercolor);

  .logo {
    max-width: 20%;
    width: 20%;

    a {
      text-decoration: none;
      color: #666666;

      h1 {
        font-size: 28px;
        font-family: var(--englishfont);
        font-weight: 900;
      }
    }
  }

  .tp-opts {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: #333;
      padding: 0 20px;
      font-size: 18px;
    }
  }

  .tp-fn {
    display: flex;
    align-items: center;

    width: 20%;
    a {
      text-decoration: none;
      color: #333;
      font-weight: 600;
      padding: 0 25px;
    }
  }
}

@media (max-width: 480px) {
  .topbar {
    // padding: 10px 20px;

    .logo {
      width: 30%;
      a {
        h1 {
          font-size: 17px;
        }
      }
    }

    .tp-opts {
      display: none;
    }

    .tp-fn {
      width: 50%;
      justify-content: center;
      a {
        padding: 0 15px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .topbar {
    .logo {
      width: 30%;
    }

    .tp-opts {
      display: none;
    }

    .tp-fn {
      width: 50%;
      justify-content: center;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .topbar {
    .logo {
      width: 30%;
    }

    .tp-opts {
      display: none;
    }

    .tp-fn {
      width: 50%;
      justify-content: center;
    }
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .topbar {
    .logo {
    }

    .tp-opts {
      width: 45%;
    }

    .tp-fn {
      width: 25%;
    }
  }
}
</style>
