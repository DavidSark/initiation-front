<script setup >
import MyTitle from './elements/MyTitle.vue';
import MyDesc from './elements/MyDesc.vue';
import MyIcon from './elements/MyIcon.vue';
import SocialIcon from './elements/SocialIcons.vue'
</script>

<template>
    <div class="footer">
        <div class="footer__section1">
            <img src="@/assets/logo.svg" alt="logo">
            <div class="footer__section1-content">
                <MyDesc color="light gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.</MyDesc>
                <div class="footer__section1-content-icon">
                    <SocialIcon name="facebook"></SocialIcon>
                    <SocialIcon name="twitter"></SocialIcon>
                    <SocialIcon name="linkedin"></SocialIcon>
                    <SocialIcon name="instagram"></SocialIcon>
                </div>
            </div>
        </div>

        <div class="footer__section2">
            <MyTitle el="h2" bold="bold">Opening Restaurant</MyTitle>
            <div class="footer__section2-content">
                <MyDesc color="light gray">Sat-Wet: 09:00am-10:00PM</MyDesc>
                <MyDesc color="light gray">Thursdayt: 09:00am-11:00PM</MyDesc>
                <MyDesc color="light gray">Friday: 09:00am-8:00PM</MyDesc>
            </div>
        </div>

        <div class="footer__section3">
            <MyTitle el="h2" bold="bold">User Link</MyTitle>
            <div class="footer__section3-content">
                <MyDesc color="light gray">About Us</MyDesc>
                <MyDesc color="light gray">Contact Us</MyDesc>
                <MyDesc color="light gray">Order Delivery</MyDesc>
                <MyDesc color="light gray">Payment & Tex</MyDesc>
                <MyDesc color="light gray">Terms of Services</MyDesc>
            </div>
        </div>

        <div class="footer__section4">
            <MyTitle el="h2" bold="bold">Contact Us</MyTitle>
            <div class="footer__section4-content">
                <MyDesc color="light gray">1234 Country Club Ave</MyDesc>
                <MyDesc color="light gray">NC 123456, London, UK</MyDesc>
                <MyDesc color="light gray">+0123 456 7891</MyDesc>
                <div class="footer__section4-input">
                    <input type="text" placeholder="Enter your email...">
                    <MyIcon name="right arrow" stroke="white" color="orange" size="small"></MyIcon>
                </div>
            </div>
        </div>
       
       
        
    </div>
</template>

<style lang="scss" scoped>
.footer{
    width: 100vw;
    height: fit-content;
    padding: 60px 0;
    background: #fafaff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  
    &__section1{
        width: rem(400);
        img{
            width: rem(150);
        }
        &-content{
            margin-top: rem(20);
            &-icon{
                margin-top: rem(20);
                display: flex;
                gap: rem(10);
                align-items: center;
            }
        }
    }
    &__section2{
        &-content{
            margin-top: rem(40);
            > * {
                padding-top: rem(20);
            }
           }
    }
    &__section3{
        &-content{
            margin-top: rem(40);
            > * {
                padding-top: rem(20);
            }
           }
    }
    &__section4{
        &-content{
            margin-top: rem(40);
            > * {
                padding-top: rem(20);
            }
           }

        &-input{
            margin-top: rem(30);
            padding: rem(10);
            width: rem(287);
            background: $white;
            border-radius: rem(32.5);
            display: flex;
            justify-content: center;
            align-items: center;
            ::placeholder{
                opacity: .3;
            }
            :focus{
                    outline: none;
                }
            input{
                flex: 1;
                margin:0 rem(20);
                border: none;

             
            }
        }
    }
  

}
</style>