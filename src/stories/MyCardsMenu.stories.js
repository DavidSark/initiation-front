import MyCardsMenu from '@/components/MyCardsMenu.vue'

export default {
  title: 'Components/MyCardsMenu',
  component: MyCardsMenu,
  argTypes: {
    
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCardsMenu
      },
      setup() {
        return { args }
      },
      template: `<MyCardsMenu v-bind="args" />`
    }
  },
  args: {
    id: 1,
    title: 'Burger',
    sauce: 'Mushroom Sauce',
    imageSrc: 'src/assets/burger_sandwich.png',
    imageAlt: 'image de menu',
  }
}