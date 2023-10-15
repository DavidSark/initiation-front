<script setup>
import MyIcon from './elements/MyIcon.vue';
import MyTitle from './elements/MyTitle.vue';
import MyDesc from './elements/MyDesc.vue';

</script>

<template>
    <div class="section">

        <div class="section__title">
            <MyTitle el="h3" color="orange">Testimonials</MyTitle>
            <MyTitle el="h3" bold="bold" size="medium">Our Happy Client Says</MyTitle>
        </div>
        
        <div class="card">
            <div class="card__right">
                <div class="card__right-info">
                    <div class="card__right-info-image">
                        <img src="src/assets/man.png" alt="">
                    </div>
                    <div class="card__right-info-desc">
                        <MyTitle el="h4" bold="bold" size="default">Willians Jhone</MyTitle>
                        <MyDesc size="small">CEO & Co-Founder</MyDesc>
                    </div>
                </div>
                <div class="card__right-text">
                    <MyDesc>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing
                        dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat
                        neque ultrices nunc, dolor egestas mus.”</MyDesc>
                </div>
                <div class="card__icons-left">
                    <MyIcon color="orange" stroke="white" name="left arrow"></MyIcon>
                </div>

                <div class="card__icons-right">
                    <MyIcon color="orange" stroke="white" name="right arrow2"></MyIcon>
                </div>
            </div>
            
            <div class="card__left">
                <img src="@/assets/junk-food-background.png">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section {
    margin-top: rem(100) ;
    &__title {
            text-align: center;
            margin-bottom: rem(60);
        }
    .card{
        display: flex;
        gap: rem(100);
        align-items: center;
        &__right {
        position: relative;
        border-radius: rem(35);
        background: $white;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.10);
        height: rem(445);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: rem(40);
        flex: 1;
            &-info {
                display: flex;
                justify-content: center;
                align-items: center;
                &-image {
                    margin: 0 rem(20);
                    img {
                        border-radius: 100%;
                    }
                }
            }

            &-text {
                width: rem(570);
                margin: 0 auto;
                text-align: center;
                margin-bottom: rem(60);
                padding: 0 40px;
            }
        }

        &__icons-left {
            position: absolute;
            top: 50%;
            left: -3.5%;
        }

        &__icons-right {
            position: absolute;
            top: 50%;
            right: -3.5%;
        }

    }
}
</style>