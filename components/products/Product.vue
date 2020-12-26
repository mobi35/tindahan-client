<template>


    <div class="card  justify-center  p-10 bg-white rounded-lg shadow-2xl">
      <div class="prod-title">
        <p class="md:text-sm text-2xl uppercase text-gray-900 font-bold">   <nuxt-link :to="link">{{product.name}}</nuxt-link></p>
        <p class="uppercase text-sm text-gray-400">
         Gods keeper clothing
        </p>
      </div>
      <div class="prod-img">
         <nuxt-link :to="link">
        <img src="~/assets/camo.jpg"
             class="w-full object-cover object-center" />
        </nuxt-link>

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
