<template>

<div class=" flex  items-center flex-wrap mt-4 flex-col">
  <div class="  m-auto mt-4 ">
    <h1 class="md:w-gk-line530px text-lg md:text-4xl font-sans text-center tracking-widest border-t pt-2   border-black" >GALLERY</h1>

    <p class="font-body text-xs md:text-base text-center">SHOP OUR TOP OF THE LINE CROWD'S FAVORITE PICKS</p>
    </div>


<carousel-3d>
  <slide :index="0">
   <img  src="~/assets/gallery/i1.jpg" />
  </slide>
  <slide :index="1">
  <img  src="~/assets/gallery/i2.jpg" />
  </slide>
    <slide :index="2">
    <img  src="~/assets/gallery/i4.jpg" />
  </slide>

    <slide :index="3">
   <img  src="~/assets/gallery/i11.jpg" />
  </slide>

    <slide :index="4">
   <img  src="~/assets/gallery/i6.jpg" />
  </slide>
</carousel-3d>



    <div class="mt-4 flex px-2 flex-wrap">

      <div class="w-1/3 p-2 md:w-1/6"> <img  src="~/assets/gallery/i1.jpg" /> </div>
      <div class="w-1/3 p-2 md:w-1/6"> <img  src="~/assets/gallery/i2.jpg" /> </div>
      <div class="w-1/3 p-2 md:w-1/6"> <img  src="~/assets/gallery/i3.jpg" /> </div>
      <div class="w-1/3 p-2 md:w-1/6"> <img  src="~/assets/gallery/i4.jpg" /> </div>
      <div class="w-1/3 p-2 md:w-1/6"> <img  src="~/assets/gallery/i11.jpg" /> </div>
      <div class="w-1/3 p-2 md:w-1/6"> <img  src="~/assets/gallery/i6.jpg" /> </div>


  </div>
<div class="button-wrapper  mx-auto mt-10 text-center  ">
    <button class="border-2 border-black font-body hover:bg-black hover:text-white transition duration-200 ease-in focus:outline-none  px-8 py-3 rounded-full outline-none ">See More</button>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.carousel-3d-container{
  border:none;
}
</style>
