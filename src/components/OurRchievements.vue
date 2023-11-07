<template>
  <div>
    <div class="carousel my-20">
      <div class="carousel-inner">
        <div v-for="logo in logotips" :key="logo.id" class="carousel-item w-[100px] md:w-[200px]">
          <img :src="logo.url" alt="logo" class=" cursor-pointer">
        </div>
      </div>
      <div class="carousel-inner">
        <div v-for="logo in logotips" :key="logo.id" class="carousel-item w-[100px] md:w-[200px]">
          <img :src="logo.url" alt="logo" class=" cursor-pointer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/ourAchievements/1.jpg"
import img2 from "../assets/ourAchievements/2.jpg"
import img3 from "../assets/ourAchievements/3.jpg"
import img4 from "../assets/ourAchievements/4.jpg"
import img5 from "../assets/ourAchievements/5.jpg"
import img6 from "../assets/ourAchievements/6.jpg"
import img7 from "../assets/ourAchievements/7.jpg"
export default {
  data() {
    return{
      logotips:[
        { id: 1, url: img1 },
        { id: 2, url: img2 },
        { id: 7, url: img7 },
        { id: 3, url: img3 },
        { id: 4, url: img4 },
        { id: 5, url: img5 },
        { id: 6, url: img6 },
      ]
    }
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
  align-items: center;
}

.carousel-inner {
  display: flex;
  animation: scroll 25s linear infinite;
  align-items: center;
}

.carousel-item {
  margin-right: 16px; 
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>