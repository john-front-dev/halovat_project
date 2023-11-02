<template>
  <div class="w-full border-b pt-[141px]">
    <div class="flex justify-start items-center h-[91px] xl:container my-0 mx-auto">
      <div class="w-[117px] min-w-[117px] min-h-[53px] h-[53px] ml-[72px]">
        <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
      </div>
      <ul class="flex items-center ml-[272px] z-[50] list-none text-[#272727] text-[16px] font-normal gap-[45px]">
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