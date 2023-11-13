<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="flex flex-col lg:flex-row justify-center items-start sm:items-center relative">
      <div class="text-[#272727] lg:w-[636px] mt-[20px] lg:mt-[100px] ml-[25px] sm:ml-[56px] xl:ml-[136px]">
        <h2 class="text-[22px] sm:text-[30px] xl:text-[44px] font-semibold">
          Откройте вкусовые грани <br> с Халоват: всё лучшее из <br> мира сладкого!
        </h2>
        <p class="text-[18px] lg:text-[22px] mt-3 lg:mt-5 sm:w-[500px]">
          Мы предлагаем широкий ассортимент высококачественных сладких угощений, включая шоколадные конфеты, вафли, разнообразные виды печенья, мармелады и другие кондитерские изделия, созданные с любовью к деталям и вниманием к качеству.
        </p>
        <div class="flex justify-start items-center mt-[20px] lg:mt-[33px]">
          <button @click="$emit('goToapplication')" class="flex active:bg-[#fff] whitespace-nowrap active:text-[#2F2F2F] active:fill-[#2F2F2F] fill-[#FFFBFB] items-center justify-center gap-2 rounded-[6px] bg-[#E31E25] uppercase border border-[#949494] text-[#FFFBFB] leading-4 w-[160px] h-[45px] lg:h-[75px] lg:w-[283px] text-[14px] lg:text-[24px] font-semibold mr-[28px]">
            Оставить заявку <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.79289 1.29289C3.18342 0.902369 3.81658 0.902369 4.20711 1.29289L9.41421 6.5L4.20711 11.7071C3.81658 12.0976 3.18342 12.0976 2.79289 11.7071C2.40237 11.3166 2.40237 10.6834 2.79289 10.2929L6.58579 6.5L2.79289 2.70711C2.40237 2.31658 2.40237 1.68342 2.79289 1.29289Z"/></svg>
          </button>
          <button @click="$router.push('products')" class="active:bg-[#E31E25] active:text-[#FFFBFB] active:fill-[#FFFBFB] fill-[#272727] flex gap-2 justify-center items-center p-4 uppercase rounded-[6px] border border-[#949494] text-[#272727] w-[160px] h-[45px] lg:h-[75px] lg:w-[283px] text-[14px] lg:text-[24px] font-semibold">
            Продукция <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 1.29289C3.68342 0.902369 4.31658 0.902369 4.70711 1.29289L9.91421 6.5L4.70711 11.7071C4.31658 12.0976 3.68342 12.0976 3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929L7.08579 6.5L3.29289 2.70711C2.90237 2.31658 2.90237 1.68342 3.29289 1.29289Z"/></svg>
          </button>
        </div>
      </div>
      <div class="flex justify-center w-full lg:justify-center items-center lg:ml-[71px] mt-[40px] xl:mt-0">
        <div class="back lg:w-[1011px] min-w-[300px] w-[350px] h-[400px] lg:h-[1019px] absolute left-1 sm:left-60 lg:left-auto lg:right-0"></div>
          <img class="z-50 w-[300px] h-[200px] md:w-[400px] md:min-w-[400px] md:h-[250px] xl:w-[500px] xl:h-[350px]" :src="currentImage.url" alt="">
        </div>
    </div>
    <div class="lg:inline-flex justify-center items-center ml-[25px] sm:ml-[56px] lg:ml-[10px] xl:ml-[93px] mt-[60px] lg:mt-[186px] h-[128px] mr-[25px] sm:mr-[56px] lg:mr-[10px] xl:mr-[96px] mb-[150px] lg:mb-0">
      <h2 class="text-[#4A1D1F] text-[20px] sm:text-[26px] lg:text-[36px] font-bold border-b w-full border-[#4A1D1F] mb-4 pb-4 lg:border-none lg:mb-0 lg:pb-0">Только лучшее для Вас</h2>
      <div class="hidden lg:block border-r border-[#4A1D1F] h-full mx-[40px]"></div>
      <p class="text-[#272727] text-[18px] lg:text-[22px] lg:whitespace-nowrap">Мы тщательно отбираем только лучшие ингредиенты, <br class="hidden lg:flex">чтобы каждый продукт приносил непередаваемое удовольствие. <br class="hidden lg:flex"> Все для того, чтобы Ваши вкусовые ожидания были превзойдены.</p>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/product1.png'
import img2 from '../assets/product2.png'
import img3 from '../assets/product3.png'
export default {
  data() {
    return{
      images:[
        {url:img1},
        {url:img2},
        {url:img3},
      ],
      currentImageIndex: 0,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
  methods: {
    changeImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },
  mounted() {
    setInterval(this.changeImage, 5000); 
  },
}
</script>

<style scoped>
.back{
  flex-shrink: 0;
  border-radius: 1019px;
  opacity: 0.8;
  z-index: -2;
  background: rgba(227, 30, 37, 0.30);
  filter: blur(239.5px);
}
img {
  overflow: hidden;
}
 img {
  opacity: 1;
  transition: opacity 1s ease; 
  z-index: 1;
}
</style>