<template>
    <div style="margin : 10%;">
        <h1>Base Product</h1>
<form>
      <div > 
        <span>Product</span>
        <input :model="product" type="text" style="background-color:red;"  />
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

        <button >Save</button>

</form>

    </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
  ...mapGetters({
      categories: 'categories'
  })
},
data(){
  return { 
   product: ''
  }
}

}
</script>

<style>

</style>