<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="back-img object-cover w-full h-[200px] md:h-[300px] lg:h-[356px] flex justify-center items-end mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[200px]">
      <div class="bg-[#fff] flex justify-center items-center rounded-t-[15px] sm:rounded-t-[27px] md:rounded-t-[37px] w-[140px] h-[50px] sm:w-[200px] sm:h-[70px] md:w-[260px] md:h-[100px] lg:w-[378px] lg:h-[145px] text-[#292F36] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[50px]">Партнёрам</div>
    </div>
    <ForPartners/>
    <ConnectWithUs/>
    <SendApplication/>
    <OurRchievements/>
  </div>
</template>

<script>
import ConnectWithUs from '../components/ConnectWithUs.vue'
import ForPartners from "../components/ForPartners.vue"
import SendApplication from '../components/SendApplication.vue'
import OurRchievements from '../components/OurRchievements.vue';
export default {
  components: {
    OurRchievements,
    SendApplication,
    ForPartners,
    ConnectWithUs,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>

<style scoped>
.back-img{
  background: url('../assets/back/4.png'), lightgray 50% / cover no-repeat;
}
</style>