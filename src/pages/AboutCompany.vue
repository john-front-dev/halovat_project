<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="back-img flex justify-center items-end mb-[100px] lg:mb-[200px]">
      <div class=" bg-[#fff] flex justify-center items-center rounded-t-[37px] w-[260px] h-[100px] lg:w-[378px] lg:h-[145px] text-[#292F36] text-[30px] lg:text-[50px] ">О компании</div>
    </div>
    <div class="flex flex-col justify-center items-center w-full">
      <div class="w-auto px-[20px] lg:px-0 lg:w-[655px]">
        <div class="flex flex-col justify-center items-start mb-[28px]">
          <h2>У нас сливаются мастерство и инновации.</h2>
          <p>С первых дней своего существования кондитерская фабрика «Халоват» заявила о своем стремлении к совершенству. В конце 2020 года прошло официальное открытие нового цеха, что стало знаковым событием в истории ООО "Халовати Сугд". Это позволило значительно расширить ассортимент продукции и поднять стандарты качества на новый уровень.</p>
        </div>
        <div class="flex flex-col justify-center items-start mb-[39px]">
          <p>Главным направлением деятельности предприятия является производство высококачественных кондитерских изделий. В ассортименте нашей продукции представлены следующие категории:</p>
          <ol class="list-decimal ml-6 mb-[50px]">
            <li>Конфеты</li>
            <li>Разнообразные виды печенья</li>
            <li>Пирожные</li>
            <li>Вафли</li>
            <li>Мармелады</li>
          </ol>
          <p>С первых дней своего существования кондитерская фабрика «Халоват» заявила о своем стремлении к совершенству. В конце 2020 года прошло официальное открытие нового цеха, что стало знаковым событием в истории ООО "Халовати Сугд". Это позволило значительно расширить ассортимент продукции и поднять стандарты качества на новый уровень.</p>
        </div>
        <div class="flex flex-col justify-center items-start mb-[206px]">
          <h2>Все для того, чтобы ваши вкусовые ожидания были превзойдены.</h2>
          <p class="mb-[50px]">Кондитерская фабрика "Халоват" строго соблюдает международные стандарты качества и безопасности продуктов питания. В 2022 году наша компания внедрила систему управления безопасностью пищевых продуктов, которая соответствует стандарту ISO 22000:2005/HACCP.</p>
          <p>Мы тщательно отбираем только лучшие ингредиенты,<br class="hidden md:block"> чтобы каждый продукт приносил непередаваемое удовольствие.</p>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row justify-center gap-[82px] items-center">
        <img class="w-[90%] rounded-[50px]" src="../assets/AboutCompany.png" alt="">
        <div class="w-auto lg:w-[518px]">
          <h3 class="mb-[11px] text-[#292F36] text-[50px] font-medium tracking-[1px] leading-[125%]">Что мы <br> производим?</h3>
          <span class="mb-[32px] text-[#4D5053] text-[22px] leading-[150%] tracking-[0.22px]">Пройдите чтобы посмотреть весь <br> ассортимент нашей продукции</span>
          <button @click="$router.push('/products')" class="mt-[15px] bg-[#E31E25] back fill-white active:bg-[#fff] active:fill-[#2F2F2F] text-[#fff] text-[20px] active:text-[#2F2F2F] font-semibold active:border-2 active:border-[#949494] rounded-md gap-[10px] px-[30px] py-[10px] flex justify-start items-center w-[255px] h-[75px]"><span class="ml-[34px]">Продукция</span><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="0 0 30 13"><path d="M29.5303 7.03033C29.8232 6.73744 29.8232 6.26256 29.5303 5.96967L24.7574 1.1967C24.4645 0.903806 23.9896 0.903806 23.6967 1.1967C23.4038 1.48959 23.4038 1.96447 23.6967 2.25736L27.9393 6.5L23.6967 10.7426C23.4038 11.0355 23.4038 11.5104 23.6967 11.8033C23.9896 12.0962 24.4645 12.0962 24.7574 11.8033L29.5303 7.03033ZM0 7.25H29V5.75H0V7.25Z"/></svg></span></button>
        </div>
      </div>
    </div>
    <SendApplication/>
  </div>
</template>

<script>
import SendApplication from '../components/SendApplication.vue'
export default {
  components:{
    SendApplication,
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>
h2{
  @apply text-[#4A1D1F] text-[25px] leading-[37.5px] mb-[50px] tracking-[0.25px]
}
p{
  @apply text-[#2F2F2F] text-[22px] leading-[37.5px] tracking-[0.25px]
}
li{
  @apply text-[#2F2F2F] text-[22px] leading-[150%] tracking-[0.25px]
}
.back{
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}
.back-img{
  background: url('../assets/back/2.jpg'), lightgray 50% / cover no-repeat;
  width: 100%;
  height: 356px;
  flex-shrink: 0;
}
</style>