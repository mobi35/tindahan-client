<template>
  <AddProduct :form="form" />
</template>

<script>
import AddProduct from './AddProduct'
export default {
components:{
    AddProduct
} ,
 data(){
    return {
      url:"http://localhost:8000/api/products",
      form: { name : "", price : "" , category: "", slug : "", editable: false}
    };
  },
methods:{
    onFormSubmit(data){
      this.isAdding = true;
      this.form = data;
      this.form.name = data.product;
      window.console.log("app onsubmit",data);
      this.createProduct();
    },
   async createProduct(){
      
    await  axios.post(this.url ,{
        name: this.form.name,
        slug : this.form.slug,
        price : this.form.price,
        category: this.form.category
      }).then(function () {
      })
     await  axios.get(this.url).then(data => {
        this.products = data.data.data;
      })

    }
}
}
</script>

<style>

</style>