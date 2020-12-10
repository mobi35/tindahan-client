<template>


<div  class="mx-10 text-sm">
  <template v-for="category in categories.data">
    <template v-if="category.children != null && category.children.length">
      <nuxt-link
      :to="{ name : 'categories-slug', params: {slug:category.slug}}"
      :key="category.slug"
      >

      - {{ category.name }}

      </nuxt-link>
           <br/>
        <template>
          <nuxt-link class="ml-4 text-gray" v-for="child in category.children" :key="child.slug" :to="{ name : 'categories-slug', params: {slug:child.slug}}">

             - {{child.name}}

          </nuxt-link>
        </template>

    </template>
    <template v-else>
         <nuxt-link
      :to="{ name : 'categories-slug', params: {slug:category.slug}}"
      :key="category.slug"
      >

     - {{ category.name }}

      </nuxt-link> <br>
    </template>



  </template>

</div>

</template>
<script>
import {mapGetters} from 'vuex'
export default{
computed: {
  ...mapGetters({
      categories: 'categories',
      cartCount: 'cart/cartCount'
  })
}
}
</script>
<style>

</style>
