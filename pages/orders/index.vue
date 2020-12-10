<template>

<div>
<br/><br/><br/><br/><br/>
<div v-if="orders.length">


<div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Date Order</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Total</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Order</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
<Order v-for="order in orders" :key="order.id" :order="order"/>

    </tbody>
    </table>
  </div>
</div>
</div>

<div v-else>
<p>No orders</p>
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
