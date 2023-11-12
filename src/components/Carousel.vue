<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="flex justify-between items-start px-[20px] lg:px-[54px] gap-4 lg:gap-12 2xl:gap-20 mt-[50px] lg:mt-[117px]">
      <button @click="moveContainer('left')" class="w-[80px] min-w-[40px] sm:min-w-[60px] lg:min-w-[80px] h-[150px] lg:h-[377px] flex justify-center items-center rounded-[30px] border border-[#4A1D1F] mt-[45px] sm:mt-[70px] lg:mt-[39px] outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12H3.67004" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="flex flex-row justify-start items-center gap-[20px] sm:gap-[30px] xl:gap-[45px] 2xl:gap-[60px] max-w-full overflow-auto" ref="allProducts">
        <div v-for="img in images" :key="img.id" class="w-[200px] h-[300px] md:w-[250px] md:h-[360px] lg:w-[455px] lg:h-[510px] mb-[72px]" >
          <img :src="img.url" alt="" class="w-[160px] h-[220px] sm:w-[180px] sm:h-[250px] md:w-[220px] md:h-[280px] lg:w-[328px] lg:h-[455px]">
          <div class="flex flex-col justify-start items-start px-2 lg:px-[27px] text-[#4A1D1F] text-[14px] lg:text-[20px] font-semibold mt-3 lg:mt-[21px]">
            <span>{{ img.name }}</span>
            <svg class="h-[2px] w-[160px] sm:w-[160px] md:w-[200px] lg:w-[275px] mt-[5px] mb-[8px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 2" fill="none"><path d="M0 1L274.988 0.999976" stroke="#DEDDDD"/></svg>
            <span>{{ img.type }}</span>
          </div>
        </div>
      </div>
      <button @click="moveContainer('right')" class="w-[80px] min-w-[40px] sm:min-w-[60px] lg:min-w-[80px] h-[150px] lg:h-[377px] flex justify-center items-center rounded-[30px] border border-[#4A1D1F] mt-[45px] sm:mt-[70px] lg:mt-[39px] outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 12H20.33" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
    <div class="flex justify-center items-center w-full mb-[100px]">
      <router-link to="products">
        <div class="inline-flex justify-center items-center cursor-pointer hover:bg-[#E31E25] hover:border-[E31E25] hover:text-[#FFFBFB] hover:fill-[#FFFBFB] lg:w-[255px] lg:h-[75px] sm:w-[210px] sm:h-[60px] w-[170px] h-[45px] text-[14px] sm:text-[16px] gap-[10px] rounded-[6px] border border-[#4A1D1F] text-[#4A1D1F] lg:text-[20px]">
          <span>Посмотреть всё</span>
          <svg class="w-[20px] h-[7px] sm:w-[25px] sm:h-[10px] lg:w-[30px] lg:h-[13px]" xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="0 0 30 13" ><path d="M29.5303 7.03033C29.8232 6.73744 29.8232 6.26256 29.5303 5.96967L24.7574 1.1967C24.4645 0.903806 23.9896 0.903806 23.6967 1.1967C23.4038 1.48959 23.4038 1.96447 23.6967 2.25736L27.9393 6.5L23.6967 10.7426C23.4038 11.0355 23.4038 11.5104 23.6967 11.8033C23.9896 12.0962 24.4645 12.0962 24.7574 11.8033L29.5303 7.03033ZM0 7.25H29V5.75H0V7.25Z"/></svg>
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
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
        {url:img1,name:'Ананас',type:'Мармеладные дольки'},
      ]
    }
  },
  methods: {
    moveContainer(direction) {
      const container = this.$refs.allProducts;
      if (container) {
        let scrollAmount = 200;
        if (window.innerWidth > 900) scrollAmount = 400
        const currentScroll = container.scrollLeft;

        if (direction === 'left') {
          container.scrollTo({
            left: currentScroll - scrollAmount,
            behavior: 'smooth'
          });

          this.isScrollingLeft = true;
          this.isScrollingRight = false;
        } else if (direction === 'right') {
          container.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth',
          });

          this.isScrollingLeft = false;
          this.isScrollingRight = true;
        }
      }
    },
  }
}
</script>

<style scoped>
button{
  @apply active:bg-[#E31E25] active:fill-[#FFFFFF] active:stroke-white stroke-[#4A1D1F]
}
</style>