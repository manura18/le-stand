import type { Meta, StoryFn } from '@storybook/vue3'
import { SHerald } from '.'

const meta: Meta = {
  title: 'UI/SHerald',
  component: SHerald,
  args: {
    title: 'Вісник',
  },
}

export default meta

export const Herald: StoryFn = (props) => <SHerald {...props} />
