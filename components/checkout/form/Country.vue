<template>


 <div class="py-2">
     <span class="px-1 text-sm text-gray-600">City</span>
  <select  class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" @change="changed" >
      <option value="">Select</option>
      <option :value="country.id"  v-for="country in countries" :key="country.id">{{country.name}}</option>
  </select>
    </div>
</template>

<script>
export default {

    data(){
        return {
            countries: []
        }
    },
    methods:{
        async getCountries(){
            let response = await this.$axios.$get('countries')
            this.countries = response.data


        },changed($event){
            this.$emit('input',$event.target.value
            )
        }
    }, created(){
            this.getCountries()
        }

}
</script>

<style>

</style>
