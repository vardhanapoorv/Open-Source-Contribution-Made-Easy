<template>
  <div id="app">
    <div class="container" v-bind:style="{'padding-top': 15 + 'px'}">
      <card v-for="(god, index) in gods" v-bind:god="god" v-bind:index="index" v-bind:key="index"></card>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import GreekGods from '../../public/greek-gods.json';

export default {
  name: 'Base',
  data: function() {
    return {
    gods: GreekGods
    }
  },
  components: {
    Card
  }
};
</script>

