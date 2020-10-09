<template>
      <div>
          <br>
          <h1>Products</h1>
          <div class="product">
                   <div class="product-image"></div>
              <div class="product-name"> product name:  {{ product.name }}</div>
               <div class="product-name" v-if="product.description">product desc: {{ product.description }}</div>
             
             <div class="bg-black text-white" v-if="!product.in_stock">Out of stock</div>
              <div class="product-price">{{ product.price}}</div>
          </div>
          <section>
              <form action="" @submit.prevent="add">
                  <ProductVariation
                     v-for="(variations,type) in product.variations"
                    :key="type"
                    :variations="variations"
                    :type="type"
                    v-model="form.variation"
                  />

                  {{form}}
            <div v-if="form.variation"> 
                <div class="control">
                    <select name="
                    " id="" v-model="form.quantity">
                    
                   <option :value="x" v-for="x in parseInt(form.variation.stock_count)" :key="x">
                       {{x}}
                   </option>
                    
                    </select>
                </div>
                <div class="control">
                    <button>
                        Add To Cart
                    </button>
                </div>
            </div>

              </form>
          </section>
      </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductVariation from '@/components/products/ProductVariation'
export default {
    data(){
        return {
            product: null,
            form:{
                variation:'',
                quantity:1
            }
        }
    },components:{
        ProductVariation
    },
    methods: {
        ...mapActions({
            store: 'cart/store'
        }),
         add(){
             this.store([
                 {
                     id: this.form.variation.id,
                     quantity: this.form.quantity
                 }
             ])

             this.form = {
                 variation : '',
                 quantity : 1
             }
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
        product : response.data
    }
}
}
</script>

<style>

</style>