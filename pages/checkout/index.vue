<template>
  <div v-if="products.length">



<div class="flex justify-center my-6">
  <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
    <div class="flex-1">


<CartOverview>

    <template slot="rows" v-if="shippingMethodId">

   <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Shipping
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                   {{shipping.price}}
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                   {{total}}
                  </div>
                </div>


                    <button :disabled="empty || submitting" @click.prevent="order" class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                      <span class="ml-2 mt-5px">Place Order</span>
                    </button>

    </template>

    <template slot="shipping" >


        <div class="p-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Shipping Details</h1>
          </div>

         <ShippingAddress :addresses="addresses" v-model="form.address_id"/>
<br>
  <hr>

       <div class="p-4 my-2 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Payment Method</h1>
          </div>

    <PaymentMethods :payment-methods="paymentMethods" v-model="form.payment_method_id" :user="$auth.user.id"/>



 <div class="p-4 my-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Choose Shipping</h1>
          </div>

          <div>

          <select class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" v-model="shippingMethodId">
              <option  v-for="shipping in shippingMethods" :key="shipping.id" :value="shipping.id">{{shipping.name}} ({{shipping.price}}) </option>
          </select>
      </div>


    </template>

</CartOverview>

 </div> </div> </div>




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
            payment_method_id :1
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

},middleware:[
  'redirectGuest'
],
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
