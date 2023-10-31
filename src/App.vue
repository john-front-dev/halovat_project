<template>
  <div>
    <Navbar/>
    <RouterView />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'; 
export default {
  components:{
    Navbar,
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
  /* -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none; */
}
</style>