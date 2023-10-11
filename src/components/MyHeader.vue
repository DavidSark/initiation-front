<script setup>
import MyIcon from './elements/MyIcon.vue';
</script>

<template>
    <div class="menu">
        <div class="menu__image">
            <img src="src/assets/logo.svg" alt="">
        </div>
        <div class="menu__item">
            <a>Home</a>
            <a>Menu</a>
            <a>Service</a>
            <a>Shop</a>
        </div>    
        <div class="menu__search">
            <MyIcon name="search" color="nobg" stroke="white"/>
            <input placeholder="Search">
            <div class="menu__search-separate"></div>
            <div class="menu__search-cart">
                <MyIcon name="cart" color="nobg" stroke="white"/>
                <div class="menu__search-cart-count">
                    2
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.menu{
display: flex;
align-items: center;
justify-content: space-between;

    &__image{
        flex-shrink: 0; 
        margin-right: 20px; 
    }

    &__item{
        display: flex;
        align-items: center;
        justify-content: end;
        width: 50%;
        gap: 40px;
        flex-shrink: 0;
        flex:1
    }

    &__search{
        border-radius: rem(10);
        background: $white;
        box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.15);
        display: flex;
      
        align-items: center;
        height: rem(65);
        margin-left: 60px;

        &-cart{
            position: relative;
            &-count{
            width: rem(15);
            height: rem(15);
            flex-shrink: 0;
            background-color: $primary-color;
            border-radius: 100%;
            box-shadow: 0px 0px 22px rgba(204, 0, 0, 0.80);
            position: absolute;
            top: 8px;
            right: 8px;
            font-size: $small-font-size;
            text-align: center;
            color: $white;
        }
        }

        input{
            border: none;
            font-size: rem(18);
            font-weight: 600;
            color: $black;
        }

        input:focus{
            outline: none;
        }

        ::placeholder{
            font-size: rem(18);
            font-weight: 600;
            color: $black;
        }

        &-separate{
            margin-left: rem(30);
            border: 1px solid $black;
            widows: rem(1);
            height: rem(37);
            opacity: .3;
        }
        
    }


}
</style>