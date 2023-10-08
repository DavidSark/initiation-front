import MyDesc from '@/components/elements/MyDesc.vue'

export default {
  title: 'Elements/MyDesc',
  component: MyDesc,
  argTypes: {
    color:{
      control: 'select',
      options: ['default', 'light gray']
    },
    bold:{
      control: 'select',
      options: ['default', 'bold']
    }
  }
}

export const Desc = {
  render: (args) => {
    return {
      components: {
        MyDesc,
      },
      setup(){
        return { args }
      },
      template: `<MyDesc v-bind="args" >Mon titre</MyDesc>`
    }
  },
  args: {
    
  }
}

