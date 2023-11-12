<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="back-img w-full h-[200px] md:h-[300px] lg:h-[356px] flex justify-center items-end mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[200px]">
      <div class="bg-[#fff] flex justify-center items-center rounded-t-[15px] sm:rounded-t-[27px] md:rounded-t-[37px] w-[140px] h-[50px] sm:w-[200px] sm:h-[70px] md:w-[260px] md:h-[100px] lg:w-[378px] lg:h-[145px] text-[#292F36] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[50px]">Продукция</div>
    </div>
    <div class="grid xl:grid-cols-3 grid-cols-2 grid-rows-3 xl:px-[157px] gap-[10px] lg:px-[10vw] lg:mb-[85px] mb-[30px]">
      <div v-for="img in paginatedImages" :key="img.id" class="flex flex-col justify-center items-center">
        <img :src="img.url" class="w-[80%]" alt="">
        <div class="flex flex-col w-[80%] whitespace-nowrap justify-start items-start lg:px-[27px] text-[#4A1D1F] mt-[21px] mb-[87px]">
          <span class="font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">{{ img.name }}</span>
          <svg class="mt-[5px] mb-[8px] w-[100%]" xmlns="http://www.w3.org/2000/svg" width="275" height="2" viewBox="0 0 275 2" fill="none"><path d="M0 1L274.988 0.999976" stroke="#DEDDDD"/></svg>
          <span class="font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">{{ img.type }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-5 mb-[110px]">
      <button :disabled="page == 1" @click="goToPreviousPage" class="w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex justify-center items-center disabled:cursor-not-allowed rounded-[100px] border-[#BCBCBC] border active:border-[#E31E25] fill-[#E31E25] active:fill-white active:bg-[#E31E25] cursor-pointer">
        <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M8.22 12.7199C8.07931 12.5793 8.00018 12.3887 8 12.1899V11.8099C8.0023 11.6114 8.08112 11.4216 8.22 11.2799L13.36 6.14985C13.4539 6.0552 13.5817 6.00195 13.715 6.00195C13.8483 6.00195 13.9761 6.0552 14.07 6.14985L14.78 6.85985C14.8741 6.95202 14.9271 7.07816 14.9271 7.20985C14.9271 7.34154 14.8741 7.46769 14.78 7.55985L10.33 11.9999L14.78 16.4399C14.8747 16.5337 14.9279 16.6615 14.9279 16.7949C14.9279 16.9282 14.8747 17.056 14.78 17.1499L14.07 17.8499C13.9761 17.9445 13.8483 17.9978 13.715 17.9978C13.5817 17.9978 13.4539 17.9445 13.36 17.8499L8.22 12.7199Z"/></svg>
      </button>
      <div class="rounded-[100px] w-[48px] h-[48px] md:w-[64px] mx-2 lg:mx-0 md:h-[64px] flex justify-center items-center border-[#E31E25] bg-[#E31E25] border cursor-pointer">
        <span class="text-[14px] md:text-[18px] text-white font-extrabold">{{ page }}</span>
      </div>
      <button :disabled="page == 3" @click="goToNextPage" class="w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex justify-center items-center disabled:cursor-not-allowed rounded-[100px] border-[#BCBCBC] border active:border-[#E31E25] fill-[#E31E25] active:fill-white active:bg-[#E31E25] cursor-pointer">
        <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M15.78 12.7199C15.9207 12.5793 15.9998 12.3887 16 12.1899V11.8099C15.9977 11.6114 15.9189 11.4216 15.78 11.2799L10.64 6.14985C10.5461 6.0552 10.4183 6.00195 10.285 6.00195C10.1517 6.00195 10.0239 6.0552 9.93 6.14985L9.22 6.85985C9.12594 6.95202 9.07293 7.07816 9.07293 7.20985C9.07293 7.34154 9.12594 7.46769 9.22 7.55985L13.67 11.9999L9.22 16.4399C9.12534 16.5337 9.0721 16.6615 9.0721 16.7949C9.0721 16.9282 9.12534 17.056 9.22 17.1499L9.93 17.8499C10.0239 17.9445 10.1517 17.9978 10.285 17.9978C10.4183 17.9978 10.5461 17.9445 10.64 17.8499L15.78 12.7199Z"/></svg>
      </button>
    </div>
  </div>
</template>


<script>
import img1 from "../assets/1.png"
export default {
  data() {
    return{
      page: 1,
      perPage: 12,
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
        
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        {url:img1,name:'222',type:'Мармеладные дольки'},
        
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        {url:img1,name:'Ананас',type:'3333'},
        
      ]
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.images.length / this.perPage);
    },
    paginatedImages() {
      const startIndex = (this.page - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.images.slice(startIndex, endIndex);
    },
  },
  methods: {
    goToPreviousPage() {
      if (this.page > 1) {
        window.scrollTo(0,0)
        this.page--;
      }
    },
    goToNextPage() {
      if (this.page < this.pageCount) {
        window.scrollTo(0,0)
        this.page++;
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

<style scoped>
.back-img{
  background: url('../assets/back/3.png'), lightgray 50% / cover no-repeat;
}
</style>