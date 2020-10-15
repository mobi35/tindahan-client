<template>
<div> 
 <h1>Ships To</h1>
    <template v-if="selecting">
        <ShippingAddressSelector :addresses="addresses" :selectedAddress="selectedAddress" @click="switchAddress"/>
    </template>
     <template v-else-if="creating">
         <ShippingAddressCreator @cancel="creating = false" @created="created"/>
    </template>
   <template v-else> 
    <div class="bg-green-200"> 
    <template  v-if="selectedAddress">
                 {{selectedAddress.name}} <br>
                {{selectedAddress.address_1}} <br>
                {{selectedAddress.city}} <br>
                {{selectedAddress.postal_code}} <br>
                {{selectedAddress.country.name}} <br>
    </template>
    </div>
    </template>

<div>
    
</div>

<a href="" @click.prevent="selecting = true"> Change Shipping Address </a>
<a href="" @click.prevent="creating = true"> Add an address</a>
 </div>

  
</template>



<script>
import ShippingAddressSelector from './ShippingAddressSelector'
import ShippingAddressCreator from './ShippingAddressCreator'
export default {
    data(){
        return {
            localAddresses: this.addresses,
            selectedAddress: null,
            selecting:false,
            creating: false
        }
    },
props: {
    addresses: {
        required: true,
        type: Array
    }
},
components:{
ShippingAddressSelector,
ShippingAddressCreator
},
computed:{
    defaultAddress(){
      //  console.log(JSON.stringify(this.localAddresses))
        return this.localAddresses.find(
            a => a.default == true
        )
    }
},
watch:{
    selectedAddress(address){
        this.selecting = false
        this.$emit('input',address.id)
    }
},
methods:{
switchAddress(address){
    this.selectedAddress = address
},
created(address){
    this.localAddresses.push(address)
    this.creating = false
    this.switchAddress(address)
}
},
created(){
    if(this.addresses.length){
       this.switchAddress(this.defaultAddress)
    }
}
}
</script>

<style>

</style>