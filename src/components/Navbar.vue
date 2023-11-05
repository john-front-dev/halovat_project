<template>
  <div class="w-full border-b pt-[141px]">
    <div class="flex justify-start items-center h-[91px] xl:container my-0 mx-auto">
      <div class="w-[80px] sm:w-[117px] sm:min-w-[117px] min-h-[53px] h-[53px] lg:ml-[72px] md:ml-[40px] sm:ml-[20px] ml-[5px]">
        <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
      </div>
      <ul class="flex items-center lg:ml-[272px] md:ml-[150px] sm:ml-[60px] ml-[10px] z-[50] list-none text-[#272727] sm:text-[16px] text-[14px] font-normal md:gap-[45px] sm:gap-[20px] gap-[10px]">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/aboutCompany">О компании</router-link></li>
          <li><router-link to="products">Продукция</router-link></li>
          <li>Партнёрам</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li{
    @apply cursor-pointer
}
li:active{
  @apply text-[#E31E25] underline;
}
</style>