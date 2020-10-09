<template>
  <tr>
      <td width="120">

      </td>

       <td >
         {{product.product.name}} {{product.type}} / {{product.name}}
      </td>

        <td >
           <select v-model="quantity">
               <option value="0" v-if="product.quantity == 0">0</option>
                <option :value="x" v-for="x in product.stock_count" :key="x" :selected="x == product.quantity">{{x}}</option>
           </select>
      </td>

       <td >
           {{product.total}}
      </td>
      
       <td >
          <a href="" @click.prevent="destroyProduct(product.id)">Remove</a> 
      </td>

      


  </tr>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            quantity: this.product.quantity
        }
    },
props:{
    product:{
        required : true,
        type: Object
    }
},

watch:
{
    quantity (quantity){
        this.update({productId: this.product.id, quantity})
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