<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="back-img flex justify-center items-end mb-[200px]">
      <div class=" bg-[#fff] flex justify-center items-center rounded-t-[37px] w-[378px] h-[145px] text-[#292F36] text-[50px] ">Продукция</div>
    </div>
    <div class="grid xl:grid-cols-3 grid-cols-2 grid-rows-3 xl:px-[157px] px-[10vw] mb-[85px]">
      <div v-for="img in images" :key="img.id" class="flex flex-col justify-center items-center">
        <img :src="img.url" class="w-[80%]" alt="">
        <div class="flex flex-col justify-start items-start px-[27px] text-[#4A1D1F] text-[20px] font-semibold mt-[21px] mb-[87px]">
          <span>{{ img.name }}</span>
          <svg class="mt-[5px] mb-[8px]" xmlns="http://www.w3.org/2000/svg" width="275" height="2" viewBox="0 0 275 2" fill="none"><path d="M0 1L274.988 0.999976" stroke="#DEDDDD"/></svg>
          <span>{{ img.type }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-5 mb-[110px]">
      <div class="rounded-[100px] border-[#BCBCBC] border cursor-pointer">
        <svg class="m-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.22 12.7199C8.07931 12.5793 8.00018 12.3887 8 12.1899V11.8099C8.0023 11.6114 8.08112 11.4216 8.22 11.2799L13.36 6.14985C13.4539 6.0552 13.5817 6.00195 13.715 6.00195C13.8483 6.00195 13.9761 6.0552 14.07 6.14985L14.78 6.85985C14.8741 6.95202 14.9271 7.07816 14.9271 7.20985C14.9271 7.34154 14.8741 7.46769 14.78 7.55985L10.33 11.9999L14.78 16.4399C14.8747 16.5337 14.9279 16.6615 14.9279 16.7949C14.9279 16.9282 14.8747 17.056 14.78 17.1499L14.07 17.8499C13.9761 17.9445 13.8483 17.9978 13.715 17.9978C13.5817 17.9978 13.4539 17.9445 13.36 17.8499L8.22 12.7199Z" fill="#E31E25"/></svg>
      </div>
      <div class="rounded-[100px] w-[64px] h-[64px] flex justify-center items-center border-[#E31E25] bg-[#E31E25] border cursor-pointer">
        <span class="text-[18px] text-white font-extrabold">3</span>
      </div>
      <div class="rounded-[100px] border-[#BCBCBC] border cursor-pointer">
        <svg class="m-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.78 12.7199C15.9207 12.5793 15.9998 12.3887 16 12.1899V11.8099C15.9977 11.6114 15.9189 11.4216 15.78 11.2799L10.64 6.14985C10.5461 6.0552 10.4183 6.00195 10.285 6.00195C10.1517 6.00195 10.0239 6.0552 9.93 6.14985L9.22 6.85985C9.12594 6.95202 9.07293 7.07816 9.07293 7.20985C9.07293 7.34154 9.12594 7.46769 9.22 7.55985L13.67 11.9999L9.22 16.4399C9.12534 16.5337 9.0721 16.6615 9.0721 16.7949C9.0721 16.9282 9.12534 17.056 9.22 17.1499L9.93 17.8499C10.0239 17.9445 10.1517 17.9978 10.285 17.9978C10.4183 17.9978 10.5461 17.9445 10.64 17.8499L15.78 12.7199Z" fill="#E31E25"/></svg>
      </div>
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
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        
      ]
    }
  },
  mounted() {
    window.scrollTo(0,0)
  },
}
</script>

<style scoped>
.back-img{
  background: url('../assets/back/3.png'), lightgray 50% / cover no-repeat;
  width: 100%;
  height: 356px;
  flex-shrink: 0;
}
</style>