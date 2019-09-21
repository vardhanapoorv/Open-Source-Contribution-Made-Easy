<template>
 <div class="card" v-bind:style="{width: 18 + 'rem'}">
  <div class="card-body">
    <h5 class="card-title">{{god.name}}</h5>
    <p class="card-text">{{god.desc}}</p>
 </div>
 </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    god: Object
  }
}
</script>
