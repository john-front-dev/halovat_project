<template>
  <div class="2xl:container my-0 mx-auto">
    <div class="mt-[109px] mb-[30px] lg:mb-[132px]">
      <form name="submit-to-google-sheet">
      <div class="flex flex-col lg:flex-row justify-center items-center lg:items-end">
        <div class="flex flex-col lg:mr-[182px]">
          <h2 class="text-[#272727] font-semibold text-[22px] sm:text-[30px] lg:text-[44px]">Cвяжитесь с нами</h2>
          <p class="text-[#292E3D] text-[16px] sm:text-[18px] lg:text-[24px] mt-[14px] mb-[9px] lg:mb-[34px] lg:mt-[24px]">Оставьте заявку и мы свяжемся с вами <br> в ближайшее время!</p>
          <div class="relative">
            <input type="text" class="outline-[#4A1D1F]" name="ФИО" v-model="form.full_name" placeholder="Введите свое ФИО">
            <svg v-if="form.full_name.length > 0" class="absolute top-[16px] lg:top-6 left-[30px]" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z" stroke="#4A1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5899 22.5C20.5899 18.63 16.7399 15.5 11.9999 15.5C7.25991 15.5 3.40991 18.63 3.40991 22.5" stroke="#4A1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else class="absolute top-[16px] lg:top-6 left-[30px]" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z" stroke="#927779" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.59 22.5C20.59 18.63 16.74 15.5 12 15.5C7.26003 15.5 3.41003 18.63 3.41003 22.5" stroke="#927779" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="relative">
            <input type="email" class="outline-[#4A1D1F]" name="Почта" v-model="form.email" placeholder="Введите свою почту">
            <svg v-if="form.email.length > 0" class="absolute top-[17px] lg:top-6 left-[30px]" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z" stroke="#4A1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5" stroke="#4A1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else class="absolute top-[17px] lg:top-6 left-[30px]" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z" stroke="#927779" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5" stroke="#927779" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="relative">
            <input type="text" v-mask="'#########'" class="outline-[#4A1D1F]" name="Тел номер" v-model="form.phone" placeholder="Введите свой номер">
            <svg v-if="form.phone.length > 0" class="absolute top-[16px] lg:top-6 left-[30px]" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z" stroke="#4A1D1F" stroke-width="1.5" stroke-miterlimit="10"/></svg>
            <svg v-else class="absolute top-[16px] lg:top-6 left-[30px]" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z" stroke="#927779" stroke-width="1.5" stroke-miterlimit="10"/></svg>
          </div>
          <button @click.prevent="submitForm()" class="mt-[15px] bg-[#E31E25] fill-white active:bg-[#fff] active:fill-[#2F2F2F] text-[#fff] text-[20px] active:text-[#2F2F2F] border border-[#4A1D1F] rounded-md gap-[10px] px-[30px] py-[10px] flex justify-start items-center h-[60px] sm:h-[75px]">
            <svg v-if="activate" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <span class="ml-[34px]">Отправить заявку</span><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="0 0 30 13"><path d="M29.5303 7.03033C29.8232 6.73744 29.8232 6.26256 29.5303 5.96967L24.7574 1.1967C24.4645 0.903806 23.9896 0.903806 23.6967 1.1967C23.4038 1.48959 23.4038 1.96447 23.6967 2.25736L27.9393 6.5L23.6967 10.7426C23.4038 11.0355 23.4038 11.5104 23.6967 11.8033C23.9896 12.0962 24.4645 12.0962 24.7574 11.8033L29.5303 7.03033ZM0 7.25H29V5.75H0V7.25Z"/></svg></span>
          </button>
        </div>
        <div class=" w-[200px] h-auto lg:w-[322px] lg:h-[359px] mb-[40px]">
          <img src="@/assets/conectWithUs.png" alt="">
        </div>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return{
      form:{
        full_name:'',
        email:'',
        phone:'',
      },
      activate: false,
    }
  },
  methods: { 
    async submitForm() {
      this.activate = true;
      try {
        const scriptURL = 'https://backendunprojects.ru/api/halovat/feedback';
       
        const response = await axios.post(scriptURL, this.form);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        this.activate = false;
      }
    },
  },
}
</script>

<style scoped>
input{
  @apply lg:w-[459px] w-[300px] sm:w-[350px] h-[60px] lg:h-[75px] mb-[25px] pl-[65px] placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:text-[#927779] py-[10px] border border-[#4A1D1F] rounded-md text-[#4A1D1F] text-[16px] lg:text-[20px];
}
.back-image{
  background: url('@/assets/conectWithUs.png'), lightgray 50% / cover no-repeat;
}
</style>
