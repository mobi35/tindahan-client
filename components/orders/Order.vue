<template>
    <tr>
        <td class="w-1/3 text-left py-3 px-4">{{order.created_at}}</td>
        <td class="w-1/3 text-left py-3 px-4">{{order.subtotal}}</td>
        <td class="text-left py-3 px-4">  <div v-for="variation in products" :key="variation.id">
         <nuxt-link :to="{
            name:'products-slug',
            params:{
              slug: variation.product.slug
            }
           }">
         <p>  {{variation.product.name}} ({{variation.name}}) - {{variation.type}} </p>
           </nuxt-link>

           </div>
           <template v-if="moreProducts > 0" >
            <p>  and {{moreProducts}} more</p>
           </template>
 </td>
        <td class="text-left py-3 px-4">   <component :is="order.status"/>  </td>
      </tr>



</template>

<script>
import OrderStatusPaymentFailed from '@/components/orders/statuses/OrderStatus-payment_failed'
import OrderStatusPending from '@/components/orders/statuses/OrderStatus-pending.vue'
import OrderStatusProcessing from '@/components/orders/statuses/OrderStatus-processing.vue'
import OrderStatusCompleted from '@/components/orders/statuses/OrderStatusCompleted.vue'
export default{
  components:{
    'payment_failed' : OrderStatusPaymentFailed,
    'pending' : OrderStatusPending,
    'processing' : OrderStatusProcessing,
    'completed' : OrderStatusCompleted
  },
  data(){
    return {
        maxProducts:2,
        statusClasses:{
            'is-success' : this.order.status=='complete',
            'is-info' : this.order.status == 'processing' || this.order.status == 'pending',
            'is-danger' : this.order.status == 'payment_failed'
            }
    }
  },
  props:{
    order: {
    required:true,
    type:Object
    }
  },
  computed:{
    products(){
      return this.order.products.slice(0,this.maxProducts)
    },
    moreProducts(){
      return this.order.productslength - this.maxProducts
    }
  }
}
</script>

<style>

</style>
