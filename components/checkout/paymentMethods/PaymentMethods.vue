<template>
<div>
 <h1>Payment Method</h1>
    <template v-if="selecting">
     <PaymentMethodSelector :payment-methods="paymentMethods" :selected-payment-method="selectedPaymentMethod" @click="paymentMethodSelected"/>
    </template>
     <template v-else-if="creating">
    Create Payment methods
    <PaymentMethodCreator @cancel="creating = false" @added="created"/>
    </template>
   <template v-else>
    <div class="bg-green-200">
    <template  v-if="selectedPaymentMethod">
                 {{selectedPaymentMethod.card_type}}  ending {{selectedPaymentMethod.last_four}}<br>

    </template>
    </div>
    </template>

<div>

</div>

<a href="" @click.prevent="selecting = true" v-if="paymentMethods.length"> Change Payment Method </a>
<a href="" @click.prevent="creating = true"> Add an Payment Method</a>
 </div>


</template>



<script>
import PaymentMethodSelector from './PaymentMethodSelector'
import PaymentMethodCreator from './PaymentMethodCreator'
export default {
  components:{
PaymentMethodSelector,
PaymentMethodCreator
  },
    data(){
        return {
            localPaymentMethods: this.paymentMethods,
            selectedPaymentMethod: null,
            selecting:false,
            creating: false
        }
    },
props: {
    paymentMethods: {
        required: true,
        type: Array
    }
},

computed:{
    defaultPaymentMethod(){
      //  console.log(JSON.stringify(this.localAddresses))
        return this.localPaymentMethods.find(
            a => a.default == true
        )
    }
},
watch:{
    selectedPaymentMethod(paymentMethod){
       // this.selecting = false
       this.$emit('input',paymentMethod.id)
    }
},
methods:{
paymentMethodSelected(paymentMethod){
  this.switchPaymentMethod(paymentMethod)
  this.selecting = false
},
switchPaymentMethod(paymentMethod){
    this.selectedPaymentMethod = paymentMethod
},
created(paymentMethod){
    this.localPaymentMethods.push(paymentMethod)
    this.creating = false
    this.switchPaymentMethod(paymentMethod)
}
},
created(){
    if(this.paymentMethods.length){
       this.switchPaymentMethod(this.defaultPaymentMethod)
    }
}
}
</script>

<style>

</style>
