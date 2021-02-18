<template>
    <div style="margin : 10%;">
        <h1>Base Product</h1>
  <div > 
        <span>Product</span>
        <input type="text" style="background-color:red;"  name="product"/>
        </div>
        
        <div > 
        <span>Category</span>
        <input type="text" style="background-color:red;"  name="category" />
        </div>

    <br> 
        <div > 
        <span>Product Price</span>
        <input type="text" style="background-color:red;"  name="price" />
        </div>
    <br> 

          <div > 
        <span>Slug</span>
        <input type="text"  name="slug"/>
        </div>

        <button @click="onFormSubmit" >Save</button>

    </div>
</template>


<script>
export default {
  props: {
      form: {
        type:Object,
      }
  },
  methods: {
    
      onFormSubmit(e){
          e.preventDefault();
        var newForm = this.form;
        var product = document.getElementsByName("product")[0].value;
        var price = document.getElementsByName("price")[0].value;
        var category = document.getElementsByName("category")[0].value;
        var slug = document.getElementsByName("slug")[0].value;
        newForm.product = category;
        newForm.price = price;
        newForm.product = product;
        newForm.slug = slug;
        alert("done");
          this.$emit("onFormSubmit",newForm);
      }
  }

}
</script>

<style>

</style>