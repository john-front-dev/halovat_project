<template>
  <div>
    <Header/>
    <Carousel/>
    <Content/>
    <ForPartners/>
    <ContectWithUs/>
    <SendApplication/>
  </div>
</template>

<script>
import SendApplication from '@/components/SendApplication.vue';
import ContectWithUs from '@/components/ContectWithUs.vue';
import ForPartners from '@/components/ForPartners.vue';
import Carousel from '@/components/Carousel.vue'
import Content from '@/components/Content.vue'
import Header from '@/components/Header.vue';
export default {
  components: {
    SendApplication,
    ContectWithUs,
    ForPartners,
    Carousel,
    Content,
    Header,
  }
}
</script>

<style>
</style>