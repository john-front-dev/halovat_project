<template>
  <div>
    <Header/>
    <Carousel/>
    <Content/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Content from '../components/Content.vue'
import Header from '../components/Header.vue';
export default {
  components: {
    Carousel,
    Content,
    Header,
  }
}
</script>

<style>

</style>