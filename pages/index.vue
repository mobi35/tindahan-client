<template>
 <div>
     <GKCarousel/>
   <BestSeller :product="product"/>
    <Gallery/>
     <Instagram/>
 </div>
</template>


<script>
import {mapGetters} from 'vuex'
import GKCarousel from '~/components//GKCarousel'
import BestSeller from '~/components//ProductSlider'
import Gallery from '~/components/Social/Gallery'
import Instagram from '~/components/Social/Instagram'

export default{
   data(){
    return {
      product : []
    }
  },
components: {
 GKCarousel,BestSeller,Gallery,Instagram
},
computed: {
  ...mapGetters({
      categories: 'categories'
  })
},

async asyncData({ app}){
    let response = await app.$axios.$get(`showvar`)
      
    return {
        product : response.data,

    }
}

}





</script>

