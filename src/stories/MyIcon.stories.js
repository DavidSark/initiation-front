
import MyIcon from '@/components/elements/MyIcon.vue'

export default {
  title: 'Elements/MyIcon',
  component: MyIcon,
  argTypes: {
    name: {
      control: 'select',
      options: ['community', 'documentation', 'ecosystem', 'support', 'tooling', 'left arrow', 'right arrow','right arrow2', 'delivery', 'clock', 'fork knife', 'fork spoon', 'map', 'phone', 'star', 'star stroke', 'search', 'cart' ]
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
    }
  }
}
  
export const Icon = {
  render: (args) => {
    return {
      components: {
        MyIcon,
      },
      setup(){
        return {args}
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },
  args: {
    name: 'community',
    color: 'white',
    stroke: 'black'
  }
}
  
