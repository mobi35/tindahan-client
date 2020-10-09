<template>
  <div class="cart">

      <div>
          Your Cart <p>{{changed}}</p>
      </div>

      <div v-if="products.length">
         <CartOverview/>
      </div>
      <div v-else>
           <p>your cart is empty</p>
      </div>

      <div v-if="!empty">
         <nuxt-link :to="{name : 'checkout'}"> Checkout </nuxt-link> 
      </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartOverview from '@/components/cart/CartOverview'

export default {
components:{
    CartOverview
},
computed :{
    ...mapGetters({
        empty: 'cart/empty',
        products:'cart/products',
        changed: 'cart/changed'
    })
}
}
</script>

<style>

</style>