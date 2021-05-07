<template>
<div>
  <br><br><br><br>
  <form >
  <label>Name</label>
<input v-model="name" style="background-color:red;" type = "text"/>
 <br>

  <label>Slug</label>
<input v-model="slug" style="background-color:red;" type = "text"/>
 <br>

   <label>Description</label>
<input v-model="description" style="background-color:red;" type = "text"/>
 <br>

  <label>Price</label>

<input v-model="price" style="background-color:red;" type = "text"/>
<br>

<select v-model="category">
<option v-for="shit in categories.data" :key="shit.id" :value="shit.name" > {{ shit.name }}</option>
</select>

<br>

<button @click.prevent="sendData()">Save</button>
</form>

 <vue-good-table
      :columns="columns"
      :rows="products.data"
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

     <nuxt-link
      :to="{ name : 'admin-product-slug', params: {slug:props.row.slug}}"
      :key="category.slug"
      >

       manage
       </nuxt-link>
    </span>


  </template>
 </vue-good-table>


</div>
</template>

<script>
import { mapActions } from 'vuex'
import {mapGetters} from 'vuex'
export default {
    computed: {
  ...mapGetters({
      categories: 'categories',
      products : 'product/products'
  })
},middleware:[
  'adminOnly'
],

methods:{
   ...mapActions({
            store: 'product/store'
        }),

  sendData(){

   this.store(
        {
          name: this.name,
          slug: this.slug,
          description: this.description,
          price : this.price + '00',
          category: this.category
          }

        )
  name = ''
  slug =''
  description = ''
  price = ''

  }
},
data(){
  return {
 columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Price',
          field: 'price',
          type: 'number',
        },
        {
          label: 'Slug',
          field: 'slug',
        },
        {
          label: 'Description',
          field: 'description',

        },   {
          label: 'action',
          field: 'action',

        },
      ],

    name: '',
    slug: '',
    description: '',
    price: '',
    category :'',
    categoryDefault: ["burat","kalakot"]
  }
}

}
</script>

<style>

</style>