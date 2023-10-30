<template>
  <div class="w-full border-b">
    <div class="flex justify-start items-center h-[91px] xl:container my-0 mx-auto">
      <div class="w-[117px] min-w-[117px] min-h-[53px] h-[53px] ml-[72px]">
          <img src="../assets/logo.png" alt="">
      </div>
      <ul class="flex items-center ml-[272px] list-none text-[#272727] text-[16px] font-normal gap-[45px]">
          <li><router-link to="/">Главная</router-link></li>
          <li>О компании</li>
          <li>Продукция</li>
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
</style>