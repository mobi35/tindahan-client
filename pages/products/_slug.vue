<template>
      <div>
          <br>


<br><br>
  <div class="container px-5 py-24 mx-auto">


<div class="flex justify-between">
 
 
  <div class="w-1/2 mr-4">
  
  <div v-if="form.variation"> 

<inner-image-zoom  class=" object-cover object-center rounded border border-gray-200"  :src="require(`~/assets/testprod/${form.variation.images[0].image_name}`).toString() " />
 
 <div class="flex"> 
<img v-for="images in form.variation.images" :key="images.key" class="w-1/4  object-cover object-center rounded border border-gray-200"  :src="require(`~/assets/testprod/${images.image_name}`)" />

</div>

</div>
 <div v-else>

<div v-for="prod in product.variations" :key="prod.key"  >

 <inner-image-zoom :src="require(`~/assets/testprod/${prod[0].images[0].image_name}`).toString()"/>
</div>

</div>
    </div>

<div  class="w-1/2">

        <h2 class="text-sm title-font text-gray-500 tracking-widest">GODS KEEPER CLOTHING</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }} <span v-if="form.variation">{{` - ${ form.variation.name  }`}} </span> <span class="title-font font-medium text-2xl text-gray-500 block" v-if="!product.in_stock">Out of stock</span></h1>
   
        <p class="leading-relaxed">{{ product.description }}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
           

       <span class="title-font font-medium text-2xl text-gray-900 block" > 
        
         <div v-if="form.variation && form.variation.stock_count > 0 "> 
         <PriceQuantity :price="product.price" :quantity="form.quantity" />  
         </div>
         <div v-else> 
          {{product.price}}
         </div>


   <div  v-if="form.variation && form.variation.stock_count == 0" > 
      <h1 class="text-gray"> Out of Stock </h1>
     </div>

         </span>
      



        </div>
        <div >

<h1 class="text-sm title-font text-gray-500 m-2">Sizes</h1>
            <div class="inline"  v-for="(variations,type) in product.variations" :key="type">
              <label for="">
                <template>
      
                  <button return false  v-on:click="buttonSearch(variations,type)" :class="{ 'bg-gray-200': type == currentType }"  class="border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none">{{type}}</button>
                </template>
            </label>
          </div>

<br>
           <form action="" @submit.prevent="add">


            <h1 class="text-sm title-font text-gray-500 m-2">Variation</h1>
           <div  :class="{ 'block' : currentType != '' , 'hidden' : currentType == '' }" >
            <select class="border-gray border-2" :value="selectedVariationId"  v-model="form.size"  @change="changed($event)">
          <option value="s">Choose</option>
         <option v-for="variation in variId" :value="variation.id" :key="variation.id">
            {{variation.name}}
         </option>
          </select>
          </div>



            <div v-if="form.variation">
                <div class="control">
                  
                     <h1 class="text-sm title-font text-gray-500 m-2">Quantity</h1>
                    <select class="border-gray border-2" name="
                    " id="" v-model="form.quantity">

                  <template v-if="form.variation.in_stock">
                     <option :value="x" v-for="x in parseInt(form.variation.stock_count)" :key="x">
                       {{x}}
                   </option>
                  </template>
           
                  <template v-else>
                    <option value="0">Out of Stock</option>
                  </template>

                    </select>
                </div>
                <div class="control">
                        <button v-if="form.variation && form.variation.stock_count > 0 && form.quantity >0" class="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">Add to cart</button>
                </div>
            </div>

              </form>




  
      </div>
  </div>

   
    </div>

  </div>



  


</div>









</template>

<script>
import { mapActions } from 'vuex'
import PriceQuantity from '@/components/globals/PriceQuantity'
import InnerImageZoom from  'vue-inner-image-zoom'
export default {
 
    data(){
        return {
            
            product: null,
            variId: [],
            currentSelectedButton:null,
            currentSize: '',
            currentType: '',
            form:{
                variation:'',
                quantity:0,
                size:'s'
            }
        }
    },components:{
        PriceQuantity,
        InnerImageZoom
    },
    methods: {
  
        ...mapActions({
            store: 'cart/store'
        }),
         add(){
             this.store([
                 {
                     id: this.form.variation.id,
                     quantity: this.form.quantity,
                     size:this.form.size
                 }
             ])

             this.form = {
                 variation : '',
                 quantity : 0,
                 size: "s"
             }
    },buttonSearch(variation,type){
      if(this.currentSelectedButton == variation[0].id){
      
        return
      }
      this.variId = variation
          this.findVariation(variation[0].id)
        this.form.size = "s"
        this.currentSelectedButton = variation[0].id
        this.currentType = type
        
     
      
    },
      findVariation(id){
    let variation = this.variId.find(v => v.id == id)
        this.form.variation = variation


          },

          changed(event){
       this.findVariation(event.target.value)
    },


    },
computed:{
    selectedVariationId(){
        if(!this.findVariation(this.variId.id)){
            return ''
        }

        return this.variId.id
    }
},
    watch:{
        'form.variation' () {


            this.form.quantity = 1


        }
    },
async asyncData({ params, app}){
    let response = await app.$axios.$get(`products/${params.slug}`)
 
    return {
        product : response.data,

    }
},
head(){
  return{
    title:  typeof this.product.name != "undefined" ? this.product.name : 'Product Page',
    meta:[
      {
      hid:this.product.name,  name:this.product.name,content:this.product.description
      }
    ]
  }
}
}
</script>

<style>

</style>
