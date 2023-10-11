import ButtonDelivery from '@/components/Elements/ButtonDelivery.vue'

export default {
    title: 'Elements/ButtonDelivery',
    component : ButtonDelivery,
    argTypes: {

    }
}

export const Button = {
    render: (args) => {
        return{
            components: {
                ButtonDelivery,
            },
            setup() {
                return { args }
            },
            template: `<ButtonDelivery v-binds="args"/>`
        }
    },
    args:{
        
    }
}