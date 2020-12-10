<template>
  <div class="mt-16">
<h1 class="text-3xl">Your Cart</h1>


      <table class="w-full text-sm lg:text-base" cellspacing="0">
        <thead>
          <tr class="h-12 uppercase">
            <th class="hidden md:table-cell"></th>
            <th class="text-left">Product</th>
            <th class="lg:text-right text-left pl-5 lg:pl-0">
              <span class="lg:hidden" title="Quantity">Qtd</span>
              <span class="hidden lg:inline">Quantity</span>
            </th>
            <th class="hidden text-right md:table-cell">Unit price</th>
            <th class="text-right">Total price</th>
          </tr>
        </thead>
        <tbody>


  <CartOverviewProduct v-for="product in products" :key="product.id" :product="product"/>



        </tbody>
      </table>





<div class="my-4 justify-end mt-6 -mx-2 lg:flex">
        <div class="lg:px-2 lg:w-1/2">

 <slot name="shipping" />


        </div>


     <hr class="pb-6 mt-6">

        <div class="lg:px-2 lg:w-1/2">
          <div class="p-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Order Details</h1>
          </div>




          <div class="p-4">
            <p class="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
              <div class="flex justify-between border-b">
                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Subtotal
                </div>
                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  {{ subtotal }}
                </div>
              </div>


 <slot name="rows" />


          </div>




        </div>





  </div>
   </div>








</template>

<script>
import {mapGetters} from 'vuex'

import CartOverviewProduct from '@/components/cart/CartOverviewProduct'
export default {

    computed:{
        ...mapGetters({
            products: 'cart/products',
            subtotal: 'cart/subtotal',
            total: 'cart/total'
        })
    },
    components:{
        CartOverviewProduct
    }

}
</script>

<style>

</style>
