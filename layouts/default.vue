<template>
  <div>


 <GKHeader v-if=" this.$route.path !== '/auth/signin'"/>



    <Nuxt />

        <div>
      <Alert/>
    </div>

    <GKFooter v-if=" this.$route.path !== '/auth/signin'"/>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import GKHeader from '@/components/GKHeader'
import Alert from '@/components/globals/Alert'
import GKFooter from '@/components/GKFooter'
export default{


components:{
  GKHeader,
  Alert,
  GKFooter
},
computed: {
  ...mapGetters({
      categories: 'categories'
  })
}

}

</script>
