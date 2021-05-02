<template>
  <div>
    <br><br><br><br><br>
      <h1>{{this.product}}</h1>
       <h1>{{this.price}}</h1>


<AddVariation :prodId="productId" v-if="showModal" @close="showModal = false">
<div slot="body">
  <h1></h1>
</div>
</AddVariation>

   <button id="show-modal" @click="showModal = true">Add Something</button>


 <vue-good-table
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

 </vue-good-table>

  </div>
</template>

<script>

import AddVariation from '~/components/products/AddVariation'
export default {
 
components:{
  AddVariation
},
data(){
return {
  showModal : false,
  columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Price',
          field: 'price.money.amount',
          type: 'number',
        },
        {
          label: 'Type',
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
    return {
     product : response.data.name,
      price :response.data.price,
       description : response.data.description,
        productSlug : response.data.slug,
        productId : response.data.id,
        variations : repa.data

    }
},

}
</script>

<style>

</style>