<template>
    <table class="bg-gray-200">
        <tbody>
            <tr v-for="paymentMethod in paymentMethods" :key="paymentMethod.id">
                <td class="mb-6 italic mt-2  ">
                    <p  class="p-4  rounded-md  " :class="{ 'bg-green-400' : paymentMethod.id === selectedPaymentMethod.id}">
                        {{paymentMethod.card_type}} :  **** **** **** {{selectedPaymentMethod.last_four}} <br>

                    </p>
                    </td>
                <td><a class="bg-gray-500 text-white p-2 rounded-md" href="" @click.prevent="$emit('click',paymentMethod)">

                   use


                    </a> </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props:{
        paymentMethods: {
            required: true,
            type: Array
        },
        selectedPaymentMethod: {
            required:true,
            type:Object
        }
    }
}
</script>

<style>

</style>
