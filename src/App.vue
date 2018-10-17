<template>
  <div id="app">
    <Header />
    <Catalogue :data="catalogue"/>
  </div>
</template>

<script>
import Catalogue from './components/Catalogue.vue'
import Header from './components/Header.vue'
import randomWords from 'random-words'


export default {
  name: 'app',
  data: function () {
    return {
      catalogue: generateCatalogue({ count: 12 }) 
    }
  },
  components: {
    Header,
    Catalogue
  }
}

function generateCatalogue({count}) {
  let result = []
  for (let i=0; i<count; i++) result.push(generateRandData())
  console.log(result)
  return result
}

function generateRandData() {
  return {
    decision: randomWords(1).join(''),
    category: randomWords(1).join(''),
    slp: randomWords(3).join(' '),
    upc: randomWords(3).join(' '),
    price: randNumber(9999),
    imageUrl: `https://placekitten.com/200/200?image=${randNumber(17)}`,
    canVoid: randBool(),
    canReprint: randBool(),
    isVoided: randBool(),
  }
}

function randBool() {
  return Math.random() >= 0.5
}

function randNumber(max) {
  return Math.floor(Math.random()*max)
}

</script>

<style lang="scss">
  @import url('./assets/styles/style.scss');
</style>
