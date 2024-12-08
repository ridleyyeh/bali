<template>
  <div class="service-location">
    <h1 class="location-title" data-aos="fade-up" data-aos-delay="100">SERVICE LOCATION</h1>
    <div class="location-info">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.604122671854!2d121.40063627526136!3d25.14907143364851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a500c6216b95%3A0x2b2a1919e729ff8c!2z5YWr6YeM55y86Y-h77yI5piO56Wl6amX5YWJ5omA77yJ!5e0!3m2!1szh-TW!2stw!4v1730789968386!5m2!1szh-TW!2stw"
        width="600"
        height="350"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        data-aos="fade-right"
        data-aos-delay="100"
      ></iframe>
      <h3 data-aos="fade-left" data-aos-delay="100">
        八里隱形眼鏡(明祥驗光所) <br />
        營業時間: 9:30- 21:30 <br />
        連絡電話: (02) 2619-5302
      </h3>
    </div>
  </div>
</template>

<style lang="scss">
.service-location {
  max-width: 80%;
  margin: 0 auto;
  padding: 100px 0;
  .location-title {
    text-align: center;
    padding: 100px 0;
    font-family: var(--englishfont);
  }

  .location-info {
    display: flex;
    align-items: center;

    h3 {
      text-align: center;
      padding: 100px;
    }
  }
}

@media (max-width: 480px) {
  .service-location {
    .location-title {
      padding: 20px 0;
    }

    .location-info {
      flex-direction: column;

      iframe {
        width: 276px;
        height: 161px;
      }

      h3 {
        font-size: 17px;
        padding: 50px 20px 20px 20px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .service-location {
    .location-info {
      max-width: 80%;
      margin: 0 auto;
      flex-direction: column;

      iframe {
        width: 360px;
        height: 210px;
      }

      h3 {
        padding: 30px;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .service-location {
    .location-info {
      flex-direction: column;
    }
  }
}
</style>
