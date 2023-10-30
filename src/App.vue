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
</style>