<template>
  <div class="product">
     <div class="product__container">
        <Photo :mainShoe="true"/>
        <Detail :shoe="shoe[0]"/>
     </div>
  </div>
</template>

<script>
import Photo from '@/components/Photo/Photo.vue'
import fetchShoe  from '@/fetch/fetchShoe.js'
import Detail from '@/components/Detail/Detail.vue'

export default {
  components:{
    Photo,
    Detail
  },
  props:['id'],
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