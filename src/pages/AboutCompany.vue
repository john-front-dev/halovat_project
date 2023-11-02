<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="back-img flex justify-center items-end mb-[200px]">
      <div class=" bg-[#fff] flex justify-center items-center rounded-t-[37px] w-[378px] h-[145px] text-[#292F36] text-[50px] ">О компании</div>
    </div>
    <div class="flex justify-center items-center">

    </div>
    <SendApplication/>
  </div>
</template>

<script>
import SendApplication from '../components/SendApplication.vue'
export default {
  components:{
    SendApplication,
  }
}
</script>

<style scoped>
.back-img{
  background: url('../assets/back/4.png'), lightgray 50% / cover no-repeat;
  width: 100%;
  height: 356px;
  flex-shrink: 0;
}
</style>