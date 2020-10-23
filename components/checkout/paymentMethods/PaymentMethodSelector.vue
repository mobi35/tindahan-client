<template>
    <table class="bg-gray-200">
        <tbody>
            <tr v-for="paymentMethod in paymentMethods" :key="paymentMethod.id">
                <td>
                    <p :class="{ 'bg-green-400' : paymentMethod.id === selectedPaymentMethod.id}">
                        {{paymentMethod.card_type}} <br>

                    </p>
                    </td>
                <td><a href="" @click.prevent="$emit('click',paymentMethod)">

                    Pay with this


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
