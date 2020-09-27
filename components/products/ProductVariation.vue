<template>
  
  <div class="field">
      <label for="">
          {{type}}
      </label>
      <select :value="selectedVariationId"  @change="changed($event,type)">
          <option value="">Choose</option>
         <option 
         v-for="variation in variations" :disabled="!variation.in_stock" :value="variation.id" :key="variation.id
       
         ">
         {{variation.name}}
           
           
           <template v-if="variation.price_varies">
            ({{variation.price}})
         </template>

                   <template v-if="!variation.in_stock">
            (out of stock)
         </template>
       
         </option>
      </select>
  </div>

</template>

<script>
export default {
props:{
    type:{
        required:true,
        type:String
    },
    variations:{
        required:true,
        type:Array
    },
    value:{
        required:false,
        fefault:''
    }
},
methods:{
    changed(event,type){
        this.$emit('input', this.findVariation(event.target.value))
    },
    findVariation(id){
    let variation = this.variations.find(v => v.id == id)
   if(typeof variation === 'undefined')
    {
        return null
    }
    return variation
}
},
computed:{
    selectedVariationId(){
        if(!this.findVariation(this.value.id)){
            return ''
        }

        return this.value.id
    }
}

}
</script>

<style>

</style>