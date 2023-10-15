<script setup>
import MyIcon from './elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue'
import MyDesc from './elements/MyDesc.vue'
</script>

<template>
    <div class="cards">
        <div class="cards__element">
            <MyIcon name="clock" color="orange" stroke="white" size="small"></MyIcon>
            <MyTitle el="h2" bold="bold">Today 10:00am - 10:00pm</MyTitle>
            <MyDesc size="small">Working time</MyDesc>
        </div>
        
        <div class="cards__element -secondBorder">
            <MyIcon name="map" color="orange" stroke="white" size="small"></MyIcon>
            <MyTitle el="h2" bold="bold">Washington, D.C., DC,USA</MyTitle>
            <MyDesc size="small">Our Location</MyDesc>
        </div>
       
        <div class="cards__element">
            <MyIcon name="phone" color="orange" stroke="white" size="small"></MyIcon>
            <MyTitle el="h2" bold="bold">+0123 456 7891</MyTitle>
            <MyDesc size="small">Phone Number</MyDesc>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cards {
        margin: rem(135) 0 rem(150) 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: rem(50);
        background: $white;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.05);
        padding: rem(25);
            &__element{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex: 1;         
                gap: rem(7);  
                height: rem(163);
                &.-secondBorder{
                    position: relative;
                    &::after, &::before{
                        content: '';
                        background-color: $gray;
                        width: 1px;
                        display: block;
                        height: 100%;
                        position: absolute;
                    }
                    &::after{
                        left: 0;
                    }
                    &::before{
                        right: 0;
                    }
                }
            }
        
    }
</style>