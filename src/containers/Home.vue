<template>
  <div class="home">
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            CharTo
          </h1>
          <h2 class="subtitle">
            Visualize your tasks.
          </h2>
          <a class="button is-primary is-large" href="/signin">
            <strong>はじめる!!</strong>
          </a>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column">
        <article class="message is-info">
          <div class="message-header">
            <p>かんたん管理!</p>
          </div>
          <div class="message-body">
            CharToでは、特殊なタスク管理方法を行っておりません。
            ただ、やることを登録して、ToDoに追加するだけ。
            いま、そのタスクをしているならば、Doingにして、
            タスクが終わればDoneにするだけ。
            それに、終わったタスクは次の日には消えるから、
            自分で消すなんてことも必要ありません!
          </div>
        </article>
      </div>
      <div class="column">
        <article class="message is-info">
          <div class="message-header">
            <p>どこでもアクセス!</p>
          </div>
          <div class="message-body">
            CharToをご利用になるには、ソーシャルログインが必要となります。
            ただし、ログインさえすれば、いつでもどこでもタスク管理ができます。
            家でも、移動中でも、あなたのオフィスでも。
            CharToはいつでもあなたのそばにいます。
          </div>
        </article>
      </div>
      <div class="column">
        <article class="message is-info">
          <div class="message-header">
            <p>PWA対応!</p>
          </div>
          <div class="message-body">
            スマートフォン等をご利用の方でも、CharToを簡単にご利用になれます。
            PWA (Progressive Web Application)に対応しているため、
            ホームボタンに追加するだけでアプリのようにご利用になれます。
            また、オフラインでもタスク管理ができるため、持ち運べる
            タスク管理帳に早変わりします。
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  .container {
    text-align: center;
  }
  .columns {
    .column {
      margin: 10% 5%;
    }
  }
</style>
