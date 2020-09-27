<template>
  <div>
      <form action="" @submit.prevent="signin"> 
      <input v-model="form.email" type="email" class="bg-red-200 border border-black" > <br>
      <input v-model="form.password" type="password" class="bg-red-200 border border-black"> <br>
      <button>Login</button>
      </form>
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
methods:{
  
    async signin(){
        await this.$auth.loginWith('local',{
            data : this.form
        })

        this.$router.replace({
            name:'index'
        })
    }
}
}
</script>

<style>

</style>