<template>

    <tr>
    
        <td class="  py-3 px-4">  <notifications group="result" />{{order.created_at}}</td>
        <td class=" py-3 px-4">{{order.subtotal}}</td>
        <td class="  py-3 px-4">  <div v-for="variation in products" :key="variation.id">
         <nuxt-link :to="{
            name:'products-slug',
            params:{
              slug: variation.product.slug
            }
           }">
         <p>  {{variation.product.name}} ({{variation.name}}) - {{variation.type}} </p>
           </nuxt-link>

           </div>
           <template v-if="moreProducts > 0" >
            <p>  and {{moreProducts}} more</p>
           </template>
 </td>
        <td class="  py-3 px-4">   <component :is="order.status"/>  </td>
        <td class="flex-wrap w-full  py-3 px-4">  
         
          <div v-if="$auth.user.role !== 'admin'"> 
          <div class="flex"> 
          <input type="file" name="image" id="image" class="form-control" @change="imagePreview($event)">
        <button class="border-2 p-1" @click="SubmitForm"> Upload</button>
        </div>
        </div>

        <div v-else> 
          <div class="flex"> 
            <div class=" w-1/2"> 
      
           <inner-image-zoom class="h-64" :src="`http://127.0.0.1:8000/storage/${order.image_name}`"/>
            </div>
            <div v-if="order.status !== 'completed' && order.status != 'payment_failed'" class=" w-1/2"> 
            <button class="border-2 p-1 mx-4" @click="pay">Paid</button>
             <button class="border-2 p-1 " @click="cancel">Cancel</button>
             </div>
          </div>
        </div>


           </td>
      </tr>



</template>

<script>
import InnerImageZoom from  'vue-inner-image-zoom'
import OrderStatusPaymentFailed from '@/components/orders/statuses/OrderStatus-payment_failed'
import OrderStatusPending from '@/components/orders/statuses/OrderStatus-pending.vue'
import OrderStatusProcessing from '@/components/orders/statuses/OrderStatus-processing.vue'
import OrderStatusCompleted from '@/components/orders/statuses/OrderStatusCompleted.vue'
import { mapActions} from 'vuex'
export default{
  components:{
    'payment_failed' : OrderStatusPaymentFailed,
    'pending' : OrderStatusPending,
    'processing' : OrderStatusProcessing,
    'completed' : OrderStatusCompleted,
    InnerImageZoom
  },
  data(){
    return {
        maxProducts:2,
        statusClasses:{
            'is-success' : this.order.status=='complete',
            'is-info' : this.order.status == 'processing' || this.order.status == 'pending',
            'is-danger' : this.order.status == 'payment_failed'
            },
          imgForm: {
            pic : ''
          }
    }
  },
  props:{
    order: {
    required:true,
    type:Object
    }
  },
  computed:{
    products(){
      return this.order.products.slice(0,this.maxProducts)
    },
    moreProducts(){
      return this.order.productslength - this.maxProducts
    }
  },
  methods:{
        ...mapActions({
        flash:'alert/flash'
    }),

    imagePreview(event) {
    let selectedFile = event.target.files[0];
    this.imgForm.pic = selectedFile;
   
   console.log(selectedFile);
 
},
async pay({app}){
     let formData = new FormData();
    formData .append('id',   this.order.id);
await this.$axios.$post('orders/pay', formData , {
  headers : {
    'Header' : 'Access-Control-Allow-Origin'
   }
}).then(response => {
  this.$emit('updateStatus','success')  
});
},
async cancel({app}){
     let formData = new FormData();
    formData .append('id',   this.order.id);
await this.$axios.$post('orders/cancel', formData , {
  headers : {
    'Header' : 'Access-Control-Allow-Origin'
   }
}).then(response => {
  this.$emit('updateStatus','success')  
});
},
async SubmitForm({app}){

    let formData = new FormData();
    formData .append('image',   this.imgForm.pic);
    formData.append('order_id',this.order.id);
 let response = await this.$axios.$post('orders/uploadPayment', formData, {

   headers : {
     'Content-Type' : 'multipart/form-data'
   }
   }).then(response => {
     console.log(response);
   // this.flash(response,'success');

        this.$notify({
  group: 'result',
  title: 'GK CLothing',
  text: 'We have receive the payslip. Please wait for the admin to confirm it.'
});
document.getElementById('image').value = '';
   }).catch(e => {
     console.log(e);
   });

}

  }
}
</script>

<style>

</style>
