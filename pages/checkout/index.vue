<template>
  <div v-if="products.length">

      <div>
        <ShippingAddress :addresses="addresses" />

       
      </div>

       <div>
          <h1>Payment</h1>
      </div>


          <div>
          <h1>Shipping</h1>
      </div>


<CartOverview>

    <template slot="rows">
        <tr>
            <td></td>
            <td></td>
            <td>Shipping</td>
            <td>0</td>
        </tr>

         <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{{total}}</td>
        </tr>
    </template>

</CartOverview>
<button class="bg-red-200" :disabled="empty">Place Order</button>
  </div>
</template>

<script>
import CartOverview from '@/components/cart/CartOverview'
import ShippingAddress from '@/components/checkout/addresses/ShippingAddress'
import {mapGetters} from 'vuex'
export default {
    data(){
        addresses: []
    },
components:{
CartOverview,
ShippingAddress
},
computed:{
    ...mapGetters({
        total : 'cart/total',
        products: 'cart/products',
        empty : 'cart/empty'
    })
},
async asyncData({app}){
let addresses = await app.$axios.$get('addresses')

return {
    addresses: addresses.data
}
}
}
</script>

<style>

</style>