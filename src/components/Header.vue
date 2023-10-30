<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="flex relative">
      <div class="text-[#272727] w-[636px] mt-[100px] ml-[136px]">
        <h2 class="text-[44px] font-semibold">
          Откройте вкусовые грани <br> с Халоват: всё лучшее из <br> мира сладкого!
        </h2>
        <p class="text-[22px] mt-5">
          Мы предлагаем широкий ассортимент высококачественных сладких угощений, включая шоколадные конфеты, вафли, разнообразные виды печенья, мармелады и другие кондитерские изделия, созданные с любовью к деталям и вниманием к качеству.
        </p>
        <div class="flex justify-start items-center mt-[33px]">
          <button class="flex active:bg-[#fff] active:text-[#2F2F2F] active:fill-[#2F2F2F] fill-[#FFFBFB] items-center justify-center p-4 gap-2 rounded-[6px] bg-[#E31E25] uppercase border border-[#949494] text-[#FFFBFB] leading-4 h-[75px] w-[283px] text-[24px] font-semibold mr-[28px]">
            Оставить заявку <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.79289 1.29289C3.18342 0.902369 3.81658 0.902369 4.20711 1.29289L9.41421 6.5L4.20711 11.7071C3.81658 12.0976 3.18342 12.0976 2.79289 11.7071C2.40237 11.3166 2.40237 10.6834 2.79289 10.2929L6.58579 6.5L2.79289 2.70711C2.40237 2.31658 2.40237 1.68342 2.79289 1.29289Z"/></svg>
          </button>
          <button class="active:bg-[#E31E25] active:text-[#FFFBFB] active:fill-[#FFFBFB] fill-[#272727] w-[230px] h-[75px] flex gap-2 justify-center items-center p-4 uppercase rounded-[6px] border border-[#949494] text-[#272727] text-[24px] font-semibold">
            Продукция <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 1.29289C3.68342 0.902369 4.31658 0.902369 4.70711 1.29289L9.91421 6.5L4.70711 11.7071C4.31658 12.0976 3.68342 12.0976 3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929L7.08579 6.5L3.29289 2.70711C2.90237 2.31658 2.90237 1.68342 3.29289 1.29289Z"/></svg>
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center ml-[71px]">
        <div class="back absolute right-0"></div>
          <img class="z-50" src="../assets/product1.png" alt="">
        </div>
    </div>
    <div class="inline-flex justify-center items-center ml-[93px] mt-[186px] h-[128px] mr-[96px]">
      <h2 class="text-[#4A1D1F] text-[36px] font-bold ">Только лучшее для Вас</h2>
      <div class="border-r border-[#4A1D1F] h-full mx-[40px]"></div>
      <p class="text-[#272727] text-[22px] whitespace-nowrap">Мы тщательно отбираем только лучшие ингредиенты, <br>чтобы каждый продукт приносил непередаваемое удовольствие. <br> Все для того, чтобы Ваши вкусовые ожидания были превзойдены.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.back{
  width: 1011px;
  height: 1019px;
  flex-shrink: 0;
  border-radius: 1019px;
  opacity: 0.8;
  background: rgba(227, 30, 37, 0.30);
  filter: blur(239.5px);
}
</style>