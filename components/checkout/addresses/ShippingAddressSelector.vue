<template>
    <table >
        <tbody>
            <tr v-for="address in addresses" :key="address.id">
                <td class="mb-6 italic mt-2  w-9/12">


                    <p class="p-4  rounded-md   " :class="{ 'bg-green-200' : address.id === selectedAddress.id}">
                        {{address.name}} <br>
                {{address.address_1}} ,
                {{address.city}} <br>
                {{address.postal_code}} <br>
                {{address.country.name}} <br>
                    </p>


                    </td>
                <td><a class="bg-gray-500 text-white p-2 rounded-md" href="" @click.prevent="$emit('click',address)">

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
