import MyDesc from '@/components/elements/MyDesc.vue'

export default {
  title: 'Elements/MyDesc',
  component: MyDesc,
  argTypes: {
    color:{
      control: 'select',
      options: ['default', 'light gray', 'white']
    },
    bold:{
      control: 'select',
      options: ['default', 'bold']
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'medium']
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
      template: `<MyDesc v-bind="args" >Description</MyDesc>`
    }
  },
  args: {
    
  }
}

