<script setup>
import {computed} from 'vue'
import IconFacebook from '@/components/icons/socialicons/IconFacebook.vue'
import IconTwitter from '@/components/icons/socialicons/IconTwitter.vue'
import IconLinkedin from '@/components/icons/socialicons/IconLinkedin.vue'
import IconInstagram from '@/components/icons/socialicons/IconInstagram.vue'

const props = defineProps({
    name: String, 
})

const getSocial = computed(()=> {
    switch (props.name){
        case 'twitter':
            return IconTwitter
        case 'linkedin':
            return IconLinkedin
        case 'instagram':
            return IconInstagram
        default:
            return IconFacebook
    }
})


</script>

<template>
<i class="icon">
<component :is="getSocial"></component>
</i>

</template>

<style lang="scss" scoped>
.icon{
    background: $secondary-color;
    width: rem(42);
    height: rem(42);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
}
</style>