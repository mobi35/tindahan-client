<template>
  <div>



<div class="container max-w-full mx-auto py-24 px-6">
  <div class="font-sans">
  <div class="max-w-sm mx-auto px-6">
    <div class="relative flex flex-wrap">
      <div class="w-full relative">
        <div class="mt-6">
           <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700">

          </div>
          <div class="text-center font-semibold text-black">
           Godskeeper Clothing
          </div>

          <form class="mt-8" action="" @submit.prevent="signin">
            <div class="mx-auto max-w-lg">
              <div class="py-2">
                <span class="px-1 text-sm text-gray-600">Username</span>
                <input placeholder="" v-model="form.email" type="email"
                  class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
              </div>


               <div class="py-2">
                <span class="px-1 text-sm text-gray-600">Password</span>
                <input placeholder="" v-model="form.password"  type="password"
                  class="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
              </div>



              <div class="flex justify-between"><label class="block text-gray-500 font-bold my-4"><input type="checkbox"
                    class="leading-loose text-pink-600"> <span class="py-2 text-sm text-gray-600 leading-snug"> Remember
                    Me </span></label> <label class="block text-gray-500 font-bold my-4"><a
                    href="#"
                    class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"><span>Forgot
                      Password?</span></a></label></div> <button class="mt-3 text-lg font-semibold
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                Login
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</div>



  </div>








</template>

<script>
export default {
      data() {
        return {
            form:{
                email:'',
                password: ''
            }
        }
    },
    middleware:[
      'redirectAuthenticated'
    ],
methods:{

    async signin(){
        await this.$auth.loginWith('local',{
            data : this.form
        })

        if(this.$route.query.redirect){
          this.$router.replace(this.$route.query.redirect)
          return
        }

        this.$router.replace({
            name:'index'
        })
    }
}
}
</script>

<style>

</style>
