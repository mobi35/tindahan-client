<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">

                 <form @submit.prevent="sendData" method="post" enctype="multipart/form-data">
                <label>Name</label>
              <input v-model="form.name" style="background-color:red;" type = "text"/>
              <br>

                <label>Price</label>

              <input v-model="form.price" style="background-color:red;" type = "text"/>
            <br><br>

          <select style="background-color:red;" v-model="form.product_variation_type_id">
              <option value="1"> S</option>
              <option value="2">  M</option>
              <option value="3"> L</option>
              <option value="4"> XS</option>
              <option value="5"> XL</option>
              <option value="6"> 2XL</option>
              <option value="7"> 2XS</option>
                <option value="8"> 7</option>
              <option value="9"> 8</option>
               <option value="10"> 9</option>
              <option value="11"> 10</option>
                <option value="12"> 11</option>

          </select>
              <br>

 <dropzone id="foo" ref="dropZ" v-on:vdropzone-sending="sendingImage" :options="dropzoneOptions" :destroyDropzone="true"></dropzone>
              <br>



              <button>Save</button>
              </form>

                <slot name="body">
                  default body
                </slot>


              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  components: {
  Dropzone
},
name : 'show-modal',
props:{
  prodId : {
    required : true,
    type: Number
  },
}
,
data(){
  return {
    form : {
      name : '',
      price : '',
      product_id: 0,

      product_variation_type_id : 0
    }  ,dropzoneOptions: {
        url: `${process.env.baseURL}/storeVariation`,
      //   url: 'https://httpbin.org/post',
        autoProcessQueue: false,
         clickable: true,
            maxFiles: 5,
            parallelUploads: 5,
         uploadMultiple: true,
         acceptedFiles: '.png,.jpg,.pdf'
      }
  }
},
methods:{
  sendData(){

      this.$refs.dropZ.dropzone.processQueue();
  },
  sendingImage(file, xhr, formData){

    formData.append("name", this.form.name);
    formData.append("price", this.form.price);
     formData.append("product_variation_type_id", this.form.product_variation_type_id);
    formData.append("product_id", this.prodId);

  }
}
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 1200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>