<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="back-img w-full h-[200px] md:h-[300px] lg:h-[356px] flex justify-center items-end mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[200px]">
      <div class="bg-[#fff] flex justify-center items-center rounded-t-[15px] sm:rounded-t-[27px] md:rounded-t-[37px] w-[140px] h-[50px] sm:w-[200px] sm:h-[70px] md:w-[260px] md:h-[100px] lg:w-[378px] lg:h-[145px] text-[#292F36] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[50px]">Продукция</div>
    </div>
    <div class="flex w-full justify-center items-center" v-for="category in paginatedCategories" :key="category.id">
      <h2 class="text-[14px] sm:text-[22px] lg:text-[30px] text-[#292F36] mb-12">{{ category.name }}</h2>
    </div>
    <div v-if="page >= 1 && page <= 5" class="grid xl:grid-cols-3 grid-cols-2 grid-rows-3 xl:px-[157px] gap-[10px] lg:px-[10vw] lg:mb-[85px] mb-[30px]">
      <div v-for="img in getPageData(page)" :key="img.id" class="flex flex-col justify-start items-center">
        <img :src="img.url" class="w-[80%] object-contain lg:h-[450px] sm:-[350px] h-[250px]" alt="">
        <div class="flex flex-col w-[80%]  justify-start items-start lg:px-[27px] text-[#4A1D1F] mt-[21px] mb-[87px]">
          <span class="font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:h-[60px] flex  items-center">{{ img.name }}</span>
          <span class="font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">{{ img.filling }}</span>
          <svg class="mt-[5px] mb-[8px] w-[100%]" xmlns="http://www.w3.org/2000/svg" width="275" height="2" viewBox="0 0 275 2" fill="none"><path d="M0 1L274.988 0.999976" stroke="#DEDDDD"/></svg>
          <span class="font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">{{ img.type }}</span>
          <span class="font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">{{ img.weight }}</span>
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
      <button :disabled="page == 5" @click="goToNextPage" class="w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex justify-center items-center disabled:cursor-not-allowed rounded-[100px] border-[#BCBCBC] border active:border-[#E31E25] fill-[#E31E25] active:fill-white active:bg-[#E31E25] cursor-pointer">
        <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M15.78 12.7199C15.9207 12.5793 15.9998 12.3887 16 12.1899V11.8099C15.9977 11.6114 15.9189 11.4216 15.78 11.2799L10.64 6.14985C10.5461 6.0552 10.4183 6.00195 10.285 6.00195C10.1517 6.00195 10.0239 6.0552 9.93 6.14985L9.22 6.85985C9.12594 6.95202 9.07293 7.07816 9.07293 7.20985C9.07293 7.34154 9.12594 7.46769 9.22 7.55985L13.67 11.9999L9.22 16.4399C9.12534 16.5337 9.0721 16.6615 9.0721 16.7949C9.0721 16.9282 9.12534 17.056 9.22 17.1499L9.93 17.8499C10.0239 17.9445 10.1517 17.9978 10.285 17.9978C10.4183 17.9978 10.5461 17.9445 10.64 17.8499L15.78 12.7199Z"/></svg>
      </button>
    </div>
  </div>
</template>


