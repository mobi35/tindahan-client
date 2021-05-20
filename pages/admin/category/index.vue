<template>
  <div>



<br><br><br><br>
<form>
    <input style="background-color:red;" type="text" v-model="category">
    <button @click.prevent="submit">submit</button>
</form>
 <vue-good-table
   :search-options="{
        enabled: true
      }"
      :columns="columns"
      :rows="categories.data"
      :pagination-options="{
    enabled: true,
    mode: 'records',
    perPage: 5,
    position: 'top',
    perPageDropdown: [3, 7, 9],
    dropdownAllowAll: false,
    setCurrentPage: 2,
    nextLabel: 'next',
    prevLabel: 'prev',
    rowsPerPageLabel: 'Rows per page',
    ofLabel: 'of',
    pageLabel: 'page', // for 'pages' mode
    allLabel: 'All',

  }"
      >
 <template slot="table-row" slot-scope="props">

   <span v-if="props.column.field == 'action'">

       <button @click.prevent="deleteCat(`${props.row.id}`)">
         Delete
       </button>
    </span>


  </template>
 </vue-good-table>


</div>

</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions({
            store : 'store',
            fetch : 'nuxtServerInit',
            destroy : 'destroy'
        }),
        submit(){
            this.store({
                name : this.category
            })
            this.fetch()
        },
        deleteCat(id){
            this.destroy(id)
            .catch((e) => {
                alert('Please change the other product with this category')
            })
            this.fetch()
        }
    },
    data(){
        return {
            category : '',
            columns: [
          {
          label: 'name',
          field: 'name',
        },
 {
          label: 'action',
          field: 'action',

        }
      ]
        }
    },
      computed: {
  ...mapGetters({
      categories: 'categories',
  })
}
}
</script>

<style>

</style>