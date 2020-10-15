<template>
  <div v-if="products.length">

      <div>
        <ShippingAddress :addresses="addresses" v-model="form.address_id"/>

       
      </div>

       <div>
          <h1>Payment</h1>
      </div>


          <div>
          <h1>
              
          </h1>
   {{shippingMethodId}}
          <select v-model="shippingMethodId">
              <option  v-for="shipping in shippingMethods" :key="shipping.id" :value="shipping.id">{{shipping.name}} ({{shipping.price}}) </option>
          </select>
      </div>


<CartOverview>

    <template slot="rows" v-if="shippingMethodId">
        <tr>
            <td></td>
            <td></td>
            <td>Shipping</td>
            <td>{{shipping.price}}</td>
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
import {mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
        addresses: [],
        shippingMethods:[],
        form : {
            address_id: null
        },

         }
    },
components:{
CartOverview,
ShippingAddress
},
watch:{
    'form.address_id'(addressId){
        this.getShippingMethodsForAddress(addressId).then(() => {
            this.setShipping(this.shippingMethods[0])
        })
    },
    shippingMethodId(){
        this.getCart()
    }
},
computed:{
    ...mapGetters({
        total : 'cart/total',
        products: 'cart/products',
        empty : 'cart/empty',
        shipping:'cart/shipping'
    }),
    shippingMethodId:{
        get(){
            return this.shipping ? this.shipping.id : ''
        },
        set(shippingMethodId){
            this.setShipping(
                this.shippingMethods.find(s => s.id == shippingMethodId)
            )
        }
    }
    
},
methods:{
    ...mapActions({
        setShipping: 'cart/setShipping',
        getCart: 'cart/getCart'
    }),

async getShippingMethodsForAddress(addressId){
    let response = await this.$axios.$get(`addresses/${addressId}/shipping`)
    this.shippingMethods = response.data
    return response
}
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