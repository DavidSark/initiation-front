<script setup>
import MyTitle from '../elements/MyTitle.vue';
import MyButton from '../elements/MyButton.vue';
import MyDesc from '../elements/MyDesc.vue';
</script>

<template>
    <div class="card">

        <img src="@/assets/burger.png" alt="">

        <div class="card__info">
            <MyTitle el="h4" color="white" size="medium" bold="bold">Subcribe To Our Newsletter</MyTitle>
            <MyDesc color="white">Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna
                venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</MyDesc>
            <div class="card__input">
                <input placeholder="Type your email...">
                <div class="card__input-absolute">
                    <MyButton size="small">SUBSCRIBE</MyButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin: rem(200) 0;
    background: $black;
    max-height: rem(300);
    border-radius: rem(50);
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 40%;
        max-width: rem(600);
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: rem(30);
        color: white;
        max-width: fit-content;
        max-width: rem(570);
    }


    &__input {
        position: relative;

        input {
            width: 75%;
            height: rem(72);
            flex-shrink: 0;
            border-radius: rem(15);
            padding-left: rem(20);
            margin-right: rem(320);
            font-size: $regular-font-size;

            &:focus {
          outline: none;         
            }
        }
       

        &-absolute {
            position: absolute;
            top: 50%;
            right: 23%;
            transform: translateY(-50%);
        }
    }

}

@media screen and (max-width:1280px) {
    .card {
        img {
            display: none;
        }
    }
}</style>