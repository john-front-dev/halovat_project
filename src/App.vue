<template>
  <div>
    <Navbar/>
    <RouterView />
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'; 
import Footer from '@/components/Footer.vue';
export default {
  components:{
    Navbar,
    Footer
  }
}
</script>
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
img {
  user-select: none;
}
*{
  -webkit-touch-callout: none;
  
  /* font-family: 'Poppins', sans-serif; */
  /* -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none; */
}
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap'); */

</style>