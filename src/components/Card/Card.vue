<template>
        <div class="card">
            <img :src="shoe.image" class="card__image" loading="lazy">

            <Price :shoe="shoe"/>
        </div>
</template>

<script>

import Price from '../Price/Price.vue'

export default {
    props:{
        shoe:{
            type:Object,
            required:true
        }
    },
    components:{
        Price
    }
}
</script>
