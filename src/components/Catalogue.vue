<template>
  <section>
    <h2>Catalogue of kittens</h2>
    <div class="calalogue">
      <CatalogueItem   v-for="(item, i) in data" :key="i" :data="item" />
    </div>
  </section>
</template>

<script>
import CatalogueItem from './CatalogueItem.vue'

export default {
  props: ['data'],
  components: {
    CatalogueItem
  }
}
</script>

<style scoped lang="scss">
  h2{
    text-align: center; 
    margin: 0;
    padding: 20px;
    background: #000;
  }
  .calalogue{
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    &>*{
      flex: 1 0 100px;
      max-width: 300px;
      margin: 0 10px 10px;
      text-align: center;
    }
  }
</style>