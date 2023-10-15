import CommentaryCard from '@/components/CommentaryCard.vue'

export default {
  title: 'Components/CommentaryCard',
  component: CommentaryCard,
  argTypes: {
    
  }
}

export const Commentary = {
  render: (args) => {
    return {
      components: {
        CommentaryCard,
      },
      setup(){
        return { args }
      },
      template: `<CommentaryCard v-bind="args"/>`
    }
  },
  args: {

  }
}

