<template>


    <div class="card  mx-2 p-2 bg-white rounded-lg shadow-2xl">
      <div class="prod-title">
        <p class="sm:text-sm md:text-base m-2  uppercase text-gray-900 font-bold">   <nuxt-link :to="link">{{product.name}}</nuxt-link></p>
        <p class="uppercase text-sm text-gray-400">
       
        </p>
      </div>
      <div class="prod-img">

             <p class="hidden"> {{index = 0}}</p>
        <div v-for="(variation,key) in product.variations"  :key="key" >
         
        <p class="hidden"> {{index++}}</p>
   
      <div v-if="index === 1" >  
       
         <nuxt-link
      :to="link"
      :key="product.slug"
      ><img   class="w-full object-cover object-center h-64" :src="require(`~/assets/testprod/${variation[0].images[0].image_name}`)" /> 
      
         </nuxt-link>


      </div>  

     </div>



      </div>
      <div class="prod-info grid gap-10">

        <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p class="font-bold text-xl">{{product.price}}</p>

        </div>
      </div>
    </div>


</template>

<script>
export default {
    props:{
        product:{
            required:true,
            type: Object
        }
    },computed:{
        link(){
            return {
                name: 'products-slug',
                params:{
                    slug:this.product.slug
                }
            }
        }
    }
}
</script>

<style>

</style>
