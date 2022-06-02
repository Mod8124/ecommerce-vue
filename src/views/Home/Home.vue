<template>
  <div class="home">
                 <div class="home__loading" v-if="shoes.length<1">
                    <h2 class="home__loadingTitle">Loading
                       <span class="home__span home__span-1">.</span>
                       <span class="home__span home__span-2">.</span>
                       <span class="home__span home__span-3">.</span>
                       <span class="home__span home__span-4">.</span>
                    </h2>
                 </div>

                 <div class="home__container" v-else>
                     <div class="home__product" v-for="shoe in shoes" :key="shoe.id">
                         <router-link :to="shoe.id === 0 ? {name:'Product',params:{id:shoe.name}} : {name:'Details', params:{id:shoe.name}}">
                               <Card :shoe="shoe"/>
                        </router-link> 
                     </div>
                 </div>
  </div>
</template>

<script>
// @ is an alias to /src
import fetchShoes from '@/fetch/fetchShoes' ;
import Card from '@/components/Card/Card'
export default {
  name: 'Home',
  components: {
    Card
  },
  setup() {
    const {shoes,load} = fetchShoes()
    load()

    return {
      shoes
    }
  }
}
</script>

<style scoped>

</style>
