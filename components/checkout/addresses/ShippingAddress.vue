<template>
<div>
 <h1>Ships To</h1>
    <template v-if="selecting">
        <ShippingAddressSelector :addresses="addresses" :selectedAddress="selectedAddress" @click="addressSelected"/>
    </template>
     <template v-else-if="creating">
         <ShippingAddressCreator @cancel="creating = false" @created="created"/>
    </template>
   <template v-else>
    <div class="p-4 mb-6 italic mt-2 rounded-md bg-green-200">
    <template   v-if="selectedAddress">
                 {{selectedAddress.name}} <br>
                {{selectedAddress.address_1}}  ,
                {{selectedAddress.city}}  <br>
                {{selectedAddress.postal_code}}<br>
                {{selectedAddress.country.name}}
    </template>
    </div>
    </template>

<div>

</div>

<a v-if="selectedAddress != null" href="" @click.prevent="selecting = true"> Change Shipping Address </a> <br>
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
       // this.selecting = false
        this.$emit('input',address.id)
    }
},
methods:{
addressSelected(address){
  this.switchAddress(address)
  this.selecting = false
},
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
