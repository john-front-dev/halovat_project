<template>
  <div class="back h-auto pb-[60px] lg:pb-0 lg:h-[593px]">
    <div class="2xl:container my-0 mx-auto">
      <div class="flex flex-col justify-center items-center">
        <div class="my-[51px]">
          <h2 class="text-[#4A1D1F] text-[22px] sm:text-[30px] lg:text-[44px] font-medium">Как с нами связаться</h2>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-[0px] lg:gap-[50px]">
          <div class="Block">
            <svg class="w-[62px] h-[61px] lg:w-[82px] lg:h-[81px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 81" fill="none"><path d="M25.7296 29.2935C30.8168 43.1714 36.0834 48.7085 49.4815 54.6063L43.6751 62.7609C28.2899 55.3951 20.6268 42.9788 17.0178 33.2893L25.7296 29.2935Z" fill="#4A1D1F"/><path d="M29.9972 10.1341C32.7174 10.1235 34.7858 12.387 34.6003 14.9501C34.3085 18.9835 34.6192 21.8935 35.4557 25.5007C35.9153 27.4821 34.8757 29.4945 33.2237 30.7907C30.997 32.5377 29.2958 34.7639 27.9438 36.6802C26.0698 39.3363 19.6207 39.1455 18.1945 36.2519C15.2634 30.3051 13.277 19.3491 17.5573 11.947C18.2296 10.7843 19.5833 10.1748 20.9861 10.1693L29.9972 10.1341Z" fill="#4A1D1F"/><path d="M71.2898 54.1403C71.6281 51.5912 69.4974 49.3798 66.7809 49.2454C62.5059 49.0339 59.4843 48.3927 55.7932 47.1746C53.7656 46.5055 51.5252 47.2381 49.964 48.6311C47.8597 50.5086 45.3151 51.8358 43.1381 52.873C40.1207 54.3105 39.5457 60.3798 42.4159 62.065C48.3145 65.5282 59.5924 68.7081 67.888 65.5853C69.1911 65.0948 69.9946 63.8989 70.169 62.5844L71.2898 54.1403Z" fill="#4A1D1F"/></svg>
            <span class="mt-[21px] leading-[250%]">+992 92 713 33 99</span>
            <p class="p">для звонков по <br> Таджикистану</p>
          </div>
          <div class="Block">
            <svg class="w-[50px] h-[33px] lg:w-[68px] lg:h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 50" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M67.6499 1.65098C67.8718 1.47337 68 1.21115 68 0.934765C68 0.418508 67.5614 0 67.0203 0H1.52087C0.680918 0 0 0.649685 0 1.45111C0 1.88251 0.201168 2.29154 0.548927 2.56723L32.4798 27.8811C33.1757 28.4328 34.1854 28.4305 34.8786 27.8759L67.6499 1.65098ZM3.06762 9.98123C1.84813 9.01445 0 9.84192 0 11.3547V48.2143C0 49.2005 0.837925 50 1.87156 50H66.1284C67.1621 50 68 49.2005 68 48.2143V10.6373C68 9.12063 66.1437 8.29446 64.9258 9.26907L35.0912 33.1439L34.8917 33.3035C34.1985 33.8582 33.1888 33.8604 32.493 33.3088L32.2927 33.15L3.06762 9.98123Z" fill="#4A1D1F"/></svg>
            <span class="mt-[25px] lg:mt-[47px] leading-[250%]">halovati.sugd@inbox.ru</span>
            <p class="p">служба поддержки</p>
          </div>
          <div class="Block">
            <svg class="w-[40px] h-[47px] lg:w-[44px] lg:h-[57px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 57" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5848 56.1928C13.3275 47.1218 -0.716971 34.245 0.0285209 20.238C1.24818 8.85045 10.434 0 21.5848 0C32.7356 0 41.9215 8.85045 43.1412 20.238C43.6553 35.5322 30.9666 46.1149 21.5848 56.1928Z" fill="#4A1D1F"/><path d="M30.1805 21.3145C30.1805 26.4274 26.2404 30.5723 21.3802 30.5723C16.5199 30.5723 12.5798 26.4274 12.5798 21.3145C12.5798 16.2015 16.5199 12.0566 21.3802 12.0566C26.2404 12.0566 30.1805 16.2015 30.1805 21.3145Z" fill="#E5E5E5"/></svg>
            <span class="mt-[20px] lg:mt-[45px] leading-[150%]">город Худжанд, <br> 735700, Северо - восточная <br> промзона.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.back{
  background: rgba(227, 30, 37, 0.05);
}
.Block{
  @apply w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] my-4 lg:my-0 bg-[#fff] flex flex-col justify-center items-center;
}
.Block span{
  @apply text-[#4A1D1F] text-[14px] lg:text-[18px] text-center font-normal
}
.p{
  @apply text-[#4A1D1F] text-[12px] lg:text-[14px] text-center font-normal h-[42px]
}
</style>