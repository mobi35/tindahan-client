<template>
<div class="z-10">
<!-- Modal -->



  <br><br><br><br>
  <form class="z-50" >
  <label>Name</label>
<input v-model="name" style="background-color:red;" type = "text"/>
 <br>
   <label>Description</label>
<input v-model="description" style="background-color:red;" type = "text"/>
 <br>

  <label>Price</label>

<input v-model="price" style="background-color:red;" type = "text"/>
<br>

<select v-model="category">
<option v-for="shit in categories.data" :key="shit.id" :value="shit.id" > {{ shit.name }}</option>
</select>

<br>

<button @click.prevent="sendData()">Save</button>
</form>
{{imgForm.pic}}

<div :class="sizeChartModal ? 'opacity-100 block z-50' : 'opacity-0 hidden z-0'" class="modal  absolute w-full h-full top-0 left-0 flex  items-center justify-center">
  <div @click="closeSizeChart()" class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 "></div>
  <div class="absolute w-1/2 h-32rem bg-white rounded-sm shadow-lg flex items-center justify-center text-2xl">
     <form enctype="multipart/form-data">
  <input id="image" type="file" name="image" class="form-control" @change="imagePreview($event)">
  <input type="text" v-model="currentId"/>
<button @click.prevent="SubmitForm()">update</button>
</form>
  </div>
</div>

<div   :class="modal ? 'opacity-100 block z-50' : 'opacity-0 hidden z-0'" class="modal  absolute w-full h-full top-0 left-0 flex  items-center justify-center">
  <div @click="closeModal()" class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 "></div>
  <div class="absolute w-1/2 h-32rem bg-white rounded-sm shadow-lg flex items-center justify-center text-2xl">
     <form >
  <label>Name</label>
<input v-model="updateForm.name" style="background-color:red;" type = "text"/>
 <br>
   <label>Description</label>
<input v-model="updateForm.description" style="background-color:red;" type = "text"/>
 <br>
  <label>Price</label>
<input v-model="updateForm.price" style="background-color:red;" type = "text"/>
<br>
<select v-model="updateForm.category">
<option v-for="shit in categories.data" :key="shit.id" :value="shit.id" > {{ shit.name }} </option>
</select>
<br>
<button @click.prevent="updateData()">Save</button>
</form>
  </div>
</div>

 <vue-good-table
   :search-options="{
        enabled: true
      }"

      :sort-options="{
      enabled: true,
      initialSortBy: {field: 'id', type: 'desc'}
       }"
      :columns="columns"
      :rows="adminProducts.data"
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
  <span v-if="props.column.field == 'sizeChart'">
      <h1>{{props.row.sizeImage}}</h1>
    </span>
   <span v-if="props.column.field == 'price'">
      <h1>{{props.row.price}}</h1>
    </span>
    <span class="flex space-x-8"  v-if="props.column.field == 'name'">
       <h1>{{props.row.name}}</h1>       <div :class="props.row.feature ? 'display' : 'hidden'" style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-orange-200 text-yellow-800 rounded-full">Bestseller</div>
    </span>

     <span v-if="props.column.field == 'categoryname'">
       <h1>{{props.row.categoryname}}</h1>
    </span>

      <span v-if="props.column.field == 'description'">
       <h1>{{props.row.description}}</h1>
    </span>
   <span v-if="props.column.field == 'action'">

     <nuxt-link
      :to="{ name : 'admin-product-slug', params: {slug:props.row.slug}}"
      :key="category.slug"
      >
       manage
       </nuxt-link>

       <button @click.prevent="deleteProduct(`${props.row.id}`)">
         Delete
       </button>

         <button @click.prevent="editProduct(`${props.row.id}`)">
         Edit
       </button>

          <button @click.prevent="updateSizeChart(`${props.row.id}`)">
         Sizes
       </button>

          <button @click.prevent="makeBest(`${props.row.id}`)">
         Best
       </button>
    </span>


  </template>
 </vue-good-table>


</div>
</template>

<script>
import { mapActions } from 'vuex'
import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
    computed: {
  ...mapGetters({
      categories: 'categories',
      adminProducts : 'product/adminProducts',
      products : 'product/products'
  })
},middleware:[
  'adminOnly'
],

methods:{

     SubmitForm () {
      const formData = new FormData()
      formData.append('image', this.imgForm.pic)
      formData.append('id', this.currentId)

      // eslint-disable-next-line no-unused-vars
      const response =  axios.post(`${process.env.baseURL}/sizeUpload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: this.$auth.$storage._state['_token.local']
        }
      }).then((response) => {
        alert("done")
        document.getElementById('image').value = ''
      }).catch((e) => {
        console.log(e)
      })
    },
  imagePreview (event) {
      const selectedFile = event.target.files[0]
      this.imgForm.pic = selectedFile
    },
  closeSizeChart(){
    this.sizeChartModal = false;
  },
  updateSizeChart(id){
    this.currentId = id
 this.sizeChartModal = true;
  },
  closeModal(){
    this.modal = false;
  },
  editProduct(id){
    this.modal = true;
    this.adminProducts.data.forEach(data=> {

     if(id == data.id){
      console.log(data)
      this.updateForm.id = data.id
      this.updateForm.name = data.name
      this.updateForm.price = data.priceNonFormatted
        this.updateForm.description = data.description
        this.updateForm.category = data.category

       return
     }
    })
  //  console.log(this.products.data)
  },
  deleteProduct(id){

    this.delete(id)
    this.serverData()
  },
   ...mapActions({
            store: 'product/store',
            patch: 'product/patch',
            delete : 'product/destroy',
            updateProducts: 'product/nuxtServerInit',
            serverData : 'product/serverData',
            bestseller : 'product/put'
        }),

  sendData(){

   this.store(
        {
          name: this.name,
          description: this.description,
          price : this.price + '00',
          category: this.category
          }
        )
  this.serverData()
  this.name = null
  this.description =null
  this.price = null

  },
  updateData(){

   this.patch(
        {
          id : this.updateForm.id,
          name: this.updateForm.name,
          description: this.updateForm.description,
          price : this.updateForm.price + '00',
          category: this.updateForm.category
          }
        )
this.serverData()


  },
  makeBest(id){
      this.bestseller(id)
      this.serverData()
  }
},created(){
 this.serverData();
},
data(){
  return {
    currentId : 0,
    imgForm: {
        pic: ''
      },
 columns: [
   {
          label: 'id',
          field: 'id',
          hidden:true
        },
       {
          label: 'size chart',
          field: 'sizeChart',
        },
        {
          label: 'Name',
          field: 'name',
        },   {
          label: 'category',
          field: 'categoryname',

        },
        {
          label: 'Price',
          field: 'price',
          type: 'number',
        },

        {
          label: 'Description',
          field: 'description',

        },   {
          label: 'action',
          field: 'action',

        }
      ],

    name: '',
    description: '',
    price: '',
    category :1,
    modal : false,
    sizeChartModal : false,
    updateForm:{
    id : 0,
    name: '',
    description: '',
    price: '',
    category :'',
    }

  }
}

}
</script>

<style>

</style>