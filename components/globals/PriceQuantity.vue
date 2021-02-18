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
    type : String,
    default:""
  },
  quantity : {
     required:false,
     type:Number,
     default: 1
  }
},
computed:{
  priceTimesQuantity(){
     this.price.substr(1,10).replace(',', '');
  let total =  this.price.substr(1,10).replace(',', '') * this.quantity

 // console.log( Number(this.formatPrice(this.price.substr(1,10).replace(',', '')) ))
  console.log(total.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' }));
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
