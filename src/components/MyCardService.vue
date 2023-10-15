<script setup>
import {computed} from 'vue'
import IconDelivery from './icons/IconDelivery.vue';
import IconForkKnife from './icons/IconForkKnife.vue';
import IconForkSpoon from './icons/IconForkSpoon.vue';


const props = defineProps({
  name: String,
  color: String,
  stroke: String,
  size: String,
  title: String,
  desc: String,
  el: HTMLElement,
  sizeText: String,
  colorText: String,
  bold: String,
})

const getIcon = computed(() => {
  switch (props.name) {
  case 'delivery':
    return IconDelivery
  case 'fork spoon':
    return IconForkSpoon
  default:
    return IconForkKnife
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
  ' -big': props.size === 'big',



  ' -bigText': props.sizeText === 'big',
  ' -smallText': props.sizeText === 'small',

  ' -h1': props.el === 'h1',
  ' -h2': props.el === 'h2',
  ' -h3': props.el === 'h3',
  ' -h4': props.el === 'h4',

  ' -orangeText': props.colorText === 'orange',

  ' -bold': props.bold === 'bold'
}))
</script>



<template>
  <div class="card__content">
    <i class="icon" :class="className">
      <component :is='getIcon'>

      </component>


    </i>
    <h2 v-if="props.el === 'h2'"  class="title" :class="className">{{title
    }}</h2>
    <h1 v-if="props.el === 'h1'"  class="title" :class="className">{{title
    }}</h1>
    <h3 v-if="props.el === 'h3'"  class="title" :class="className">{{title
    }}</h3>
    <h4 v-if="props.el === 'h4'"  class="title" :class="className">{{title
    }}</h4>
    <p class="card__content-width">
      {{ desc }}
    </p>
  </div>
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
        height: rem(70);
        width: rem(70);

        svg {
            width: rem(35);
        }
    }
}

.card__content{
  display: inline-flex;
  padding: rem(103) rem(52);
  flex-direction: column;
  align-items: center;
  gap:rem(42);
  transition: all .5s;
 
  border-radius: rem(35);
  border: 1px solid $gray;
  background: $white;

  &-width{
    min-width: rem(300);
    max-width: rem(380);
    text-align: center;
  }

}

.card__content:hover{
  cursor: pointer;
  border: 1px solid rgba(182, 182, 182, 0.00);
  box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.15);
}

.title{
  font-size: $regular-font-size;
  &.-smallText{
    font-size: $medium-font-size;

  }
  &.-bigText{
    font-size: $giant-font-size;
  }

  &.-orangeText{
    color: $primary-color;
  }
  &.-bold{
    font-weight: 700;
  }
}
</style>