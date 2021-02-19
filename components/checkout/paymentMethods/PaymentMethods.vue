<template>
<div>
    <template v-if="selecting">
     <PaymentMethodSelector :payment-methods="paymentMethods" :selected-payment-method="selectedPaymentMethod" @click="paymentMethodSelected"/>
    </template>
     <template v-else-if="creating">
    Create Payment method
   
    <PaymentMethodCreator class="py-4" @cancel="creating = false" @added="created" :user="user" />
    </template>
   <template v-else>
    <div class=" p-4 mb-6 italic mt-2 rounded-md bg-green-200">
    <template  v-if="selectedPaymentMethod">
                 {{selectedPaymentMethod.card_type}}  / GCASH<br>

    </template>
    </div>
    </template>

<div>

</div>
<br>
<a href="" @click.prevent="selecting = true" v-if="paymentMethods.length"> Change Payment Method </a> <br>
<a href="" @click.prevent="creating = true" v-if="!selecting"> Add an Payment Method</a>
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
    },
    user:{
        required: true,
        type: Number
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
