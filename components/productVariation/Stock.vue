<template>
  <div>

 <div  :class="stockModal ? 'opacity-100 block z-50' : 'opacity-0 hidden z-0'" class="modal  absolute w-full h-full top-0 left-0 flex  items-center justify-center">
    <div @click.prevent="$emit('close');" class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 "></div>
  <div class="absolute w-1/2 h-32rem bg-white rounded-sm shadow-lg flex items-center justify-center text-2xl">
  
     <form >

         <input type ="text" v-model="quantity"/>
         <button @click.prevent="createStock">submit</button> <br>
         <button @click.prevent="update(variationId)">Load</button>
 
</form>

  </div>
</div>


  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
       
                quantity : 0
            
        }
    },
computed : {
  ...mapGetters({
      stocks : 'stocks/stocks'
  })  
},
props:{
    stockModal: {
        type : Boolean,
        require : true
    },
    variationId :{
        type: String,
         require : true
    }
},

methods : {
    ...mapActions({
        update : 'stocks/getStocks',
        create : 'stocks/store'
    }),
    createStock(){
        this.create({
            product_variation_id : this.variationId,
            quantity : this.quantity
        })
    }
},

}
</script>

<style>

</style>