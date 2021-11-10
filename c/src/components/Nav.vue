<template>
  <nav>
    <h1 class="mark"><img src="../assets/horizontal.svg" alt="U-NEXT"></h1>

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

nav {
  width: 100vw;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient( color(main,.3),color(main,0) );

  display: flex;
  place-items: center;
  justify-content: center;
}

.mark {
  position: fixed;
  top: 16px;
  left: 24px;
  img{
    width: 160px;
  }
}

.globalNav {
  display: flex;
  .material-icons-round {
    font-size: 32px;
  }
}
.globalNav__item {
  position: relative;
  transition: .1s ease-out;
  margin: 0 8px;

  > a {
    text-decoration: none;
    color: color(main);
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 8px 16px 8px 8px;
    border-radius: 6px;
    &:hover {
      background: color(main,.1);
    }
    p {
      font-size: 16px;
      font-weight: 600;
      margin-left: 8px;
    }
  }

  ul {
    display: none;
    position: absolute;
    top: 105%;
    left: 0;
    width: 160px;
    background: color(main,.3);
    border-radius: 6px;
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
    ul {
      display: block;
    }
  }
}
</style>
