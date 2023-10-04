<script setup>
import {computed} from "vue"
import MyIcon from './MyIcon.vue';
const props = defineProps({
        href: String,
        size: String,
        variant: String,
        hasIcon: Boolean,
    })
    
const className = computed (() => ({
  
  ' -rounded': props.variant === 'rounded',
  ' -small': props.size === 'small',
  ' -hasIcon': props.hasIcon,
}))



</script>

<template>
    <a v-if="href" :href="href" :class="className"  class="button">
        <slot></slot>
        
        <MyIcon :class="className" class="button__hasIcon" v-if="hasIcon" name="right arrow" color="white" stroke="black" size="small" />
    </a>
    <button :content="content" v-else class="button" :class="className" >
   <slot></slot>
        <MyIcon v-if="hasIcon" :class="className" class="button__hasIcon"  name="right arrow" color="white" stroke="black" size="small" />
    </button>
</template>

<style lang="scss" scoped>

    .button {
        border: none;
        color: $white;
        display: inline-flex;
        padding:rem(33) rem(67);
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        border-radius: 0.9375rem;
        background: linear-gradient(180deg, #EFAB68 0%, #F48E28 100%);
        font-weight: 600;
        box-shadow: 0px rem(4) rem(4) rgba(0,0,0,0.25);
        font-size: $regular-font-size;
        font-family: $primary-font;
        display: inline-block;
        text-decoration: none;
        
        &.-rounded{
            background: $primary-color;
            padding: rem(26) rem(64);
            border-radius: rem(37);
            
        }

        &.-small{
            font-size: $small-font-size;
            padding: rem(14) rem(29);
            font-weight: 400;
        }

        &.-hasIcon{
            > * {
                margin-left: rem(15);
            }
        }
    }
    
</style>