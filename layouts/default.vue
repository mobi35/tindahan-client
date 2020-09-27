<template>
  <div>
 
 <Logo/>
    
    <Nuxt />
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import Logo from '@/components/Logo'
export default{
components:{
  Logo
},
computed: {
  ...mapGetters({
      categories: 'categories'
  })
}

}

</script>