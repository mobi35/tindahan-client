<template>
<div>
    <form @submit.prevent="store">


        <div class="py-2">
                <span class="px-1 text-sm text-gray-600">Address Name</span>
                <input placeholder="" v-model="form.name" type="text"
                  class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
              </div>

                <div class="py-2">
                <span class="px-1 text-sm text-gray-600">Address</span>
                <input placeholder="" v-model="form.address_1" type="text"
                  class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
              </div>


                <div class="py-2">
                <span class="px-1 text-sm text-gray-600">City</span>
                <input placeholder="" v-model="form.city" type="text"
                  class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
              </div>


                <div class="py-2">
                <span class="px-1 text-sm text-gray-600">Postal Code</span>
                <input placeholder="" v-model="form.postal_code" type="text"
                  class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
              </div>



   <Country v-model="form.country_id"/>


<div class="flex mx-8  justify-around">
<button class=" w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      <span class="ml-2 mt-5px">Add</span>
                    </button>
<div class="mx-2"></div>

<button  @click.prevent="$emit('cancel')" class=" w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-red-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      <span class="ml-2 mt-5px">Cancel</span>
                    </button>

</div>


    </form>
</div>
</template>

<script>
import Country from '@/components/checkout/form/Country'
export default {
    data(){
        return {
            form:{
            name:   '',
            address_1: '',
            city: '',
            postal_code:'',
            country_id: '',
            default: true
            }
    }
    },
    components:{
        Country
    },
    methods :{
       async store(){
           let response = await this.$axios.$post('addresses', this.form)

           this.$emit('created',response.data)
        }
    }
}
</script>

<style>

</style>