<script>
import img1 from "../assets/catalog/1.jpg"
import img2 from "../assets/catalog/2.jpg"
import img3 from "../assets/catalog/3.jpg"
import img4 from "../assets/catalog/4.jpg"
import img5 from "../assets/catalog/5.jpg"
import img6 from "../assets/catalog/6.jpg"
import img7 from "../assets/catalog/7.jpg"
import img8 from "../assets/catalog/8.jpg"
import img9 from "../assets/catalog/9.jpg"
import img10 from "../assets/catalog/10.jpg"
import img11 from "../assets/catalog/11.jpg"
import img12 from "../assets/catalog/12.jpg"
import img13 from "../assets/catalog/13.jpg"
import img14 from "../assets/catalog/14.jpg"
import img15 from "../assets/catalog/15.jpg"
import img16 from "../assets/catalog/16.jpg"
import img17 from "../assets/catalog/17.jpg"
import img18 from "../assets/catalog/18.jpg"
import img19 from "../assets/catalog/19.jpg"
import img20 from "../assets/catalog/20.jpg"
import img21 from "../assets/catalog/21.jpg"
import img22 from "../assets/catalog/22.jpg"
import img23 from "../assets/catalog/23.jpg"
import img24 from "../assets/catalog/24.jpg"
import img25 from "../assets/catalog/25.jpg"
import img26 from "../assets/catalog/26.jpg"
import img27 from "../assets/catalog/27.jpg"
import img28 from "../assets/catalog/28.jpg"
import img29 from "../assets/catalog/29.jpg"
import img30 from "../assets/catalog/30.jpg"
import img31 from "../assets/catalog/31.jpg"
import img32 from "../assets/catalog/32.jpg"
import img33 from "../assets/catalog/33.jpg"
import img34 from "../assets/catalog/34.jpg"
import img35 from "../assets/catalog/35.jpg"
import img36 from "../assets/catalog/36.jpg"
import img37 from "../assets/catalog/37.jpg"
import img38 from "../assets/catalog/38.jpg"
import img39 from "../assets/catalog/39.jpg"
import img40 from "../assets/catalog/40.jpg"
import img41 from "../assets/catalog/41.jpg"
export default {
  data() {
    return{
      page: 1,
      itemsPerPage: 1,
      categories: [
        {name:'ШОКОЛАДНАЯ КОЛЛЕКЦИЯ'},
        {name:'МАРМЕЛАДНАЯ КОЛЛЕКЦИЯ'},
        {name:'ПЕЧЕНЬЕ'},
        {name:'ПЕЧЕНЬЕ САХАРНОЕ'},
        {name:'ПЕЧЕНЬЕ САХАРНОЕ С МАРМЕЛАДОМ'},
      ],
      firstPage: [
        {url:img1,name:'Трюфель',type:'В индивидуальной упаковке флоу-пак',weight:'800гр'},
        {url:img2,name:'Трюфель',type:'В индивидуальной упаковке флоу-пак',weight:'2кг'},
        {url:img3,name:'Трюфель',type:'В фольгированной упаковке фасованный в флоу-пак',weight:'1кг | 4кг'},
        {url:img4,name:'Трюфель Сабантуй',type:'В фольгированной упаковке фасованный в флоу-пак',weight:'1кг'},
        {url:img5,name:'Трюфель Сабантуй',type:'В фольгированной упаковке фасованный в флоу-пак',weight:'2кг'},
        {url:img6,name:'Трюфель Сабантуй GOLD',type:'В фольгированной упаковке фасованный в флоу-пак',weight:'1кг | 4кг | 6кг'},
        {url:img7,name:'Угости Город',filling: 'Вафли со вкусом карамели',type:'В фольгированной упаковке фасованный в флоу-пак',weight:'1кг | 3,6кг'},
        {url:img8,name:'Угости Город',filling: 'Вафли со вкусом шоколада',type:'В фольгированной упаковке фасованный в флоу-пак',weight:'1кг | 3,6кг'},
        {url:img9,name:'Медвежонок',filling:'Конфеты шоколадные', type:'Мармеладные дольки',weight:'670гр | 3кг'},
        {url:img10,name:'Медвежонок',filling:'Конфеты шоколадные',type:'Мармеладные дольки',weight:'670гр | 3кг'},
        {url:img11,name:'Медвежонок',filling:'Конфеты шоколадные',type:'Мармеладные дольки',weight:'670гр | 3кг'},
        {url:img12,name:'Медвежонок',filling:'Конфеты шоколадные',type:'Мармеладные дольки',weight:'670гр | 3кг'},
      ],
      secondPage: [
        {url:img13,name:'Мармелад в коробке',type:'В бумажной основе фасованный в флоу-пак',weight:'800 гр'},
        {url:img14,name:'Мармелад Ассорти ',type:'В фольгированной упаковке фасованный в флоу-пак',weight:'1кг | 3кг'},
        {url:img15,name:'Мармелад со вкусом клубники',weight:'2кг'},
        {url:img16,name:'Мармелад со вкусом арбуза',weight:'2кг'},
        {url:img17,name:'Мармелад со вкусом ананаса',weight:'2кг'},
      ],
      thirdPage: [
        {url:img18,name:'Печенье конфетка',weight:'1,5кг'},
        {url:img19,name:'Печенье конфетка',weight:'1,5кг'},
        {url:img20,name:'Печенье ромашка',weight:'1,5кг'},
        {url:img21,name:'Печенье ромашка',weight:'1,5кг'},
        {url:img22,name:'Печенье Фантазия',weight:'1,5кг'},
        {url:img23,name:'Печенье Фантазия',weight:'1,5кг'},
        {url:img24,name:'Печенье апельсин',weight:'1,5кг'},
        {url:img25,name:'Печенье апельсин',weight:'1,5кг'},
        {url:img26,name:'Печенье слоеное',weight:'900г'},
        {url:img27,name:'Печенье слоеное',weight:'900г'},
        {url:img28,name:'Печенье суфле',weight:'2,7кг'},
        {url:img29,name:'Печенье суфле',weight:'2,7кг'},
        {url:img30,name:'Топленое молоко',weight:'3кг'},
        {url:img31,name:'Добрый',weight:'3кг'},
        {url:img32,name:'Машинка',weight:'3кг'},
        {url:img33,name:'Слад-Ко',weight:'3кг'},
      ],
      forthPage:[
        {url:img34,name:'Маша',weight:'3кг'},
        {url:img35,name:'Мобилка',weight:'3кг'},
        {url:img36,name:'Какос экзотика',weight:'3кг'},
        {url:img37,name:'Сахарок',weight:'3кг'},
      ],
      fifthPage: [
        {url:img38,name:'Печенья с мармеладом',weight:'2,7кг'},
        {url:img39,name:'Печенья с мармеладом',weight:'2,7кг'},
        {url:img40,name:'Печенья с мармеладом',weight:'2,7кг'},
        {url:img41,name:'Печенья с мармеладом',weight:'2,7кг'},
      ],
    }
  },
  computed: {
    paginatedCategories() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.categories.slice(startIndex, endIndex);
    },
  },
  methods: {
    getPageData(page) {
      const pagesData = [this.firstPage, this.secondPage, this.thirdPage, this.forthPage, this.fifthPage];
      return pagesData[page - 1] || [];
    },
    goToPreviousPage() {
      if (this.page > 1) {
        window.scrollTo(0, 0);
        this.page--;
      }
    },
    goToNextPage() {
      if (this.page < 5) {
        window.scrollTo(0, 0);
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