<template>
<div> 

  <template v-for="category in categories.data">
    <template v-if="category.children != null && category.children.length">
      <nuxt-link class="bg-teal-500"
      :to="{ name : 'categories-slug', params: {slug:category.slug}}"
      :key="category.slug"
      >

      {{ category.name }}
        
      </nuxt-link>

        <template>
          <nuxt-link class="bg-teal-200" v-for="child in category.children" :key="child.slug" :to="{ name : 'categories-slug', params: {slug:category.slug}}"> 

              {{child.name}}

          </nuxt-link>
        </template>

    </template>
    <template v-else>
         <nuxt-link
      :to="{ name : 'categories-slug', params: {slug:category.slug}}"
      :key="category.slug"
      >

      {{ category.name }}
        
      </nuxt-link>
    </template>



  </template>

<template v-if="!$auth.loggedIn"> 
<nuxt-link :to="{name : 'auth-signin'}">
  Sign in
</nuxt-link>
</template>

<template  v-else>
<div class="bg-teal-300"> 
<a href="#"> {{$auth.user.name}} </a>
<a href="#"> CART (0)</a>
<a href="#"> Orders </a>
<nuxt-link href="#"> Logout </nuxt-link>
</div>
</template>

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


