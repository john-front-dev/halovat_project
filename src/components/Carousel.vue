<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="flex justify-between items-start px-[54px] gap-12 mt-[117px]">
      <button class="w-[80px] h-[377px] flex justify-center items-center rounded-[30px] border border-[#4A1D1F] mt-[39px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12H3.67004" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="flex flex-col justify-center items-start mb-[72px]" v-for="img in images" :key="img.id">
        <img :src="img.url" alt="">
        <div class="flex flex-col justify-start items-start px-[27px] text-[#4A1D1F] text-[20px] font-semibold mt-[21px]">
          <span>{{ img.name }}</span>
          <svg class="mt-[5px] mb-[8px]" xmlns="http://www.w3.org/2000/svg" width="275" height="2" viewBox="0 0 275 2" fill="none"><path d="M0 1L274.988 0.999976" stroke="#DEDDDD"/></svg>
          <span>{{ img.type }}</span>
        </div>
      </div>
      <button class="w-[80px] h-[377px] flex justify-center items-center rounded-[30px] border border-[#4A1D1F] mt-[39px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 12H20.33" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
    <div class="flex justify-center items-center w-full mb-[100px]">
      <router-link to="products">
        <div class="inline-flex justify-center items-center cursor-pointer hover:bg-[#E31E25] hover:border-[E31E25] hover:text-[#FFFBFB] hover:fill-[#FFFBFB] w-[255px] h-[75px] gap-[10px] rounded-[6px] border border-[#4A1D1F] text-[#4A1D1F] text-[20px]">
          <span>Посмотреть всё</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="0 0 30 13" ><path d="M29.5303 7.03033C29.8232 6.73744 29.8232 6.26256 29.5303 5.96967L24.7574 1.1967C24.4645 0.903806 23.9896 0.903806 23.6967 1.1967C23.4038 1.48959 23.4038 1.96447 23.6967 2.25736L27.9393 6.5L23.6967 10.7426C23.4038 11.0355 23.4038 11.5104 23.6967 11.8033C23.9896 12.0962 24.4645 12.0962 24.7574 11.8033L29.5303 7.03033ZM0 7.25H29V5.75H0V7.25Z"/></svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/1.png"
export default {
  data() {
    return{
      images:[
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
      ]
    }
  },
}
</script>

<style scoped>
button{
  @apply active:bg-[#E31E25] active:fill-[#FFFFFF] active:stroke-white stroke-[#4A1D1F]
}
</style>