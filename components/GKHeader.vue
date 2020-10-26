<template>
<div  class="w-full ">

<div class="flex justify-between">

  <nav v-on:click="away()" id="gk-nav" class="z-10  top-0  mobile:fixed  bg-black  md:bg-opacity-40 overflow-hidden text-white flex flex-wrap md:flex-no-wrap
    md:items-center w-full md:fixed xl:px-20  md:h-24 md:px-2  ">

        <ul class=" w-full md:flex  md:items-center" >
          <img class=" cursor-pointer logo   mb-2 mt-2 h-16 my-1 xl:mr-12    md:mr-4 mx-auto md:mx-0 mobile:h-8" src="~/assets/logo.png" alt=""/>
         <div id="menu" ref="menu" class=" mobile:p-2   mobile:h-full z-20 mobile:rounded-br-lg mobile:pt-12 mobile:text-2xl mobile:top-0 mobile:bg-black mobile:w-4/5 mobile:fixed mobile:transform mobile:-translate-x-full  h-auto     md:flex   duration-200 ease-in  font-sans xl:text-lg text-xs  tracking-gkwide" >
          <li class="border-gray-100 border-t  border-b  md:mr-4  md:pl-2 md:pr-1 md:py-2  transition duration-500 ease-in-out  md:border md:border-transparent rounded-sm    text-center md:hover:border-white md:border-white"><nuxt-link to="/">HOME</nuxt-link></li>

                   <li class="border-gray-100 border-b md:mr-4  md:pr-1 md:py-2 pl-2 transition duration-500 ease-in-out  md:border md:border-transparent rounded-sm   text-center md:hover:border-white" ref="product" > <nuxt-link to="/Product">SHOP</nuxt-link>  </li>

          <li class="border-gray-100 border-b  md:mr-4 md:pr-1 md:py-2 pl-2 transition duration-500 ease-in-out  md:border md:border-transparent rounded-sm    text-center md:hover:border-white"><nuxt-link to="/About">ABOUT</nuxt-link></li>
          <li class="border-gray-100 border-b  md:mr-4 md:pr-1 md:py-2 pl-2 transition duration-500 ease-in-out  rounded-sm   text-center md:border md:border-transparent md:hover:border-white "><nuxt-link to="/Contact">CONTACT</nuxt-link></li>
        </div>
        </ul>
        <label for="hamburger"  class="md:hidden absolute z-50">
        <svg viewBox="0 0 20 20" fill="currentColor" class=" m-2 cursor-pointer menu w-6 h-6"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
         </label>
         <input class=" hidden " ref="hamburgerCheckBox"  @change="chance($event)" checked="false" type="checkbox" id="hamburger" />

     <div class="w-full text-right">

    <template v-if="!$auth.loggedIn">
<nuxt-link :to="{name : 'auth-signin'}">
  Sign in
</nuxt-link>
</template>

    <template  v-else>

    <a href="#">Hi, {{$auth.user.name}} | </a>

    <nuxt-link :to="{name:'orders'}"> Orders  |</nuxt-link>
      <nuxt-link :to="{name:'cart'}"> CART ({{cartCount}})</nuxt-link>

    </template>
  </div>

  </nav>


</div>



</div>

</template>



<script>
import {mapGetters} from 'vuex'

export default{
  data(){
    return {
        ev : false
    }
  },
computed: {
  ...mapGetters({
      categories: 'categories',
      cartCount: 'cart/cartCount'
  })
},
  methods:{
    chance(event){

      if(this.$refs.hamburgerCheckBox.checked){
         this.$refs.menu.classList.remove('mobile:transform','mobile:-translate-x-full');
         this.$refs.menu.classList.add('mobile:transform','mobile:-translate-x-full');
      }else{
         this.$refs.menu.classList.remove('mobile:transform','mobile:-translate-x-full');
         this.$refs.menu.classList.add('mobile:transform','mobile:-translate-x-0');
      }
    },
    away(){
           this.$refs.menu.classList.remove('mobile:transform','mobile:-translate-x-full');
         this.$refs.menu.classList.add('mobile:transform','mobile:-translate-x-full');
    }
  }

}

</script>



<style>
  .logo{
    filter: brightness(0) invert(1);
  }
      #mainSearchBar:hover #searchResult {
        max-height: 1000px;
  transition: max-height 1s ease-in-out;
      }

body{
  width:100%;
}

</style>


