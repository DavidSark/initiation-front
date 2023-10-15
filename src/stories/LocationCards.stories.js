import LocationCards from '@/components/LocationCards.vue'

export default {
  title: 'Components/LocationCards',
  component: LocationCards,
  argTypes: {
    
  }
}

export const Location = {
  render: (args) => {
    return {
      components: {
        LocationCards,
      },
      setup(){
        return { args }
      },
      template: `<LocationCards v-bind="args"/>`
    }
  },
  args: {

  }
}

