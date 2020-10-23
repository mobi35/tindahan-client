<template>
  <div v-if="products.length">

      <div>
        <ShippingAddress :addresses="addresses" v-model="form.address_id"/>

    <PaymentMethods :payment-methods="paymentMethods" v-model="form.payment_method_id"/>
      </div>




          <div>
          <h1>

          </h1>

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
<button class="bg-red-200" :disabled="empty || submitting" @click.prevent="order">Place Order</button>
  </div>
</template>

<script>
import CartOverview from '@/components/cart/CartOverview'
import ShippingAddress from '@/components/checkout/addresses/ShippingAddress'
import PaymentMethods from '@/components/checkout/paymentMethods/PaymentMethods'
import {mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
        submitting:false,
        addresses: [],
        shippingMethods:[],
        paymentMethods:[],
        form : {
            address_id: null,
            payment_method_id :null
        },

         }
    },
components:{
CartOverview,
ShippingAddress,
PaymentMethods
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
        getCart: 'cart/getCart',
        flash:'alert/flash'
    }),

      async order(){

        this.submitting = true
        try{

          await this.$axios.$post('orders',{
            ...this.form,
            shipping_method_id: this.shippingMethodId
          })

          await this.getCart()
        this.$router.replace({
                    name : 'orders'
                  })
        }catch(e){
          this.flash(e.response.data.message)

          this.getCart()

        }
    this.submitting = false
      },

async getShippingMethodsForAddress(addressId){
    let response = await this.$axios.$get(`addresses/${addressId}/shipping`)
    this.shippingMethods = response.data
    return response
}
},


async asyncData({app}){
let addresses = await app.$axios.$get('addresses')
let paymentMethods = await app.$axios.$get('payment-methods')

return {
    addresses: addresses.data,
    paymentMethods: paymentMethods.data
}
}


}
</script>

<style>

</style>
