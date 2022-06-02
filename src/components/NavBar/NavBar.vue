<template>
   <div class="nav nav--mobile"><!--start nav-->
      
    <div class="nav__desktop"><!--nav__desktop-->
        <div class="nav__logo nav__logo-desktop">
           <img src="@/assets/images/logo.svg" alt="logo-svg">
        </div>

        <nav class="nav__links">
            <router-link to="/" class="nav__link nav__link--noSpace">Collections</router-link> 
                    <router-link to="/" class="nav__link">Men</router-link>
                         <router-link to="/" class="nav__link">Women</router-link>
                    <router-link to="/" class="nav__link">About</router-link>
            <router-link to="/" class="nav__link">Contact</router-link>
        </nav>

        <div class="nav__cart nav__cart--desktop">
                  <div class="nav__cartShopping nav__cartShopping--desktop">
                       <img src="@/assets/images/icon-cart.svg" alt="icon-cart" class="nav__shoppingIconCart" @click="changeMiniCard">
                       <span class="nav__cartNumber nav__cartNumber--desktop" @click="changeMiniCard" v-if="shoes.length>0">{{shoes.length}}</span>
                  </div>

                  <img src="@/assets/images/image-avatar.png" alt="avatar" class="nav__avatar nav__avatar--desktop">
        </div>

        <div class="nav__miniCard nav__miniCard--desktop" v-if="showMiniCard">
            <MiniCard/>
        </div>
         
    </div><!--end nav__desktop-->

    <div class="nav__mobile"><!--nav__mobile-->

        <div class="nav__container">
                <div class="nav__mobileContainer">

                    <div :class="showMenu ? 'hambu hambu--active':'hambu'" @click="toggleMenu"></div>

                    <div class="nav__mobileLinksContainer" v-if="showMenu">
                          <div class="nav__mobileLinks">
                                    <nav class="nav__linksMobile">
                                        <router-link to="/" class="nav__linkMobile">Collections</router-link> 
                                            <router-link to="/" class="nav__linkMobile">Men</router-link>
                                                    <router-link to="/" class="nav__linkMobile">Women</router-link>
                                                <router-link to="/" class="nav__linkMobile">About</router-link>
                                        <router-link to="/" class="nav__linkMobile">Contact</router-link>
                                    </nav>
                                </div>
                    </div>
                </div>
        </div><!--end nav__mobile-->

        <div class="nav__logo">
           <img src="@/assets/images/logo.svg" alt="logo-svg">
        </div>

        <div class="nav__cart">
                  <div class="nav__cartShopping">
                      <img src="@/assets/images/icon-cart.svg" alt="icon-cart" @click="changeMiniCard">
                      <span class="nav__cartNumber" v-if="shoes.length>0">{{shoes.length}}</span>
                  </div>

                  <img src="@/assets/images/image-avatar.png" alt="avatar" class="nav__avatar">
        </div>
 
        <div class="nav__miniCard" v-if="showMiniCard">
            <MiniCard/>
        </div>

    </div><!--end nav__mobile-->

  </div><!--end nav-->
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import MiniCard from '@/components/MiniCard/MiniCard.vue'
export default {
    name:"NavBar",
    components:{
        MiniCard
    },
    setup() {
        const showMenu = ref(false)
        const store = useStore()
        const shoes = computed(()=> store.state.shoes)
        const showMiniCard = ref(false)

        const changeMiniCard = () => {
            showMiniCard.value = !showMiniCard.value
        }

        const toggleMenu = () => {
            showMenu.value = !showMenu.value
        }


        return {
            showMenu,
            shoes,
            showMiniCard,
            changeMiniCard,
            toggleMenu
        }
    }
}
</script>

<style>

</style>