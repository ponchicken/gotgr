<template>
  <div class="card">
    <h3>{{ data.decision }}</h3>
    <img :src="data.imageUrl" alt="">
    <div class="card-params">
      <div class="card-param">
        <span>category</span>
        <span>{{ data.category }}</span>
      </div>
      <div class="card-param">
        <span>slp</span>
        <span>{{ data.slp }}</span>
      </div>
      <div class="card-param">
        <span>upc</span>
        <span>{{ data.upc }}</span>
      </div>
      <div class="card-param">
        <span>price</span>
        <span>{{ data.price }}</span>
      </div>
      <div class="card-param">
        <span>canVoid</span>
        <span v-html="displayToF(data.canVoid)"></span>
      </div>
      <div class="card-param">
        <span>canReprint</span>
        <span v-html="displayToF(data.canReprint)"></span>
      </div>
      <div class="card-param">
        <span>isVoided</span>
        <span v-html="displayToF(data.isVoided)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {

  },
  methods: {
    displayToF(expression) {
       return expression ? '&#x2714;' : '&#x274C;'
    }
  }
}
</script>

<style scoped lang="scss">
.card{

  h3{
    color: #57a75a;
  }
  img{
    border-radius: 2px;
  }
  &-params{
    padding: 0 5px;
    max-width: 200px;
    margin: 0 auto;
    text-align-last: left;
  }
  &-param{
        text-align: left;
    &>span:first-child{
      margin-right: 5px;
      color: #777;
    }
    &>span:last-child{

    }
  }
}

</style>