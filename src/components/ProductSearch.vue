<template>
  <div id="product-search-section">
    <div class="search">
      <input type="text" id="search-box" placeholder="請輸入商品型號等關鍵字" />
      <a href="#" id="search-icon"><box-icon name="search"></box-icon></a>
    </div>

    <div id="filters">
      <span id="results-count">搜尋結果: 0 件</span>
      <div class="sort-container">
        <!-- <label for="sort-options">排序方式</label> -->
        <select id="sort-options">
          <option value="" disabled selected>排序方式</option>
          <option value="newest">最新商品</option>
          <option value="price-high-low">最高價格</option>
          <option value="price-low-high">最低價格</option>
        </select>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="in-stock" />
        <label for="in-stock">有庫存</label>
      </div>
    </div>
    <div id="search-results"></div>
  </div>
</template>

<style lang="scss">
#product-search-section {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input[type="text"] {
      border: none;
      border-bottom: 1px solid #000000;
      width: 30%;
      outline: none;
    }
  }

  #filters {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 50px;
    border: 2px solid var(--bordercolor);
    #results-count {
      width: 60%;
      border-right: 2px solid var(--bordercolor);
      padding: 10px 72px;
      font-weight: 600;
    }

    .sort-container {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 20%;
      border-right: 2px solid var(--bordercolor);
      #sort-options {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: none;
        background-color: #fff;
        outline: none;
        cursor: pointer;

        option {
        }
      }
    }

    .checkbox-container {
      width: 20%;
      padding: 10px 20px;
    }
  }

  #search-results {
    width: 100%;
    height: 500px;
    //暫時
  }
}

@media (max-width: 480px) {
  #product-search-section {
    .search {
      input[type="text"] {
        width: 60%;
      }
    }
  }
}
</style>
