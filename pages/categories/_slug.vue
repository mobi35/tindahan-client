<template>
<div>
  <div>

  </div>
      <div class="my-24  grid grid-flow-col auto-cols-max ">

        <div class=" sm:1/2  md:w-40">

        <ProductCategories/>
        </div>

          <div class="block col-auto py-4">
           <BreadCrumb/>
          
         <div class="flex w-full justify-start pr-2 ">
        
           <div class="sm:w-full md:w-1/6 py-2  " v-for="product in products" :key="product.slug">
             <Product :product="product"/>
        </div>
        </div>

</div>


      </div>


  <ul class="flex justify-center">
        <li v-bind:class="[currentPage <= lastPage && currentPage > 1 ? ['text-gray-700','hover:bg-gray-700','hover:text-gray-200']  :  ['text-gray-500','hover:bg-gray-200'] ]"  @click.prevent="prevPage(currentPage)"  class="mx-1 px-3 py-2 bg-gray-200 rounded-lg">
            <a class="flex items-center font-bold" href="#">
                <span :disabled="currentPage <= lastPage && currentPage > 1 ? false:true" class="mx-1">previous</span>
            </a>
        </li>
          <div v-for="item in lastPage" :key="item">

        <li @click.prevent="goPage(item,'')"  class="cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <span  class="font-bold block" href="#">{{item}}</span>
        </li>

       </div>

        <li v-bind:class="[currentPage < lastPage ? ['text-gray-700','hover:bg-gray-700','hover:text-gray-200']  :  ['text-gray-500','hover:bg-gray-200'] ]"  @click.prevent="nextPage(currentPage)" class="mx-1 px-3 py-2 bg-gray-200    rounded-lg">
            <a class="flex items-center font-bold" href="#">
                <span :disabled="currentPage < lastPage ? false : true  "  class="mx-1">Next</span>
            </a>
        </li>
    </ul>

      </div>

</template>

<script>
import Product from '@/components/products/Product'
import ProductCategories from '@/components/products/ProductCategories'
import BreadCrumb from '@/components/globals/BreadCrumb'
export default {
  name: 'categoriess',
  components:{
    Product,
    ProductCategories,
    BreadCrumb
  },

    data(){
        return {
            products: [],
            lastPage:1,
            next:null,
            previous:null,
            currentPage:0,
            parameter: '',
            baseURL:'',
            title: 'GK - '
        }
    },head(){
         return {
        title: typeof this.parameter != 'undefined' ? this.title + this.parameter : this.title + 'Categories'   ,
        meta: [
          {
            hid: 'GK Product Categories',
            name: 'category',
            content: 'GK Product Category page'
          }
        ]
      }

    },
async asyncData({ params, app}){
    let response = await app.$axios.$get(`products?category=${params.slug}`)
    console.log(response.data);
    return {
        products : response.data,
        next: response.links.next,
        previous: response.links.prev,
        lastPage: response.meta.last_page,
        currentPage: response.meta.current_page,
        parameter : params.slug,
        baseURL: response.meta.path
    }
},

methods:{

 async nextPage(currentPage){
   if(currentPage >= this.lastPage)
   {
     return
   }
  currentPage++;
 let url = `${this.baseURL}?category=${this.parameter}&page=${currentPage}`
   await this.$axios.$get(url).then((res) => {
     this.products = res.data
     this.next = res.links.next
     this.previous = res.links.prev
     this.currentPage = res.meta.current_page
     this.lastPage = res.meta.last_page

    })
  },async prevPage(currentPage){
     if(currentPage <= 1)
   {
     return
   }
    currentPage--;
 let url = `${this.baseURL}?category=${this.parameter}&page=${currentPage}`

   await this.$axios.$get(url).then((res) => {
     this.products = res.data
     this.next = res.links.next
       this.previous = res.links.prev
     this.currentPage = res.meta.current_page
     this.lastPage = res.meta.last_page
    })


  }, async goPage(page){
    if(this.currentPage != page){
      let url = `${this.baseURL}?category=${this.parameter}&page=${page}`
       await this.$axios.$get(url).then((res) => {

     this.products = res.data
     this.next = res.links.next
       this.previous = res.links.prev
     this.currentPage = res.meta.current_page
     this.lastPage = res.meta.last_page

     return {
         products : res.data,
        next: res.links.next,
        previous: res.links.prev,
        lastPage: res.meta.last_page,
        currentPage: res.meta.current_page,
     }

    })

    }

  }
}




}
</script>
