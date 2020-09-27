<template>
    <div class="bg-red-400 w-64 flex flex-col items-center"> 
    <p>product</p>
    <nuxt-link :to="link">    <div class="image h-20 w-20 bg-white "></div></nuxt-link>

    <nuxt-link :to="link">{{product.name}}</nuxt-link>
    <p>{{product.description}}</p>
    <p>{{product.price}}</p>
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