<template>
  <div class="copyright-section">
    <p>COPYRIGHT (C) 明祥驗光所 co., ltd ALL RIGHTS RESERVED.</p>
    <div class="privacy">
      <ul>
        <li><a href="#">會員隱私權規範</a></li>
        <li><a href="#">會員服務使用規範</a></li>
      </ul>
      <p>中文(繁體)</p>
    </div>
  </div>
</template>

<style lang="scss">
.copyright-section {
  padding: 16px 20px 30px;
  p {
    font-size: 11px;
    color: #666666;
    margin: 0;
  }

  .privacy {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      padding: 0;
      li {
        list-style: none;
        &::after {
          content: "|";
          color: #666666;
          line-height: 1;
          margin-right: 5px;
        }
        a {
          text-decoration: none;
          font-size: 11px;
          color: #666666;
          padding-right: 5px;
        }
      }
    }
    p {
      padding-top: 3px;
    }
  }
}
</style>
