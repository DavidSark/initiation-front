<script setup>

</script>
<template>
    <div class="button__bike">
        <p>Bike delivery</p>
        <div class="button__bike-image">
            <img src="src/assets/bike_delivery.png" alt="image livraison">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.button__bike{
    display: flex;
    background: $secondary-color;
    width: rem(270);
    height: rem(63);
    align-items: center;
    border-radius:rem(31.5);
    justify-content: space-between;
    &-image{
        background: #F6F6F6;
        width: rem(54);
        height: rem(54);
        margin-right: rem(3.09);
        border-radius: rem(37.5);
    }
    img{
        margin-top: rem(5);
        border-radius: rem(37.5);
        
    }
    p{
        color: $primary-color;
        font-size: $regular-font-size;
        font-weight: 600;
        padding-left: rem(25);
    }
}
</style>