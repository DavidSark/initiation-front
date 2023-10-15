<script setup>
import ButtonDelivey from '@/components/elements/ButtonDelivery.vue'
import CardsMenu from '@/components/MyCardsMenu.vue'
import MyTitle from '@/components/elements/MyTitle.vue'
import MyDesc from '@/components/elements/MyDesc.vue'
import MyIcon from '@/components/elements/MyIcon.vue'
import MyButton from '@/components/elements/MyButton.vue'
</script>

<template>
 
    <div class="hero">
      <div class="hero__deliveryButton">
        <ButtonDelivey></ButtonDelivey>
      </div>
      <div class="hero__title">
        <div class="hero__title-space">
          <MyTitle el="h2" size="big" bold="bold">The fastest Delivery <MyTitle el="h2" size="big" color="orange"
              bold="bold"> <span>in</span> Your City</MyTitle>
          </MyTitle>
        </div>
        <MyDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim
          volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum. </MyDesc>

        <div class="hero__buttons">
          <MyButton size="big">Order Now</MyButton>
          <div class="hero__buttons-order">
            <MyIcon name="play" size="very big" color="white" stroke="orange"></MyIcon>
            <MyDesc bold="bold" size="medium">Order Process</MyDesc>
          </div>
        </div>
      </div>
      <div class="hero__cardsmenu">
        <CardsMenu></CardsMenu>
        <div class="hero__cardsmenu-bg"></div>
      </div>
    </div>

</template>


<style scoped lang="scss">
.hero {
  text-transform: capitalize;
  position: relative;
  display: flex;
  padding-top: rem(30);
  justify-content: space-between;

  &__deliveryButton {
    position: absolute;
    top: rem(20);
  }

  &__title {
    width: rem(650);
    min-width: rem(600);
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      color: $black;
    }

    &-space {
      margin: rem(140) 0 rem(50) 0;
    }
  }

  &__cardsmenu {

    position: relative;
    padding-right: rem(40);

    &-bg {
      position: absolute;
      width: rem(445);
      height: rem(837);
      background: #D9D9D9;
      z-index: -99;
      top: 0;
      right: 0;
      border-radius: rem(30);
      background: linear-gradient(200deg, #D9D9D9 -18.39%, rgba(217, 217, 217, 0.00) 89.51%);
    }
  }

  &__buttons {
    margin-top: rem(80);
    display: flex;
    gap: rem(40);

    &-order {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: rem(20);
    }
  }

}</style>