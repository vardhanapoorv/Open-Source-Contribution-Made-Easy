<template>
  <div id="app">
    <div class="container container-fluid gods-container">
      <div class="row justify-content-start">
        <card v-for="(god, index) in gods" :god="god" :index="index" :key="index"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import GreekGods from '../../public/greek-gods.json';

export default {
  name: 'Base',
  data() {
    return {
      gods: GreekGods
    }
  },
  components: {
    Card
  }
};
</script>

<style type="text/css">
  .gods-container{
    padding-top: 15px;
  }
</style>
