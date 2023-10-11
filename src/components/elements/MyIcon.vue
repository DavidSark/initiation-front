<script setup>
import { computed } from 'vue'
import IconCommunity from '../icons/IconCommunity.vue'
import IconDocumentation from '../icons/IconDocumentation.vue'
import IconEcosystem from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconTooling from '../icons/IconTooling.vue'
//import IconArrowBold from '../icons/IconArrowBold.vue'
import IconArrowLeft from '../icons/IconArrowLeft.vue'
import IconArrowRight from '../icons/IconArrowRight.vue'
import IconArrowRight2 from '../icons/IconArrowRight2.vue'
import IconClock from '../icons/IconClock.vue'
import IconForkKnife from '../icons/IconForkKnife.vue'
import IconForkSpoon from '../icons/IconForkSpoon.vue'
import IconDelivery from '../icons/IconDelivery.vue'
import IconMap from '../icons/IconMap.vue'
import IconPhone from '../icons/IconPhone.vue'
import IconStar from '../icons/IconStar.vue'
import IconStarStroke from '../icons/IconStarStroke.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconCart from '../icons/IconCart.vue'


const props = defineProps({
  name: String,
  color: String,
  stroke: String,
  size: String
})


const getIcon = computed(() => {
  switch (props.name) {
  case 'community':
    return IconCommunity
  case 'documentation':
    return IconDocumentation
  case 'ecosystem':
    return IconEcosystem
  case 'support':
    return IconSupport
  case 'left arrow':
    return IconArrowLeft
  case 'right arrow':
    return IconArrowRight
  case 'right arrow2':
    return IconArrowRight2
  case 'delivery':
    return IconDelivery
  case 'clock':
    return IconClock
  case 'fork knife':
    return IconForkKnife
  case 'fork spoon':
    return IconForkSpoon
  case 'map':
    return IconMap
  case 'phone':
    return IconPhone
  case 'star':
    return IconStar
  case 'star stroke':
    return IconStarStroke
  case 'search':
    return IconSearch
  case 'cart':
    return IconCart
  default:
    return IconTooling
  }
})

const className = computed(() => ({
  ' -black': props.color === 'black',
  ' -white': props.color === 'white',
  ' -orange': props.color === 'orange',
  ' -nobg': props.color === 'nobg',
  ' -orangelight': props.color === 'light orange',

  ' -blackStroke': props.stroke === 'black',
  ' -whiteStroke': props.stroke === 'white',
  ' -orangeStroke': props.stroke === 'orange',
  

  ' -small': props.size === 'small',
  ' -big': props.size === 'big'
}))
</script>

<template>
  <i class="icon" :class="className">
    <component :is='getIcon'>

    </component>


  </i>
</template>

<style lang="scss" scoped>
.icon {
    align-items: center;
    background: $white;
    display: inline-flex;
    border-radius: 100%;
    box-shadow: 0 0 5px 0 $gray;
    height: rem(50);
    justify-content: center;
    width: rem(50);

    //couleur du background de l'icone
    &.-black {
        background: $black;
    }

    &.-orange {
        background: $primary-color;
    }

    &.-orangelight {
        background: $secondary-color;
    }

    &.-nobg {
        background: none;
        box-shadow: none;
    }

    //couleur de l'icone
    &.-whiteStroke {
        color: $white;
    }

    &.-blackStroke {
        color: $black;
    }

    &.-orangeStroke {
        color: $primary-color;
    }

    //taille de l'icone & de l'icone

    svg {
        width: rem(20);
    }

    &.-small {
        height: rem(30);
        width: rem(30);

        svg {
            width: rem(10);
        }
    }

    &.-big {
        height: rem(58);
        width: rem(58);

        svg {
            width: rem(35);
        }
    }
}
</style>