<template>
  <div class="tile is-child">
    <apexchart :title="'進捗状況'" class="chart-body" height="300" type="donut" :options="options" :series="options.series"></apexchart>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PiechartData from '../entities/piechart_data';

@Component
export default class Chart extends Vue {
  @Prop() public options!: PiechartData;
}
</script>
