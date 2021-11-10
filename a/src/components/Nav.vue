<template>
  <nav>
    <h1 class="mark"><img src="../assets/mark.svg" alt="U-NEXT"></h1>

    <ul class="globalNav">
      <li class="globalNav__item">
        <a href="#">
          <span class="material-icons-round">
            play_circle_filled
          </span>
          <p>ビデオ</p>
        </a>

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
      </li>

      <li class="globalNav__item">
        <a href="#">
          <span class="material-icons-round">
            menu_book
          </span>
          <p>ブック</p>
        </a>

        <ul>
          <li><a href="#">雑誌 読み放題</a></li>
          <li><a href="#">マンガ</a></li>
          <li><a href="#">ラノベ</a></li>
          <li><a href="#">書籍</a></li>
        </ul>
      </li>

      <li class="globalNav__item">
        <a href="#">
          <span class="material-icons-round">
            music_note
          </span>
          <p>ミュージック</p>
        </a>

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
      </li>


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

$NAV_WIDTH: 64px;

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
  justify-content: center;
}

.mark {
  position: fixed;
  top: 12px;
  left: 12px;
}

.globalNav {
  .material-icons-round {
    font-size: 32px;
  }
}
.globalNav__item {
  position: relative;
  transition: .1s ease-out;

  > a {
    text-decoration: none;
    color: color(main);
    width: $NAV_WIDTH;
    height: $NAV_WIDTH;
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    p {
      font-size: 10px;
      text-align: center;
      font-weight: 600;
    }
  }

  ul {
    display: none;
    position: absolute;
    top: -40%;
    left: $NAV_WIDTH;
    width: 160px;
    background: color(main,.1);
    > li {
      width: 100%;
    }
    > li > a {
      transition: .2s ease;
      display: block;
      width: 100%;
      text-decoration: none;
      padding: 8px;
      color: color(main);
      &:hover {
        background: color(main,.1);
      }
    }
  }
  &:hover {
    background: color(main,.1);
    ul {
      display: block;
    }
  }
}
</style>
