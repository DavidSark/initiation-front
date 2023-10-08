import MyCardMenu from '@/components/MyCardMenu.vue'

export default {
  title: 'Components/MyCardMenu',
  component: MyCardMenu,
  argTypes: {
    title:{
      control: 'text'
    },
    sauce:{
      control: 'text'
    },
    imageSrc: {
      control: 'text'
    },
    imageAlt: {
      control: 'text'
    },
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCardMenu
      },
      setup() {
        return { args }
      },
      template: `<MyCardMenu v-bind="args" />`
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