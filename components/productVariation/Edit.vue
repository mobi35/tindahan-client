<template>
  <div>

 <div  :class="modal ? 'opacity-100 block z-50' : 'opacity-0 hidden z-0'" class="modal  absolute w-full h-full top-0 left-0 flex  items-center justify-center">
  <div @click.prevent="$emit('close');" class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 "></div>
  <div class="absolute w-1/2 h-32rem bg-white rounded-sm shadow-lg flex items-center justify-center text-2xl">
     <form >
    <select v-model="form.name">
          <option value="XS">Extra Small</option>
          <option value="S">Small</option>
           <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="2XL">2XL</option>
            <option value="3XL">3XL</option>
            </select>

<input type = "text" v-model="form.price"/>

 <select  v-model="form.product_variation_type_id">
        <option  :value="type.id" v-for="type in variationType.data" :key="type.key">{{type.name}}</option>
            </select>
<button  @click.prevent="EditVariation(form.currentId)">Edit</button>
</form>

  </div>
</div>


  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {

  data(){
    return {
      form : {
      price :  this.variation.data[0].priceAmount,
      name : this.variation.data[0].name,
      product_variation_type_id : this.variation.data[0].type,
      id : this.variation.data[0].id
    }
    }
  },


props:{
    modal: {
        type : Boolean,
        require : true
    },
    variation : {
        type : Object,
        require : true
    }, variationType : {
        type : Object,
        require : true
    }
},
methods : {
    ...mapActions({
    updateVar : 'productVariation/patch'
  }),
  EditVariation(id){
    this.updateVar(this.form )
 this.$emit('updateClick')
  }
}
}
</script>

<style>

</style>