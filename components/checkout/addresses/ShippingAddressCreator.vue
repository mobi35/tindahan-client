<template>
<div> 
    {{form}}
    <form @submit.prevent="store"> 
   <input type="text" placeholder="name" v-model="form.name"/>
   <input type="text" placeholder="address line" v-model="form.address_1"/>
    <input type="text" placeholder="City" v-model="form.city"/>
    <input type="text" placeholder="Postal Code" v-model="form.postal_code"/>
   
   <Country v-model="form.country_id"/>

    <button>Add</button>
    <button @click.prevent="$emit('cancel')">Cancel</button>
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