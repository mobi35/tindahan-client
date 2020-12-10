<template>
 <div>
     <GKCarousel/>

 </div>
</template>


<script>
import {mapGetters} from 'vuex'
import GKCarousel from '~/components//GKCarousel'
import BestSeller from '~/components//ProductSlider'
import Gallery from '~/components/Social/Gallery'
import Instagram from '~/components/Social/Instagram'

export default{
components: {
 GKCarousel,BestSeller,Gallery,Instagram
},
computed: {
  ...mapGetters({
      categories: 'categories'
  })
}

}

</script>

