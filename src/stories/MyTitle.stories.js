import MyTitle from '@/components/elements/MyTitle.vue'

export default {
  title: 'Elements/MyTitle',
  component: MyTitle,
  argTypes: {
    el : {
      control : "select",
      options : ['h1', 'h2', 'h3', 'h4']
    },
    size : {
      control : "select",
      options : ['default', 'small', 'medium' ,'big']
    },
    color:{
      control: "select",
      options: ['default', 'orange', 'white']
    },
    bold:{
      control: 'select',
      options: ['default', 'bold']
    }
  }
}

export const Title = {
  render: (args) => {
    return {
      components: {
        MyTitle,
      },
      setup(){
        return { args }
      },
      template: `<MyTitle v-bind="args" >Mon titre</MyTitle>`
    }
  },
  args: {
    size: 'big'
  }
}

// export const MainTitle = {
//   ...Title,
//   args: {
//     size: 'big'
//   }
// }

// export const SubTitle = {
//   ...Title,
//   args :{
//     size: 'small',
//   }
// }