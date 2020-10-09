<template>
<div> 
    <h1>Ships To</h1>
    <div class="bg-green-200"> 
    <template  v-if="selectedAddress">
        {{selectedAddress.name}} <br>
                {{selectedAddress.address_1}} <br>
                {{selectedAddress.city}} <br>
                {{selectedAddress.postal_code}} <br>
                {{selectedAddress.country.name}} <br>
    </template>
</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            localAddresses: this.addresses,
            selectedAddress: null
        }
    },
props: {
    addresses: {
        required: true,
        type: Array
    }
},
computed:{
    defaultAddress(){
      //  console.log(JSON.stringify(this.localAddresses))
        return this.localAddresses.find(
            a => a.default == true
        )
    }
},
methods:{
switchAddress(address){
    this.selectedAddress = address
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