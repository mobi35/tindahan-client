<template>
<div  >
  <swiper class="w-full md:h-700 object-center" ref="mySwiper" :options="swiperOptions">
    <swiper-slide > <img class="w-full "    src="~/assets/GK.jpg"/>  </swiper-slide>
    <swiper-slide><img class="w-full " src="~/assets/GK.jpg"/></swiper-slide>
    <swiper-slide><img class="w-full"  src="~/assets/GK.jpg"/></swiper-slide>
    <swiper-slide><img  class="w-full" src="~/assets/GK.jpg"/></swiper-slide>
    <swiper-slide><img  class="w-full"  src="~/assets/GK.jpg"/></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          cubeEffect: {
    slideShadows: true,
  }, centeredSlides: true,

        slidesPerView: 1,

        autoplay: {
          delay: 5000
        },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // Some Swiper option/callback...
        }
      }
    },

  }
</script>

