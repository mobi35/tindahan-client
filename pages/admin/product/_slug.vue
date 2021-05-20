<template>
  <div>
    <br><br><br><br><br>
      <h1>{{this.product}}</h1>
       <h1>{{this.price}}</h1>


<AddVariation :slug="slug" :variationTypes="variationTypes" :prodId="productId" v-if="showModal"  @close="showModal = false;">
<div slot="body">
  <h1></h1>
</div>
</AddVariation>

   <button id="show-modal" @click="showModal = true">Add Something</button>


<EditVariation @updateClick="UpdateIt" :variationType="variationType" v-if="editModal" :variation="selectedProductVariation" @close="editModal = false" :modal="editModal">

</EditVariation>
 <vue-good-table
      :search-options="{
        enabled: true
      }"
      :columns="columns"
      :rows="variations"
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
    </span>
  </template>

 </vue-good-table>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import axios from 'axios'
import EditVariation from '~/components/productVariation/Edit'
import AddVariation from '~/components/products/AddVariation'
export default {
computed:{
  ...mapGetters({
    selectedProductVariation : 'productVariation/selectedProductVariation',
    variationType : 'productVariationType/productVariationType'
  })
},
components:{
  AddVariation,EditVariation
},
data(){
return {
  variations : {},
  showModal : false,
  editModal : false,
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
        variations : repa.data,
        variationTypes : variationTypes,
        slug : params.slug
    }
},
methods:{
  UpdateIt(){
   // alert("yes emitted")
   alert(this.slug)
      let repa =  axios.get(`http://127.0.0.1:8000/api/getVariations?slug=${this.slug}`)
      console.log(this.slug)
  this.variations = repa.data
  },
  ...mapActions({
    editVariation : 'productVariation/Edit'
  }),
   editVar(id){
     this.editVariation(id).then(e => {
        this.editModal = true;
     })



  },
  deleteVariation(id){
       let response =  axios.post(`http://127.0.0.1:8000/api/deleteVariation`,{
       'id' :  id
       })
       .then(function (response) {
  })
  .catch(function (error) {
  });
      // console.log(response)
  }
}

}
</script>

<style>

</style>