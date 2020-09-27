<template>
  <div class="container">
    <div>
       <h1 class="title">
  
        
      </h1>
  
     

    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default{

computed: {
  ...mapGetters({
      categories: 'categories'
  })
}

}

</script>

