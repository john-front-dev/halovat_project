<template>
  <div>
    <Header @goToapplication="scrollToApplication()"/>
    <Carousel/>
    <Content/>
    <ForPartners/>
    <ContectWithUs/>
    <SendApplication id="application"/>
    <OurRchievements/>
  </div>
</template>

<script>
import OurRchievements from '@/components/OurRchievements.vue';
import SendApplication from '@/components/SendApplication.vue';
import ContectWithUs from '@/components/ConnectWithUs.vue';
import ForPartners from '@/components/ForPartners.vue';
import Carousel from '@/components/Carousel.vue'
import Content from '@/components/Content.vue'
import Header from '@/components/Header.vue';
export default {
  components: {
    OurRchievements,
    SendApplication,
    ContectWithUs,
    ForPartners,
    Carousel,
    Content,
    Header,
  },
  methods: {
    scrollToApplication() {
      const applicationElement = document.getElementById('application');
      if (applicationElement) {
        applicationElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>

<style>
</style>