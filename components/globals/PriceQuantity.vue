<template>
<div>
  {{priceTimesQuantity}}
</div>
</template>

<script>
export default {
  data(){
    return {
      total : ''
    }
  },
props:{
  price : {
    required : true,
    type : String
  },
  quantity : {
     required:false,
     type:Number,
     default: 1
  }
},
computed:{
  priceTimesQuantity(){
  let total = Number(this.price.substr(1,10)) * this.quantity
  return total.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })
  }
},
methods:{
  formatPrice(value) {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
},
}
}
</script>

<style>

</style>
