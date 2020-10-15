<template>
    <table class="bg-gray-200">
        <tbody>
            <tr v-for="address in addresses" :key="address.id">
                <td>
                    <p :class="{ 'bg-green-400' : address.id === selectedAddress.id}"> 
                        {{address.name}} <br>
                {{address.address_1}} <br>
                {{address.city}} <br>
                {{address.postal_code}} <br>
                {{address.country.name}} <br>
                    </p>
                    </td>
                <td><a href="" @click.prevent="$emit('click',address)">
                    
                     Ship Here 
                    
                    
                    </a> </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props:{
        addresses: {
            required: true,
            type: Array
        },
        selectedAddress: {
            required:true,
            type:Object
        }
    }
}
</script>

<style>

</style>