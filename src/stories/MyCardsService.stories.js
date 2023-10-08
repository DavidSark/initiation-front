import MyCardsService from '@/components/MyCardsService.vue'

export default {
  title: 'Components/MyCardsService',
  component: MyCardsService,
  argTypes: {
    name: {
      control: 'select',
      options: [ 'delivery', 'fork spoon', 'default' ]
    },
    color:{
      control: 'select',
      options: ['black', 'white', 'orange', 'light orange', 'nobg']
    },
    stroke:{
      control: 'select',
      options: ['black', 'white', 'orange']
    },
    size:{
      control: 'select',
      options: ['small', 'regular', 'big']
    },
    title:{
      control: 'text'
    },
    desc:{
      control: 'text'
    },
    el : {
      control : "select",
      options : ['h1', 'h2', 'h3', 'h4']
    },
    sizeText : {
      control : "select",
      options : ['default', 'small', 'big']
    },
    colorText:{
      control: "select",
      options: ['default', 'orange']
    },
    bold:{
      control: 'select',
      options: ['default', 'bold']
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCardsService
      },
      setup() {
        return { args }
      },
      template: `<MyCardsService v-bind="args" />`
    }
  },
  args: {
    color: 'light orange',
    stroke: 'orange',
    size: 'big',
    el: 'h2',
    bold: 'bold',
    sizeText: 'small',
    title: "Type something",
    desc: "Type Something"
  }
}