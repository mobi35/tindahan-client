<template>
<div>
<div v-if="orders.length">
<table>
<Order v-for="order in orders" :key="order.id" :order="order"/>
</table>
</div>

<div v-else>

</div>



</div>
</template>

<script>
import Order from '@/components/orders/Order'
export default {
  data(){
    return {
      orders: []
    }
  },
components:{
  Order
},
async asyncData({app}){
  let response = await app.$axios.$get('orders')



  return {
    orders: response.data
  }
}
}
</script>

<style>

</style>
