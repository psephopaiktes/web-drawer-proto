<template>
  <nav>
    <h1 class="mark"><img src="../assets/horizontal.svg" alt="U-NEXT"></h1>

    <ul class="globalNav">
      <li class="globalNav__item"><details>
        <summary>
          <span class="material-icons-round">
            play_circle_filled
          </span>
          <p>ビデオ</p>
        </summary>

        <ul>
          <li><a href="#">ランキング</a></li>
          <li><a href="#">洋画</a></li>
          <li><a href="#">邦画</a></li>
          <li><a href="#">海外ドラマ</a></li>
          <li><a href="#">韓流・アジアドラマ</a></li>
          <li><a href="#">国内ドラマ</a></li>
          <li><a href="#">アニメ</a></li>
          <li><a href="#">キッズ</a></li>
          <li><a href="#">ドキュメンタリー</a></li>
          <li><a href="#">音楽・アイドル</a></li>
          <li><a href="#">バラエティ</a></li>
          <li><a href="#">その他♡</a></li>
        </ul>
      </details></li>

      <li class="globalNav__item"><details>
        <summary>
          <span class="material-icons-round">
            menu_book
          </span>
          <p>ブック</p>
        </summary>

        <ul>
          <li><a href="#">毎日無料</a></li>
          <li><a href="#">雑誌 読み放題</a></li>
          <li><a href="#">マンガ</a></li>
          <li><a href="#">ラノベ</a></li>
          <li><a href="#">書籍</a></li>
        </ul>
      </details></li>

      <li class="globalNav__item"><details>
        <summary>
          <span class="material-icons-round">
            music_note
          </span>
          <p>ミュージック</p>
        </summary>

        <ul>
          <li><a href="#">J-POP</a></li>
          <li><a href="#">洋楽</a></li>
          <li><a href="#">ロック</a></li>
          <li><a href="#">チルアウト</a></li>
          <li><a href="#">アニメ&サントラ</a></li>
          <li><a href="#">R&B</a></li>
          <li><a href="#">ジャズ</a></li>
          <li><a href="#">クラシック</a></li>
          <li><a href="#">SMART USEN</a></li>
        </ul>
      </details></li>



    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
@use "../index.scss" as *;

$NAV_WIDTH: 240px;

nav {
  width: $NAV_WIDTH;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: color(main,.15);

  display: flex;
  flex-direction: column;
  place-items: center;
}

.mark {
  position: fixed;
  top: 32px;
  left: 36px;
  width: 160px;
  img {
    width: 100%;
  }
}

.globalNav {
  margin-top: 160px;
  .material-icons-round {
    font-size: 32px;
  }
}
.globalNav__item {
  details {
    position: relative;
    &::after {
      position: absolute;
      top: 6px;
      right:16px;
      font-size: 24px;
      content: "expand_more";
      font-family: 'Material Icons Round';
    }
    &[open]::after {
      content: "expand_less";
    }
  }
  summary {
    text-decoration: none;
    color: color(main);
    width: $NAV_WIDTH;
    height: 48px;
    padding-inline-start: 16px;
    display: flex;
    place-items: center;
    cursor: pointer;
    &:hover {
      background: color(main,.1);
    }
    p {
      font-size: 16px;
      font-weight: 600;
      margin-left: 12px;
    }
  }

  ul {
    background: color(main,.2);
    width: 100%;

    li {
      width: 100%;
    }
    a {
      display: block;
      width: 100%;
      line-height: 40px;
      padding-left: 28px;
      text-decoration: none;
      color: color(main);
      &:hover {
        background: color(main,.1);
      }
    }
  }
}
</style>
