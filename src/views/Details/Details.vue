<template>
  <div class="details">
      <div class="details__view">
        <Photo :mainShoe="false" :shoe="shoe[0]"/>
        <Detail :shoe="shoe[0]"/> 
      </div>
  </div>
</template>

<script>
import Photo from '@/components/Photo/Photo.vue'
import fetchShoe  from '@/fetch/fetchShoe.js'
import Detail from '@/components/Detail/Detail.vue'

export default {
    props:{
        id:{
            type:String,
            required:true
        }
    },
    components:{
         Photo,
         Detail
    },
    setup(props) {
        const {shoe,load} = fetchShoe(props.id)
        load()
        return {
           shoe
        }
  }
}
</script>

<style>

</style>