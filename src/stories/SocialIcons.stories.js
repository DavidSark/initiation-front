
import SocialIcons from '@/components/elements/SocialIcons.vue'

export default {
    title: 'Elements/SocialIcons',
    component: SocialIcons,
    argTypes: {
    name: {
      control: 'select',
      options: ['facebook', 'twitter', 'linkedin', 'instagram']
    }
    }
  }
  
  export const Icon = {
    render: (args) => {
      return {
        components: {
          SocialIcons,
        },
        setup(){
          return {args}
        },
        template: `<SocialIcons v-bind="args"></SocialIcons>`
      }
    },
    args: {
      name: 'facebook'
    }
  }
  
