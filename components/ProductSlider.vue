<template>
<div class=" flex  items-center flex-wrap mt-4 flex-col">
  <div class="  m-auto mt-4 ">
  <h1 class=" md:text-4xl md:w-gk-line530px  text-lg font-sans text-center  tracking-widest border-b pb-2   border-black">GODS KEEPER CLOTHING</h1>

<h1 class="tracking-widest md:text-5xl text-2xl font-sans text-center mt-6">OUR BEST SELLERS </h1>
<p class="font-body md:text-base text-xs text-center">SHOP OUR TOP OF THE LINE CROWD'S FAVORITE PICKS</p>


    </div>

     <div class="mt-4 flex px-2 flex-wrap">
      
      <div  v-for="(prod,key,index ) in product" :key="key" class="w-1/3 p-2 md:w-1/6">  
   
  
      <p class="text-center"> {{prod.name}} </p>
      
      
       <p class="hidden">{{index=0}}</p> 
      <div v-for="(variation,key) in prod.variations"  :key="key" >
        <p class="hidden"> {{index++}}</p>
     
   
      <div v-if="index === 1" >  
        
         <nuxt-link
      :to="{ name : 'products-slug', params: {slug:prod.slug}}"
      :key="prod.slug"
      >
      <!-- you can upload image from the assets folder in nuxt
      <img class="h-64		 w-full" :src="require( `~/assets/testprod/${variation[0].images[0].image_name}`)" /> 
      -->

       <img class="h-64		 w-full" :src="`http://localhost:8000/uploads/${ variation[0].images[0].image_name}`" /> 
         </nuxt-link>
      </div>  

      </div>
      
       </div>


       
     
  </div>

<div class="button-wrapper  mx-auto mt-10 text-center  ">
    <button class="border-2 border-black font-body hover:bg-black hover:text-white transition duration-200 ease-in focus:outline-none  px-8 py-3 rounded-full outline-none ">See More</button>
  </div>
</div>
</template>

<script>

export default {

  props:{
    product:{
        required:true,
        type:Array
    }
},
  

}
</script>

<style>

</style>
