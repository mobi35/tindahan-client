<template>
  <div>

    <div>
      <Alert/>
    </div>

 <Logo />


    <Nuxt />
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import Logo from '@/components/Logo'
import Alert from '@/components/globals/Alert'
export default{
components:{
  Logo,
  Alert
},
computed: {
  ...mapGetters({
      categories: 'categories'
  })
}

}

</script>
