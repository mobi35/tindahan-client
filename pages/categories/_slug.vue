<template>
      <div>
          <br>
       <div v-for="product in products" :key="product.slug">
         <Product :product="product"/>
       </div>
      </div>
</template>

<script>
import Product from '@/components/products/Product'
export default {
  components:{
    Product
  },

    data(){
        return {
            products: []
        }
    },
async asyncData({ params, app}){
    let response = await app.$axios.$get(`products?category=${params.slug}`)
    return {
        products : response.data
    }
}
}
</script>