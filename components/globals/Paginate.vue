<template>
  <div>
     <template >
        <button :disabled="currentPage < lastPage ? false : true  "  @click.prevent="nextPage(currentPage)" >
            <span>Next</span>
        </button>
      </template> <br>

      <div v-for="item in lastPage" :key="item">
        <button @click.prevent="goPage(item,'')" class="mx-4 bg-green-500">
            {{item}}
        </button>
      </div>

          <template>
        <button :disabled="currentPage <= lastPage && currentPage > 1 ? false:true" @click.prevent="prevPage(currentPage)" >
            <span>Previous</span>
        </button>
      </template>
  </div>

</template>

<script>
export default {
props:{
    url:{
        required : true,
        type: String
    },
    currentPage:{
      required : true,
      type: String
    },
     parameter: {
      required:true,
      type:String
    }
},



}

</script>

<style>

</style>
