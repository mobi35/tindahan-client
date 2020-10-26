<template>
<form action="#" @submit.prevent="store">
  <div id="card-element">

  </div>

  <button :disabled="storing">Store Card</button>
    <button @click.prevent="$emit('cancel')">Cancel</button>
</form>


</template>

<script>
export default {
data(){
  return {
    stripe: null,
    card: null,
    storing:false
  }
},
methods:{
  async store(){
    this.storing = true
    const {token, error} = await this.stripe.createToken(this.card)

    if(error){
      console.log(error);
    }else {
      let response = await this.$axios.$post('payment-methods',{
        token : token.id
      })


      this.$emit('added',response.data)
    }
  this.storing = false;
  }


},
mounted(){
  const stripe = Stripe('pk_test_51HfEosH7PKnpN1zLxd1qa6f5SK3P3zXePpv36jgCYXgbn4JeUcuQByHygxNq7EtLaZIpa9uz1BgmWoqKgwU7lg9q00X4xkp5qy')

  this.stripe = stripe

  this.card = this.stripe.elements().create('card')
  this.card.mount('#card-element')
}
}
</script>

<style>

</style>
