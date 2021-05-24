<template>
  <div>
   
    <br><br><br><br><br>
     <nuxt-link to="/admin/product">Back</nuxt-link>
      <h1>{{this.product}}</h1>
       <h1>{{this.price}}</h1>


<AddVariation @updateClick="UpdateIt"  :slug="slug" :variationTypes="variationTypes" :prodId="productId" v-if="showModal"  @close="showModal = false;">
<div slot="body">
  <h1></h1>
</div>
</AddVariation>

   <button id="show-modal" @click="showModal = true">Add Something</button>


<EditVariation @updateClick="UpdateIt" :variationType="variationType" v-if="editModal" :variation="selectedProductVariation" @close="editModal = false" :modal="editModal">

</EditVariation>
<StockVariation :variationId="currentId" @close="stockModal = false" :stockModal="stockModal">

</StockVariation>

<button @click.prevent="variationsGet">View</button>
<div > 
   <client-only>
 <vue-good-table v-if="showData"
      :search-options="{
        enabled: true
      }"
      :columns="columns"
      :rows="productVariation.data"
      :pagination-options="{
    enabled: true,
    mode: 'records',
    perPage: 5,
    position: 'top',
    perPageDropdown: [3, 7, 9],
    dropdownAllowAll: false,
    setCurrentPage: 2,
    nextLabel: 'next',
    prevLabel: 'prev',
    rowsPerPageLabel: 'Rows per page',
    ofLabel: 'of',
    pageLabel: 'page', // for 'pages' mode
    allLabel: 'All',

  }"
      >

       <template slot="table-row" slot-scope="props">
   <span v-if="props.column.field == 'action'">
       <button @click="deleteVariation(`${props.row.id}`)">delete</button>

         <button @click="editVar(`${props.row.id}`)">edit</button>

          <button @click="stocks(`${props.row.id}`)">add stock</button>
    </span>
  </template>

 </vue-good-table>
  </client-only>
</div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import axios from 'axios'
import StockVariation from '~/components/productVariation/Stock'
import EditVariation from '~/components/productVariation/Edit'
import AddVariation from '~/components/products/AddVariation'
export default {
computed:{
  ...mapGetters({
    selectedProductVariation : 'productVariation/selectedProductVariation',
    variationType : 'productVariationType/productVariationType',
    productVariation : 'productVariation/productVariation'
  })
},
components:{
  AddVariation,EditVariation,StockVariation
},
data(){
return {
  variations : {},
  showModal : false,
  currentId : "0",
  editModal : false,
  stockModal : false,
  showData : false,
  slug : '',
  columns: [
        {
          label: 'Size',
          field: 'name',
        },
        {
          label: 'Price',
          field: 'formatted',
        },
        {
          label: 'Color/Type',
          field: 'type',
        },
           {
          label: 'action',
          field: 'action',
        },
      ],
}
},
async asyncData({ params, app}){
    let response = await app.$axios.$get(`products/${params.slug}`)
    let repa = await app.$axios.$get(`getVariations?slug=${params.slug}`)
    let variationTypes = await app.$axios.$get(`variationtype`);

   return {
     product : response.data.name,
      price :response.data.price,
       description : response.data.description,
        productSlug : response.data.slug,
        productId : response.data.id,
       
        variationTypes : variationTypes,
        slug : params.slug
    }
},
mounted(){
 this.getProdVariation(this.slug)

},
methods:{
  UpdateIt(){
    this.editModal = false;
   this.getProdVariation(this.slug)
  },
  ...mapActions({
    editVariation : 'productVariation/Edit',
    destroyVar : 'productVariation/destroy',
    getProdVariation : 'productVariation/getProdVariation'
  }),
  variationsGet(){
    this.showData = true;
  },
   editVar(id){
     this.editVariation(id).then(e => {
        this.editModal = true;
     })



  },
  stocks(id){
    this.currentId = id
this.stockModal = true;
  },
  deleteVariation(id){
     this.destroyVar(id)
      this.getProdVariation(this.slug)
  }
}

}
</script>

<style>

</style>