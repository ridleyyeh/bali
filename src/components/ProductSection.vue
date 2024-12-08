<template>
  <div class="product-section">
    <div class="ps-title">
      <h1 data-aos="fade-up" data-aos-delay="100">PRODUCTS</h1>
    </div>

    <div class="product-img-section-upper">
      <router-link to="/glasses" class="glasses-section" data-aos="fade-right" data-aos-delay="100">
        <img src="../assets/img/glasses.jpg" alt="" />
      </router-link>

      <router-link to="/sunglasses" class="sunglasses-section" data-aos="fade-right" data-aos-delay="100">
        <img src="../assets/img/sunglasses.jpg" alt="" />
      </router-link>
    </div>

    <div class="product-img-section-lower">
      <router-link to="/contactlens" class="contactlens" data-aos="fade-right" data-aos-delay="100">
        <img src="../assets/img/contactlens.jpg" alt="" />
      </router-link>
      <router-link to="/accessories" class="accessories" data-aos="fade-right" data-aos-delay="100">
        <img src="../assets/img/accesories.jpg" alt="" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.product-section {
  max-width: 80%;
  margin: 0 auto;

  .ps-title {
    width: 100%;
    padding: 100px 0 90px;
    h1 {
      text-align: center;
      font-family: "Space Grotesk", sans-serif;
    }
  }

  .product-img-section-upper,
  .product-img-section-lower {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .glasses-section,
    .sunglasses-section,
    .contactlens,
    .accessories {
      position: relative;
      width: calc((100% - 5px) / 1.5);
      padding: 0;
      overflow: hidden;

      img {
        width: 100%;
        aspect-ratio: 1.5/1;
        object-fit: cover;
      }

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.5 ease;
      }

      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

        img {
          transform: scale(1.15);
          transition: transform 0.5s ease;
        }

        &::after {
          background-color: rgba(0, 0, 0, 0.3); /* hover 時半透明遮罩 */
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .product-section {
    .ps-title {
      padding: 50px 0 45px;
    }

    .product-img-section-upper,
    .product-img-section-lower {
      flex-wrap: wrap;
      flex-direction: column;
      gap: 0px;
      .glasses-section,
      .sunglasses-section,
      .contactlens,
      .accessories {
        img {
        }

        &:hover {
          box-shadow: none;
          img {
            transform: none;
          }
        }
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 768px) {
}

@media (min-width: 769px) and (max-width: 1024px) {
  .product-section {
    .product-img-section-upper,
    .product-img-section-lower {
      flex-direction: column;
      gap: 0px;
    }
  }
}
</style>
