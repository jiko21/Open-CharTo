<template>
  <div class="home tile is-ancestor">
    <div class="tile is-4 is-parent">
      <Chart :options="getChartData"/>
    </div>
    <div class="tile is-parent">
      <TodoPanes :allTodos='getAllTodos' />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import Chart from '@/components/Chart.vue';
import TodoPanes from '@/components/TodoPanes.vue';

@Component({
  components: {
    Chart,
    TodoPanes,
  },
    computed: {
    ...mapGetters('top', [
      'getAllTodos',
      'getChartData',
    ]),
  },
})
export default class Top extends Vue {
  public created() {
    this.$store.dispatch('top/initialize');
  }
}
</script>
