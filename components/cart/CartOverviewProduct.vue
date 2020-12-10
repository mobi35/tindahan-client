<template>
 <tr>
            <td class="hidden pb-4 md:table-cell">
              <a href="#">
                <img src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg" class="w-20 rounded" alt="Thumbnail">
              </a>
            </td>
            <td>
              <a href="#">
                <p class="mb-2 md:ml-4">     {{product.product.name}} {{product.type}} / {{product.name}}</p>
                <form action="" method="POST">
                  <button @click.prevent="destroyProduct(product.id)" class="text-gray-700 md:ml-4">
                    <small>(Remove item)</small>
                  </button>
                </form>
              </a>
            </td>
            <td class="justify-center md:justify-end md:flex mt-6">
              <div class="w-20 h-10">
                <div class="relative flex flex-row w-full h-8">
                   <select v-model="quantity">
               <option value="0" v-if="product.quantity == 0">0</option>
                <option :value="x" v-for="x in product.stock_count" :key="x" :selected="x == product.quantity">{{x}}</option>
           </select>
                </div>
              </div>
            </td>
            <td class="hidden text-right md:table-cell">
              <span class="text-sm lg:text-base font-medium">
                   {{product.total}}
              </span>
            </td>
            <td class="text-right">
              <span class="text-sm lg:text-base font-medium">
 {{product.total}}
              </span>
            </td>
          </tr>


</template>

<script>
import {mapActions} from 'vuex'
export default {

props:{
    product:{
        required : true,
        type: Object
    }
},
computed : {
  quantity: {
      get(){
        return this.product.quantity
      }, set(quantity){
    this.update({productId: this.product.id, quantity})
      }
  }
},

methods:{
    ...mapActions({
        destroy:'cart/destroy',
        update:'cart/update'
    }),
    destroyProduct(productId){
        if(confirm('are you sure?')){
            this.destroy(productId)
        }
    }
}
}
</script>

<style>

</style>
