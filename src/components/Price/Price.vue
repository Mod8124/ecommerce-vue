<template>
    <div class="price">
        <p class="price__endprice">${{shoe.endprice}} <span class="price__porcent">{{shoe.porcent}}%</span></p>
        <div class="price__price"><p class="price__pricePara">${{shoe.price}}</p></div>
    </div>
</template>

<script>
export default {
    props:{
        shoe:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>

</style>