<template>
<div>
<br><br><br><br>
<form>
    <input style="background-color:red" v-model="name" type = "text" />
    <button @click.prevent="create()">submit</button>
</form>
<vue-good-table
   :search-options="{
        enabled: true
      }"
      :columns="columns"
      :rows="types.data"
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

       <button @click.prevent="deleteType(`${props.row.id}`)">
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
            destroy : 'productVariationType/destroy',
            store : 'productVariationType/store',
            fetch : 'productVariationType/serverData'
        }),
        create(){
            this.store({
                name : this.name
            }).then(e => {
                //
            });

            this.fetch();
        },
        deleteType(id){
            this.destroy(id).then(e => {
                this.fetch();
            })
        }

    },
    data(){
        return {
            name : '',

            columns : [
                {
                    label: 'name',
                    field : 'name'
                },
                {
                    label : 'color',
                    field : 'color'
                },
                {
                    label :'action',
                    field : 'action'
                }
            ]
        }
    },
computed:{
    ...mapGetters({
        types : 'productVariationType/productVariationType'
    })
}
}
</script>

<style>

</style>