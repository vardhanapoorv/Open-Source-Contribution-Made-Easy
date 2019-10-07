<template>
  <div id="app">
    <div class="container container-fluid" v-bind:style="{'padding-top': 15 + 'px'}">
      <div class="row justify-content-start">
        <card v-for="(god, index) in gods" v-bind:god="god" v-bind:index="index" v-bind:key="index"></card>
      </div>
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

