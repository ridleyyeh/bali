<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import DetailBanner from "../components/DetailBanner.vue";
import CopyrightSection from "../components/CopyrightSection.vue";
// 是否顯示注意事項
const isNoticeVisible = ref(false);
const noticePopup = ref(null);

const toggleNotice = () => {
  console.log(isNoticeVisible.value);
  isNoticeVisible.value = !isNoticeVisible.value;

  if (isNoticeVisible.value) {
    // document.addEventListener("click", closeNoticeOnClickOutside);
    console.log("notice should appear");
  } else {
    // document.removeEventListener("click", closeNoticeOnClickOutside);
    console.log("notice should hide");
  }
};

const closeNoticeOnClickOutside = (event) => {
  if (noticePopup.value && !noticePopup.value.contains(event.target)) {
    isNoticeVisible.value = false;
    document.removeEventListener("click", closeNoticeOnClickOutside);
  }
};

onUnmounted(() => {
  document.removeEventListener("click", closeNoticeOnClickOutside);
});
</script>
<template>
  <div class="fav-section">
    <div class="fav-title">
      <h1>我的最愛</h1>
    </div>
    <div class="fav-block">
      <div class="fav-ctrl">
        <p>商品清單:0</p>
        <select name="" id="">
          <option value="" disabled>排序方式</option>
          <option value="">最新商品</option>
          <option value="">最低價格</option>
          <option value="">最高價格</option>
        </select>

        <div class="fav-note">
          <a href="javascript:void(0);" @click="toggleNotice">我的最愛清單注意須知</a>
          <div id="notice-popup" class="notice-popup" v-if="isNoticeVisible" ref="noticePopup">
            <ul>
              <li>最高可加入50個最愛商品數。</li>
              <li>完成加入日起180天後商品將會被自動刪除。</li>
              <li>清除瀏覽歷程與Cookie紀錄將有可能導致試戴清單一併刪除的情形發生。</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="fav-space">
        <p>空空的購物車。</p>
        <router-link to="/">返回</router-link>
      </div>
    </div>
  </div>

  <DetailBanner />
  <CopyrightSection />
</template>

<style lang="scss">
.fav-section {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 40px 120px;
  .fav-title {
    h1 {
      font-size: 40px;
      padding: 60px 0;
    }
  }

  .fav-block {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;

    .fav-ctrl {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 2px solid var(--bordercolor);
      p {
        font-size: 14px;
        width: 15%;
      }

      select {
        width: 15%;
        border: 0;
        font-size: 14px;
      }

      .fav-note {
        width: 70%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 40px;

        a {
          text-decoration: none;
          color: var(--linkcolor);
        }

        .notice-popup {
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 99999;
          width: 500px;
        }

        .notice-popup ul {
          // list-style: none;
          padding: 30px;
          margin: 0;
        }
      }
    }

    .fav-space {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 70px 60px 20px;

      p {
        font-size: 16px;
        color: #999999;
        margin: 50px 0;
      }

      a {
        text-decoration: none;
        font-size: 14px;
        color: #666666;
        border: 1px solid #000;
        width: 30%;
        padding: 18px 0;
        text-align: center;

        &:hover {
          background-color: #000;
          color: #f4f4f4;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .fav-section {
    padding: 0 15px;

    .fav-title {
      h1 {
        font-size: 20px;
        padding: 30px 0;
      }
    }

    .fav-block {
      width: 100%;

      .fav-ctrl {
        p {
          width: 30%;
        }

        select {
          width: 30%;
        }

        .fav-note {
          // width: 40%;

          a {
            font-size: 14px;
          }
          .notice-popup {
            max-width: 70%;
            top: 39%;
            left: 20%;
            ul {
              padding: 15px;
              li {
                font-size: 12px;
              }
            }
          }
        }
      }

      .fav-space {
        a {
          width: 100%;
        }
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .fav-section {
    padding: 0 15px;

    .fav-title {
      h1 {
        font-size: 20px;
        padding: 30px 0;
      }
    }

    .fav-block {
      width: 100%;

      .fav-ctrl {
        p {
          width: 30%;
        }

        select {
          width: 30%;
        }

        .fav-note {
          // width: 40%;

          a {
            font-size: 14px;
          }
          .notice-popup {
            max-width: 70%;
            top: 39%;
            left: 20%;
            ul {
              padding: 15px;
              li {
                font-size: 12px;
              }
            }
          }
        }
      }

      .fav-space {
        a {
          width: 50%;
        }
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .fav-section {
    padding: 0 15px;

    .fav-title {
      h1 {
        font-size: 20px;
        padding: 30px 0;
      }
    }

    .fav-block {
      width: 100%;

      .fav-ctrl {
        p {
          width: 30%;
        }

        select {
          width: 30%;
        }

        .fav-note {
          // width: 40%;

          a {
            font-size: 14px;
          }
          .notice-popup {
            max-width: 70%;
            top: 39%;
            left: 20%;
            ul {
              padding: 15px;
              li {
                font-size: 12px;
              }
            }
          }
        }
      }

      .fav-space {
        a {
          width: 50%;
        }
      }
    }
  }
}
</style>
