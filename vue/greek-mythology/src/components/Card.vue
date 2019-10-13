<template>
    <div class="card god-card">
        <div class="card-body">
            <h5 class="card-title">{{god.name}}</h5>
            <p class="card-text">{{god.desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['god']
}
</script>

<style type="text/css">
    .god-card{
        width: 18rem;
    }
</style>
