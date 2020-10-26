<template>
<div>
<div v-if="orders.length">
<table class="table-fixed">
  <tbody>
<Order v-for="order in orders" :key="order.id" :order="order"/>
</tbody>
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
      orders: [],
        columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'subtotal',
          field: 'subtotal',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    }
  },
components:{
  Order
},
middleware:[
  'redirectGuest'
],
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
